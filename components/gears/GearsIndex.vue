<script setup lang="ts">

</script>

<template>
  <div id="gear1" class="welcome-gear">
    <img src="~/assets/img/gear.png" alt="" width="128">
  </div>
  <div id="gear2" class="welcome-gear">
    <img src="~/assets/img/gear2.png" alt="" width="96">
  </div>
</template>

<style lang="scss" scoped>
.welcome-gear {
  position: absolute;
}
#gear1 img {
  animation-name: gearAnimation;
  animation-duration: 8s;
}
#gear2 img {
  animation-name: gearAnimationR;
  animation-duration: 8s;
}
#gear2 {
  top: calc(50vh - 100px);
  left: calc(50vw + 48px);
}

@include sp-s {
  .welcome-gear {
    transform: scale(1.5);
  }
  #gear2 {
    top: calc(50vh - 180px);
    left: calc(50vw + 48px);
  }
}

/* Animations */
@keyframes gearAnimation {
  0% {transform: rotate(0);}
  100% {transform: rotate(360deg);}
}
@keyframes gearAnimationR {
  0% {transform: rotate(0);}
  100% {transform: rotate(-450deg);}
}
</style>
