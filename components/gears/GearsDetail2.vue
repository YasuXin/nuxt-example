<script setup lang="ts">

</script>

<template>
  <div id="gear-bigL1" class="gear-box gear-big">
    <img src="../../assets/img/gear7.png" alt="" width="200">
  </div>
  <div id="gear-bigL2" class="gear-box gear-big">
    <img src="../../assets/img/gear8.png" alt="" width="200">
  </div>
  <div id="gear-smallL" class="gear-box gear-small">
    <img src="../../assets/img/gear9.png" alt="" width="156">
  </div>

  <div id="gear-bigR3" class="gear-box gear-big">
    <img src="../../assets/img/gear7.png" alt="" width="200">
  </div>
  <div id="gear-bigR4" class="gear-box gear-big">
    <img src="../../assets/img/gear8.png" alt="" width="200">
  </div>

</template>

<style lang="scss" scoped>
.gear-box {
  position: fixed;
  animation-iteration-count: infinite;
}
.gear-big {
  animation-name: gearRotate;
  animation-duration: 7s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.gear-small {
  animation-name: gearRotateR;
  animation-duration: 5.2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
#gear-bigL1, #gear-bigL2 {
  top: 220px;
  left: -144px;
  width: 200px;
  height: 200px;
  filter: drop-shadow(0 0 2px #000000) sepia(.4);
  animation-duration: 4s;
}
#gear-smallL {
  top: 50px;
  left: -128px;
  width: 156px;
  height: 156px;
  filter: drop-shadow(0 0 2px #000000) sepia(.3);
  animation-duration: 3s;
}
#gear-bigR3, #gear-bigR4 {
  top: 100px;
  right: -144px;
  width: 200px;
  height: 200px;
  filter: drop-shadow(0 0 2px #000000) sepia(.4);
  animation-duration: 4s;
}

@include detailNarrow {
  .gear-box img {
    transform: scale(0.8);
  }
  #gear-bigL1, #gear-bigL2 {
    left: -120px;
  }
  #gear-smallL {
    left: -100px;
  }
  #gear-bigR3, #gear-bigR4 {
    right: -120px;
  }
}

@include sp-s {
  .gear-box {
    display: none;
  }
}
/* Animations */
@keyframes gearRotate {
  0% {transform: rotate(0deg)}
  100% {transform: rotate(360deg)}
}
@keyframes gearRotateR {
  0% {transform: rotate(0deg)}
  100% {transform: rotate(-360deg)}
}
</style>
