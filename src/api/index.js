import axios from "axios";
import store from "@/store";
import router from "@/router";

const httpClient = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
  // withCredentials: true,
  timeout: `${import.meta.env.VITE_APP_TIMEOUT}`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

let loading = 0;
httpClient.interceptors.request.use(
  (config) => {
    loading++;
    if (!config.notLoading) {
      store.commit("setShowLoading", true);
    }

    const token = localStorage.getItem("api_token") || null;
    if (token) config.headers.common["Authorization"] = `Bearer ${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  (response) => {
    if (loading) {
      loading--;
      if (!loading) {
        store.commit("setShowLoading", false);
      }
    }

    if (response.data.status === "error") {
      throw response;
    }

    return response.data;
  },
  async (error) => {
    if (loading) {
      loading--;
      if (!loading) {
        store.commit("setShowLoading", false);
      }
    }
    throw error;
  }
);

export const API = (method, path, body, config = {}) => {
  let res = null;
  switch (method.toLowerCase()) {
    case "get":
      // in case GET method: body is config
      res = httpClient[method.toLowerCase()](path, body || config);
      break;
    default:
      res = httpClient[method.toLowerCase()](path, body, config);
  }

  return res.catch(async (error) => {
    if (error.data.status === "error") {
      console.error(error.data.message);
      throw error.data;
    }

    switch (error.status) {
      case 400: // Wrong url or params
      case 404: // Missing parameters | Missing upload file
      case 409: // Conflict
      case 500: // Server error
        console.error(error.data.message);
        throw error.data.message;

      case 403: // Permission
      case 401: // Signature verification failed | Token has been revoked
        store.dispatch("logout").then(() => {
          router.push({ path: "/login" });
        });
        break;

      default:
        console.error(error.data.message);
        throw error.data.message;
    }
  });
};
