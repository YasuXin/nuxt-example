<script setup lang="ts">

</script>

<template>
  <div id="gear-bigR1" class="gear-box gear-big">
    <img src="../../assets/img/gear7.png" alt="" width="280">
  </div>
  <div id="gear-bigR2" class="gear-box gear-big">
    <img src="../../assets/img/gear8.png" alt="" width="280">
  </div>

  <div id="gear-smallR2" class="gear-box gear-small">
    <img src="../../assets/img/gear9.png" alt="" width="120">
  </div>

  <div id="gear-bigU1" class="gear-box gear-big">
    <img src="../../assets/img/gear7.png" alt="" width="220">
  </div>
  <div id="gear-bigU2" class="gear-box gear-big">
    <img src="../../assets/img/gear7.png" alt="" width="250">
  </div>

  <div id="gear-bigU3" class="gear-box gear-big">
    <img src="../../assets/img/gear5.png" alt="" width="350">
  </div>
  <div id="gear-bigU4" class="gear-box gear-big">
    <img src="../../assets/img/gear6.png" alt="" width="350">
  </div>
  <div id="gear-smallU" class="gear-box gear-small">
    <img src="../../assets/img/gear9.png" alt="" width="130">
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

#gear-bigR1, #gear-bigR2 {
  top: 300px;
  right: -160px;
  width: 280px;
  height: 280px;
  filter: drop-shadow(0 0 2px #000000) sepia(.5);
  animation-duration: 6.0s;
}

#gear-smallR2 {
  top: 485px;
  right: -75px;
  width: 120px;
  height: 120px;
  filter: drop-shadow(0 0 2px #000000) sepia(.4);
}

#gear-bigU1 {
  top: calc(100vh - 90px);
  right: 15px;
  width: 220px;
  height: 220px;
  filter: drop-shadow(0 0 2px #000000) sepia(.2);
  animation-duration: 7.191s;
}
#gear-bigU2 {
  top: calc(100vh - 70px);
  right: 315px;
  width: 250px;
  height: 250px;
  filter: drop-shadow(0 0 2px #000000) sepia(.8);
  animation-duration: 16s;
}

#gear-bigU3, #gear-bigU4 {
  top: calc(100vh - 155px);
  left: 80px;
  width: 350px;
  height: 350px;
  animation-duration: 20s;
  filter: drop-shadow(0 0 1px #000000) sepia(0.1);
}

#gear-smallU {
  top: calc(100vh - 45px);
  left: 320px;
  width: 130px;
  height: 130px;
  animation-duration: 13.9s;
  filter: drop-shadow(0 0 2px #000000) sepia(.3);
}

@include detailNarrow {
  .gear-box img {
    transform: scale(0.8);
  }
  #gear-bigR1, #gear-bigR2 {
    top: 310px;
  }
  #gear-smallR2 {
    top: 470px;
  }
  #gear-bigU1 {
    right: -30px;
  }
  #gear-smallU {
    left: 295px;
  }
}

@include sp-sh {
  #gear-bigU1, #gear-bigU2, #gear-bigU3, #gear-bigU4, #gear-smallU {
    display: none;
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
