<script setup lang="ts">
const headerToggle = ref(false)

onMounted(() => {
  setTimeout(() => {
    headerToggle.value = true
  }, 100)
})

</script>

<template>
  <transition name="app-fade">
    <div id="background" v-show="headerToggle">
      <Header></Header>
      <slot></slot>
      <Footer></Footer>
    </div>
  </transition>

  <ReturnTop></ReturnTop>
  <GearsPortfolio></GearsPortfolio>
</template>

<style lang="scss" scoped>
#background {
  background-image: url("~/assets/img/background.jpg"), linear-gradient(90deg, rgba(255,255,255,0.4), rgba(255,255,255,0.7));
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-blend-mode: overlay;
}

.app-fade-enter-active{
  transition: opacity .2s;
}
.app-fade-enter-from {
  opacity: 0;
}
.app-fade-enter-to {
  opacity: 1;
}
</style>
