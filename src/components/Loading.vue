<template>
  <a-modal
    v-model:visible="visible"
    :forceRender="false"
    :closable="false"
    :maskClosable="false"
    :footer="null"
    wrapClassName="modal-ctn"
    centered
  >
    <div class="spin-ctn"><a-spin size="large" /></div>
  </a-modal>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      visible: false,
    };
  },

  computed: {
    ...mapState(["loading"]),
  },

  watch: {
    loading(val) {
      this.visible = val;
    },
  },
};
</script>

<style lang="scss">
.modal-ctn .ant-modal-content {
  background-color: transparent;
  box-shadow: none;
}

.spin-ctn {
  text-align: center;
}
</style>
