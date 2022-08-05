import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      count: 10,
      loading: false,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setShowLoading(state, isShow) {
      state.loading = isShow;
    },
  },
  actions: {
    increment(dispatch) {
      dispatch("increment");
    },
  },
});

export default store;
