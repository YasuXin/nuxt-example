<script setup lang="ts">

onMounted(() => {
  document.addEventListener('wheel', async (e): Promise<void> => {
    await wheelScroll(e)
  })
})
async function wheelScroll(e: any): Promise<void> {
  let els = document.querySelectorAll('.arrow-img')
  els.forEach(el => {
    const el2 = el as HTMLElement
    el2.classList.add('act')
    setTimeout(() => {
      el2.classList.remove('act')
    }, 1000)
  })
}

</script>

<template>
  <div class="arrow">
    <img src="~/assets/img/arrow.png" alt="→" class="arrow-img" width="32">
  </div>
</template>

<style lang="scss" scoped>
.arrow {
  width: 32px;
  height: 48px;
}
.arrow-img {

}
.act {
  animation-name: arrowAnimation;
  animation-duration: 1s;
  animation-fill-mode: backwards;
}

@keyframes arrowAnimation {
  0% {}
  50% {transform: scale(2.5);}
  100% {}
}
</style>
