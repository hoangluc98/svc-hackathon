<template>
  HelloWorld {{ data }} {{ count }}
  <a-button type="primary">Primary button</a-button>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import { API } from "@/api";

export default {
  data() {
    return {
      data: 123,
      value: "",
    };
  },

  computed: {
    ...mapState(["count"]),
  },

  created() {
    API("get", "/test");
  },

  methods: {
    ...mapMutations(["increment"]),
  },
};
</script>

<style lang="scss" scoped>
.read-the-docs {
  color: #888;
}
</style>
