<template>
  <div class="nf-container">
    <div class="not-found">
      <div class="not-found__404">404</div>
      <div>Page Not Found</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/_mixin";

.nf-container {
  @include grid-content-center;
  height: 600px;
}

.not-found {
  text-align: center;

  &__404 {
    font-size: 50px;
    color: var(--red);
    margin-bottom: 16px;
  }
}
</style>
