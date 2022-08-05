<template>
  HelloWorld {{ data }} {{ count }}
  <a-button type="primary">Primary button</a-button>

  <Table />
</template>

<script>
import { mapMutations, mapState } from "vuex";
import Table from "@/components/Table.vue";
import { API } from "@/api";

export default {
  components: {
    Table,
  },

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
