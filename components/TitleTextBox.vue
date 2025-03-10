<script setup lang="ts">
const props = defineProps({
  toggle: {
    type: Boolean,
  },
  title: {
    type: String,
  },
  scroll: {
    type: Number,
    required: true
  }
})

const toggle = ref(props.toggle)

onMounted(() => {
  document.addEventListener('scroll', () => {
    if(window.scrollY >= props.scroll) {
      toggle.value = true
    }
  })
})

</script>

<template>
  <transition name="fade-title">
    <div class="title-box" v-show="toggle">
      <h1>{{ props.title }}</h1>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.title-box {
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  background-image: $title-bg-color;
  border-left: 20px solid lightgreen;
}
.title-box h1 {
  display: inline-block;
  margin-left: 10px;
  font-size: $title-font-size;
  font-family: "游明朝", serif;
  font-style: italic;
}

@include sp-s {
  .title-box h1 {
    font-size: $sp-title-font-size;
  }
}
.fade-title-enter-active {
  transition: opacity .5s, transform .5s;
  @include sp-s {
    transition: opacity .4s, transform .4s;
  }
}
.fade-title-enter-from {
  opacity: 0;
  transform: translateX(100%);
}
.fade-title-enter-to {
  opacity: 1;
}
</style>
