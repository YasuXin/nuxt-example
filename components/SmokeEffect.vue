<script setup lang="ts">

onMounted(() => {
  setTimeout(() => {
    const els = document.querySelector('#smoke-parent') as HTMLElement
    for(let i = 0; i < 100; i ++) {
      setTimeout(() => {
        const className = "smoke" + Math.floor(Math.random() * 8 + 1)
        const durationMath = Math.floor(Math.random() * 40 + 10)
        const positionLeft = Math.floor(Math.random() * window.innerWidth)
        const imageSize = Math.floor(Math.random() * 100)
        const divElement = document.createElement('div')
        divElement.classList.add('smoke' + Math.floor(Math.random() * 2 + 11))
        divElement.classList.add(className)
        divElement.style.animationDuration = durationMath + 's'
        divElement.style.left = positionLeft + 'px'
        divElement.style.backgroundSize = 'contain ' + imageSize + 'px'
        els.appendChild(divElement)
      }, 1200)
    }
  }, 3000)
})

</script>

<template>
  <div id="smoke-parent"></div>
</template>

<style lang="scss">
#smoke-parent {
  width: 100%;
}

.smoke11 {
  width: 300px;
  height: 300px;
  position: fixed;
  bottom: -600px;
  animation-iteration-count: infinite;
  animation-name: smokeAnimation1;
}
.smoke12 {
  width: 300px;
  height: 300px;
  position: fixed;
  bottom: -600px;
  animation-iteration-count: infinite;
  animation-name: smokeAnimation2;
}
.smoke1 {
  background-image: url("@/assets/img/smoke1.png");
}
.smoke2 {
  background-image: url("@/assets/img/smoke2.png");
}
.smoke3 {
  background-image: url("@/assets/img/smoke3.png");
}
.smoke4 {
  background-image: url("@/assets/img/smoke4.png");
}
.smoke5 {
  background-image: url("@/assets/img/smoke5.png");
}
.smoke6 {
  background-image: url("@/assets/img/smoke6.png");
}
.smoke7 {
  background-image: url("@/assets/img/smoke7.png");
}
.smoke8 {
  background-image: url("@/assets/img/smoke8.png");
}
.smoke9 {
  background-image: url("@/assets/img/smoke9.png");
}

@include sp-s {
  #smoke-parent {
    display: none;
  }
}
@keyframes smokeAnimation1 {
  0% {opacity: 0.1;}
  50% {transform: translateY(-800px) translateX(200px) scale(0.5); opacity: 0;}
  100% {transform: translateY(-800px) translateX(-100px) scale(0.7); opacity: 0;}
}
@keyframes smokeAnimation2 {
  0% {opacity: 0.2;}
  50% {transform: translateY(-800px) translateX(-100px) scale(0.8); opacity: 0;}
  100% {transform: translateY(-800px) translateX(100px) scale(1); opacity: 0;}
}
</style>
