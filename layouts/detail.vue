<script setup lang="ts">
const noSmoke = ref(false)

onMounted(() => {
  setTimeout(() => {
    const id = document.querySelector('#background-in') as HTMLElement
    id.classList.add('bg-anim')
  }, 200)
})

const changeNoSmoke = () => {
  noSmoke.value = !noSmoke.value
}
</script>

<template>
  <transition appear>
    <div id="background-out">
      <div id="background-in">
        <div id="background-steam">
          <div id="background-steam-in">
          <DetailHeader @child-event="changeNoSmoke" :noSmoke="noSmoke"></DetailHeader>
          <slot></slot>
          </div>
        </div>
      </div>
    </div>

  </transition>

  <GearsDetail2></GearsDetail2>
  <PipesDetail></PipesDetail>
  <GearsDetail></GearsDetail>
  <SmokeEffect v-if="!noSmoke"></SmokeEffect>

</template>

<style lang="scss" scoped>
#background-out {
  background-image: radial-gradient(circle at center,
      rgba(0,0,30,0.5), rgba(30,30,120,1), rgba(60,90,150,1));
  width: 100%;
}
#background-in {
  width: 100%;
  height: 100%;
}
#background-steam {
  background-image: url("@/assets/img/back-detail.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  animation: backgroundAnimation 16s infinite;
}
#background-steam-in {
  width: 100%;
  height: 100%;
  animation: backgroundAnimation 16s infinite;
}
.bg-anim {
  animation-name: bgFade;
  animation-duration: 1.8s;
  animation-fill-mode: forwards;
}

@keyframes bgFade  {
  0% {background-color: rgba(0,0,0,0);}
  20% {background-color: rgba(0,0,0,0.8);}
  100% {background-color: rgba(0,0,0,0.4);}
}
@keyframes backgroundAnimation {
  0% {background-color: rgba(255,255,255,0)}
  50% {background-color: rgba(255,255,255,0);}
  70% {background-color: rgba(150,30,30,0.8);}
  80% {background-color: rgba(150,30,30,0.8);}
  100% {background-color: rgba(255,255,255,0);}
}
.v-enter-active {
  transition: opacity .5s;
}
.v-enter-from {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
</style>
