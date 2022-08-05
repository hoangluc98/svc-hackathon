<template>
  <router-view></router-view>
  aaaaaa
  <Loading />
</template>

<script>
import Loading from "@/components/Loading.vue";

export default {
  components: {
    Loading: Loading,
  },
};
</script>
