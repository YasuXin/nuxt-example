<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <div class="subtitle">
    <h1>{{ props.title }}</h1>
  </div>
</template>

<style lang="scss" scoped>
.subtitle {
  padding-bottom: 10px;
  border-bottom: $border-gray;
}
.subtitle h1::before {
  content: "●";
  font-size: $title-font-big;
  margin-right: 10px;
}
.subtitle h1 {
  font-size: $subtitle-font-size;
}
@include sp-s {
  .subtitle h1::before {
    content: none;
  }
  .subtitle h1 {
    font-size: $sp-subtitle-font-size;
  }
}
</style>
