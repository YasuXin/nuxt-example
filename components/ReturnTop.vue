<script setup lang="ts">
const toggle = ref(false)

function scrollTop(): void {
  window.scrollTo(0, 0);
}

onMounted(() => {
  document.addEventListener('scroll', () => {
    //console.log(window.scrollY)
    if(window.scrollY >= 300) {
      toggle.value = true
    }
  })
})

onMounted(() => {
  document.addEventListener('scroll', () => {
    //console.log(window.scrollY)
    if(window.scrollY <= 200) {
      toggle.value = false
    }
  })
})
</script>

<template>
  <transition name="fadein">
    <button id="return-top" class="scroll-button" v-show="toggle" @click="scrollTop">
      <img src="~/assets/img/return.png" alt="ReturnTheTop" width="100">
    </button>
  </transition>
</template>

<style lang="scss" scoped>
#return-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 3;
}
#return-top img:hover {
  animation-name: arrowAnimation;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}
.fadein-enter-active, .fadein-leave-active {
  transition: opacity 2s, transform 2s;
}
.fadein-enter-from, .fadein-leave-to {
  opacity: 0;
  transform: translateY(50px);
}
.fadein-enter-to, .fadein-leave-from {
  opacity: 1;
}
@keyframes arrowAnimation {
  0% {}
  100% {filter: drop-shadow(0 0 4px #003) blur(1px);}
}
</style>
