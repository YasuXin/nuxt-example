<script setup lang="ts">

</script>

<template>
  <div class="detail-text">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.detail-text {
  padding: 20px;
}

@include sp-s {
  ::v-deep(p) {
    font-size: $sp-font-size;
  }
  .detail-text {
    padding: 10px 5px;
  }
}
</style>
