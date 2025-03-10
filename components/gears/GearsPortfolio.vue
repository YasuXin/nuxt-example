<script setup lang="ts">
let beforeMove = 0
let afterMove = 0
let difference = 0

function gearStop(id: string): void {
  let el = document.querySelector(id) as HTMLElement
  el.style.animationPlayState = "running"
  el.style.animationDuration = difference + ""
  setTimeout((): void => {
    el.style.animationPlayState = "paused"
  }, 2200)
}

onMounted(() => {
  gearStop("#portfolio-gear-big")
  gearStop("#portfolio-gear-small")
})

onMounted(() => {
  document.addEventListener('scroll', async (e: any): Promise<void> => {
    await scrollE()
  })
})

async function scrollE(): Promise<void> {
  afterMove = window.scrollY
  difference = afterMove - beforeMove
  let elB = document.querySelector('#portfolio-gear-big') as HTMLElement
  let elS = document.querySelector('#portfolio-gear-small') as HTMLElement
  if(difference > 0) {
    elB.style.animationDirection = "normal"
    elS.style.animationDirection = "normal"
  } else {
    elB.style.animationDirection = "reverse"
    elS.style.animationDirection = "reverse"
  }
  elB.style.animationPlayState = "running"
  elS.style.animationPlayState = "running"
  elB.style.animationDuration = difference + "s"
  elS.style.animationDuration = difference + "s"
  setTimeout(() => {
        elB.style.animationPlayState = "paused"
        elS.style.animationPlayState = "paused"
      }, Math.abs(difference)
  )
  beforeMove = window.scrollY
}
</script>

<template>
  <div id="portfolio-gear-big" class="gear-box">
    <img src="../../assets/img/gear3.png" alt="" width="192">
  </div>
  <div id="portfolio-gear-small" class="gear-box">
    <img src="../../assets/img/gear4.png" alt="" width="96">
  </div>
</template>

<style lang="scss" scoped>
.gear-box {
  position: fixed;
  animation-iteration-count: infinite;
}
#portfolio-gear-big {
  top: calc(50vh - 96px);
  right: -104px;
  width: 192px;
  height: 192px;
  animation-name: gearRotate;
  animation-duration: 3s;
}
#portfolio-gear-small {
  top: calc(50vh - 175px);
  right: -54px;
  width: 96px;
  height: 96px;
  animation-name: gearRotateR;
  animation-duration: 3s;
}
.gear-box img {
  filter: drop-shadow(0 0 2px #000000);
}

/* Animations */
@keyframes gearRotate {
  0% {transform: rotate(0deg)}
  100% {transform: rotate(360deg)}
}
@keyframes gearRotateR {
  0% {transform: rotate(0deg)}
  100% {transform: rotate(-450deg)}
}

/* For Narrower Than Tablet */
@media(max-width: 767.5px) {
  #portfolio-gear-big {
    right: -124px;
  }
  #portfolio-gear-small {
    right: -74px;
  }
}
</style>
