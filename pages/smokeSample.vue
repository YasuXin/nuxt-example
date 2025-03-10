<script setup lang="ts">
definePageMeta({
  layout: "welcome"
})

onMounted(() => {
  const els = document.querySelector('#smoke') as HTMLElement
  for(let i = 0; i < 10; i ++) {
    setTimeout(() => {
      const className = "smoke" + Math.floor(Math.random() * 8 + 1)
      const durationMath = Math.floor(Math.random() * 20 + 5)
      const positionLeft = Math.floor(Math.random() * window.innerWidth)
      const divElement = document.createElement('div')
      divElement.classList.add('smoke')
      divElement.classList.add(className)
      divElement.style.animationDuration = durationMath + 's'
      divElement.style.left = positionLeft + 'px'
      els.appendChild(divElement)
    }, 200)

  }
})
</script>

<template>
  <div id="smoke">

  </div>
</template>

<style lang="scss" scoped>
#smoke {
  background-color: black;
  width: 100%;
  height: 500px;
}
.smoke {
  width: 300px;
  height: 300px;
  position: absolute;
  top: 600px;
  animation-name: smokeAnimation;
  animation-iteration-count: infinite;
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
@keyframes smokeAnimation {
  0% {opacity: 0.1;}
  100% {transform: translateY(-700px) scale(0.7); opacity: 0;}
}
</style>
