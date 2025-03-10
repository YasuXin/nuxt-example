<script setup lang="ts">

</script>

<template>

  <div class="pipe7 obj"></div>
  <div class="pipe2 obj"></div>
  <div class="pipe1 obj"></div>

  <div class="pipe6 obj"></div>
  <div class="pipe3 obj"></div>
  <div class="pipe4 obj"></div>
  <div class="pipe5 obj"></div>
  <div class="pipe8 obj"></div>

  <div id="machine-left1">
    <div class="pipe-smoke pipe-smoke1"></div>
    <div class="pipe-smoke pipe-smoke2"></div>
    <div class="pipe-smoke pipe-smoke3"></div>
    <div class="pipe-smoke pipe-smoke4"></div>
    <div class="pipe-smoke pipe-smoke5"></div>
    <div class="pipe-smoke pipe-smoke6"></div>
    <div class="pipe-smoke pipe-smoke7"></div>
    <div class="pipe-smoke pipe-smoke8"></div>
    <div class="pipe-smoke pipe-smoke9"></div>
    <div class="pipe-smoke pipe-smoke1 alt"></div>
    <div class="pipe-smoke pipe-smoke2 alt"></div>
    <div class="pipe-smoke pipe-smoke3 alt"></div>
    <div class="pipe-smoke pipe-smoke4 alt"></div>
    <div class="pipe-smoke pipe-smoke5 alt"></div>
    <div class="pipe-smoke pipe-smoke6 alt"></div>
    <div class="pipe-smoke pipe-smoke7 alt"></div>
    <div class="pipe-smoke pipe-smoke8 alt"></div>
    <div class="pipe-smoke pipe-smoke9 alt"></div>

    <div class="machine-pipe obj"></div>
    <div class="machine-pipe2 obj"></div>
    <div class="lever2 obj"></div>
    <div class="lever1 obj"></div>
    <div class="mater-pipe obj"></div>
    <div class="machine1 obj"></div>
    <div class="mater obj"></div>
    <div class="needle obj"></div>
  </div>

  <div id="machine-left2">
    <div class="pipe-smoke pipe-smoke1"></div>
    <div class="pipe-smoke pipe-smoke2"></div>
    <div class="pipe-smoke pipe-smoke3"></div>
    <div class="pipe-smoke pipe-smoke4"></div>
    <div class="pipe-smoke pipe-smoke5"></div>
    <div class="pipe-smoke pipe-smoke6"></div>
    <div class="pipe-smoke pipe-smoke7"></div>
    <div class="pipe-smoke pipe-smoke8"></div>
    <div class="pipe-smoke pipe-smoke9"></div>
    <div class="pipe-smoke pipe-smoke1 alt"></div>
    <div class="pipe-smoke pipe-smoke2 alt"></div>
    <div class="pipe-smoke pipe-smoke3 alt"></div>
    <div class="pipe-smoke pipe-smoke4 alt"></div>
    <div class="pipe-smoke pipe-smoke5 alt"></div>
    <div class="pipe-smoke pipe-smoke6 alt"></div>
    <div class="pipe-smoke pipe-smoke7 alt"></div>
    <div class="pipe-smoke pipe-smoke8 alt"></div>
    <div class="pipe-smoke pipe-smoke9 alt"></div>

    <div class="chimney1 obj"></div>
    <div class="chimney2 obj"></div>
    <div class="machine2 obj"></div>
  </div>
</template>

<style lang="scss" scoped>
.obj, .pipe-smoke {
  background-size: contain;
  background-repeat: no-repeat;
  position: fixed;
}

.pipe1 {
  background-image: url("@/assets/img/pipe3.png");
  bottom: -60px;
  right: 60px;
  width: 300px;
  height: 200px;
  animation: pipeAnimation1 16s infinite;
}
.pipe2 {
  background-image: url("@/assets/img/pipe2.png");
  bottom: -95px;
  right: 170px;
  width: 300px;
  height: 180px;
  animation: pipeAnimation1 16s 0.1s infinite;
}
.pipe3 {
  background-image: url("@/assets/img/pipe5.png");
  top: -150px;
  right: -230px;
  width: 300px;
  height: 300px;
  animation-name: pipeAnimation1;
  animation: pipeAnimation1 16s 0.5s infinite;
}
.pipe4 {
  background-image: url("@/assets/img/pipe5.png");
  top: -50px;
  right: -260px;
  width: 300px;
  height: 300px;
  animation: pipeAnimation1 16s 0.52s infinite;
}
.pipe5 {
  background-image: url("@/assets/img/machine-pipe.png");
  top: -100px;
  left: -46px;
  width: 130px;
  height: 250px;
  animation: pipeAnimation1 16s 0.6s infinite;
}
.pipe6 {
  background-image: url("@/assets/img/pipe6.png");
  bottom: -170px;
  right: -370px;
  width: 800px;
  height: 250px;
  animation: pipeAnimation1 16s 0.6s infinite;
}
.pipe7 {
  background-image: url("@/assets/img/pipe7.png");
  bottom: -80px;
  left: -110px;
  width: 700px;
  height: 400px;
  animation: pipeAnimation1 16s 0.2s infinite;
}
.pipe8 {
  background-image: url("@/assets/img/pipe5.png");
  top: 200px;
  right: -85px;
  width: 170px;
  height: 300px;
  animation: pipeAnimation1 16s 0.48s infinite;
}

@include detailNarrow {
  .pipe1 {
    bottom: -90px;
  }
  .pipe2 {
    bottom: -125px;
  }
  .pipe3 {
    right: -250px;
  }
  .pipe4 {
    right: -280px;
  }
  .pipe5 {
    left: -66px;
  }
  .pipe6 {
    bottom: -200px;
  }
  .pipe7 {
    bottom: -110px;
    left: -130px;
  }
  .pipe8 {
    right: -95px;
  }
}

@include sp-sh{
  .pipe1, .pipe2, .pipe6, .pipe7, .pipe8 {
    display: none;
  }
}
@keyframes pipeAnimation1 {
  0% {}
  20% {filter: sepia(0.2) hue-rotate(0);}
  30% {filter: sepia(1) hue-rotate(-30deg);}
  40% {filter: sepia(0.2) hue-rotate(0);}
  70% {filter: sepia(0) hue-rotate(0);}
  65% {transform: translateX(1px);}
  65.5% {transform: translateX(-1px);}
  66% {transform: translateX(1px);}
  66.5% {transform: translateX(-1px);}
  67% {transform: translateX(2px);}
  67.5% {transform: translateX(-2px);}
  68% {transform: translateX(1px);}
  68.5% {transform: translateX(-1px);}
  69% {transform: translateX(1px);}
  69.5% {transform: translateX(-1px);}
  70% {filter: sepia(1) hue-rotate(-30deg)  drop-shadow(5px 5px 10px rgba(150, 0, 0, 0.4));}
  100% {filter: sepia(0.2) hue-rotate(0);}
}

#machine-left1 {
  .machine1 {
    background-image: url("@/assets/img/machine2.png");
    top: 400px;
    left: -95px;
    width: 180px;
    height: 180px;
    animation: machineLeftAnimation3 16s infinite;
  }
  .machine-pipe {
    background-image: url("@/assets/img/machine-pipe.png");
    top: 275px;
    left: 30px;
    width: 80px;
    height: 200px;
    animation: machineLeftAnimation3 16s infinite;
  }
  .machine-pipe2 {
    background-image: url("@/assets/img/machine-pipe.png");
    top: 500px;
    left: -40px;
    width: 120px;
    height: 220px;
    animation: machineLeftAnimation3 16s infinite;
  }
  .lever1 {
    background-image: url("@/assets/img/lever.png");
    top: 480px;
    left: 10px;
    width: 90px;
    height: 90px;
    animation: machineLeftAnimation3 16s infinite;
  }
  .lever2 {
    background-image: url("@/assets/img/lever2.png");
    top: 480px;
    left: 20px;
    width: 90px;
    height: 90px;
    transform: rotate(45deg);
    animation: machineLeftAnimation1 16s infinite linear;
  }
  .mater-pipe {
    background-image: url("@/assets/img/mater-pipe.png");
    top: 450px;
    left: 42px;
    width: 50px;
    height: 50px;
    animation: machineLeftAnimation3 16s infinite;
  }
  .mater {
    background-image: url("@/assets/img/mater.png");
    top: 420px;
    left: 53px;
    width: 40px;
    height: 40px;
  }
  .needle {
    background-image: url("@/assets/img/needle.png");
    top: 420px;
    left: 53px;
    width: 40px;
    height: 40px;
    animation: machineLeftAnimation2 16s infinite;
  }
}

@include detailNarrow {
  #machine-left1 {
    .machine1 {
      left: -115px;
    }
    .machine-pipe {
      left: 10px;
    }
    .machine-pipe2 {
      left: -60px;
    }
    .lever1 {
      left: -10px;
    }
    .lever2 {
      left: 0;
    }
    .mater-pipe {
      left: 22px;
    }
    .mater {
      left: 33px;
    }
    .needle {
      left: 33px;
    }
  }
}

@include sp-sh {
  #machine-left1 {
    .machine1 {
      top: 300px
    }
    .machine-pipe {
      top: 175px;
    }
    .machine-pipe2 {
      top: 400px;
    }
    .lever1 {
      top: 380px;
    }
    .lever2 {
      top: 380px;
    }
    .mater-pipe {
      top: 350px;
    }
    .mater {
      top: 320px;
    }
    .needle {
      top: 320px;
    }
  }
}
@keyframes machineLeftAnimation1 {
  0% {transform: rotate(45deg);}
  5% {transform: rotate(100deg);}
  45% {transform: rotate(100deg);}
  50% {transform: rotate(135deg);}
  70% {transform: rotate(135deg);}
  75% {transform: rotate(45deg);}
  100% {transform: rotate(45deg);}
}
@keyframes machineLeftAnimation2 {
  0% {transform: rotate(-115deg);}
  10% {transform: rotate(-115deg);}
  18% {transform: rotate(-45deg);}
  22% {transform: rotate(-45deg);}

  50% {transform: rotate(-65deg);}
  62% {transform: rotate(120deg);}
  70% {transform: rotate(115deg);}
  72% {transform: rotate(120deg);}
  74% {transform: rotate(118deg);}
  76% {transform: rotate(122deg);}
  78% {transform: rotate(120deg);}
  100% {transform: rotate(-115deg);}
}
@keyframes machineLeftAnimation3 {
  0% {}
  10% {filter: sepia(0.2) hue-rotate(0);}
  30% {filter: sepia(0.3) hue-rotate(-30deg);}
  40% {filter: sepia(0.2) hue-rotate(0);}
  60% {filter: sepia(0) hue-rotate(0);}

  65% {transform: translateX(1px);}
  65.5% {transform: translateX(-1px);}
  66% {transform: translateX(1px);}
  66.5% {transform: translateX(-1px);}
  67% {transform: translateX(2px);}
  67.5% {transform: translateX(-2px);}
  68% {transform: translateX(1px);}
  68.5% {transform: translateX(-1px);}
  69% {transform: translateX(1px);}
  69.5% {transform: translateX(-1px);}

  75% {transform: translateX(1px);}
  75.5% {transform: translateX(-1px);}
  76% {transform: translateX(3px);}
  76.5% {transform: translateX(-3px);}
  77% {transform: translateX(8px);}
  77.5% {transform: translateX(-8px);}
  78% {transform: translateX(2px);}
  78.5% {transform: translateX(-2px);}
  79% {transform: translateX(1px);}
  79.5% {transform: translateX(-1px);}

  85% {transform: translateX(1px);}
  85.5% {transform: translateX(-1px);}
  86% {transform: translateX(2px);}
  86.5% {transform: translateX(-2px);}
  87% {transform: translateX(6px);}
  87.5% {transform: translateX(-6px);}
  88% {transform: translateX(2px);}
  88.5% {transform: translateX(-2px);}
  89% {transform: translateX(1px);}
  89.5% {transform: translateX(-1px);}

  70% {filter: sepia(0.4) hue-rotate(-30deg) drop-shadow(5px 5px 10px rgba(150, 0, 0, 0.4));}
  100% {filter: sepia(0.2) hue-rotate(0);}
}

#machine-left1 {
  .pipe-smoke {
    top: 300px;
    left: 64px;
    width: 50px;
    height: 50px;
  }
  .pipe-smoke1 {
    background-image: url("@/assets/img/smoke1.png");
    animation: smokeRightAnimation1 16s infinite linear;
  }
  .pipe-smoke2 {
    background-image: url("@/assets/img/smoke2.png");
    animation: smokeRightAnimation2 16s infinite linear;
  }
  .pipe-smoke3 {
    background-image: url("@/assets/img/smoke3.png");
    animation: smokeRightAnimation3 16s infinite linear;
  }
  .pipe-smoke4 {
    background-image: url("@/assets/img/smoke4.png");
    animation: smokeRightAnimation4 16s infinite linear;
  }
  .pipe-smoke5 {
    background-image: url("@/assets/img/smoke5.png");
    animation: smokeRightAnimation5 16s infinite linear;
  }
  .pipe-smoke6 {
    background-image: url("@/assets/img/smoke6.png");
    animation: smokeLeftAnimation6 16s infinite linear;
  }
  .pipe-smoke7 {
    background-image: url("@/assets/img/smoke7.png");
    animation: smokeLeftAnimation7 16s infinite linear;
  }
  .pipe-smoke8 {
    background-image: url("@/assets/img/smoke8.png");
    animation: smokeLeftAnimation8 16s infinite linear;
  }
  .pipe-smoke9 {
    background-image: url("@/assets/img/smoke9.png");
    animation: smokeLeftAnimation9 16s infinite linear;
  }
  .alt {
    animation-delay: 0.5s;
  }
}

@include detailNarrow {
  #machine-left1 {
    .pipe-smoke {
      left: 44px;
    }
  }
}

@keyframes smokeLeftAnimation1 {
  0% {opacity: 0;}
  60% {transform: translateY(0) translateX(0); opacity: 0;}
  80% {transform: translateY(-50px) translateX(-5px); opacity: 0.2}
  100% {transform: translateY(-100px) translateX(-10px); opacity: 0}
}
@keyframes smokeLeftAnimation2 {
  0% {opacity: 0;}
  60% {transform: translateY(0) translateX(0); opacity: 0;}
  80% {transform: translateY(-44px) translateX(7px); opacity: 0.2}
  100% {transform: translateY(-88px) translateX(14px); opacity: 0}
}
@keyframes smokeLeftAnimation3 {
  0% {opacity: 0;}
  60% {transform: translateY(0) translateX(0); opacity: 0;}
  80% {transform: translateY(-55px) translateX(-15px); opacity: 0.25}
  100% {transform: translateY(-110px) translateX(-31px); opacity: 0}
}
@keyframes smokeLeftAnimation4 {
  0% {opacity: 0;}
  60% {transform: translateY(0) translateX(0); opacity: 0;}
  80% {transform: translateY(-38px) translateX(6px); opacity: 0.25}
  100% {transform: translateY(-76px) translateX(12px); opacity: 0}
}
@keyframes smokeLeftAnimation5 {
  0% {opacity: 0;}
  60% {transform: translateY(0) translateX(0); opacity: 0;}
  80% {transform: translateY(-25px) translateX(5px); opacity: 0.1}
  100% {transform: translateY(-40px) translateX(10px); opacity: 0}
}
@keyframes smokeLeftAnimation6 {
  0% {opacity: 0;}
  60% {transform: translateY(0) translateX(0); opacity: 0;}
  80% {transform: translateY(-20px) translateX(2px); opacity: 0.1}
  100% {transform: translateY(-42px) translateX(5px); opacity: 0}
}
@keyframes smokeLeftAnimation7 {
  0% {opacity: 0;}
  60% {transform: translateY(0) translateX(0); opacity: 0;}
  80% {transform: translateY(-40px) translateX(8px); opacity: 0.2}
  100% {transform: translateY(-80px) translateX(19px); opacity: 0}
}
@keyframes smokeLeftAnimation8 {
  0% {opacity: 0;}
  60% {transform: translateY(0) translateX(0); opacity: 0;}
  80% {transform: translateY(-62px) translateX(-5px); opacity: 0.1}
  100% {transform: translateY(-124px) translateX(-11px); opacity: 0}
}
@keyframes smokeLeftAnimation9 {
  0% {opacity: 0;}
  60% {transform: translateY(0) translateX(0); opacity: 0;}
  80% {transform: translateY(-30px) translateX(5px); opacity: 0.2}
  100% {transform: translateY(-61px) translateX(13px); opacity: 0}
}

#machine-left2 {
  .machine2 {
    background-image: url("@/assets/img/machine1.png");
    top: 130px;
    left: -100px;
    width: 200px;
    height: 200px;
    animation: machineRightAnimation2 16s 1s infinite;
  }
  .chimney1 {
    background-image: url("@/assets/img/chimney.png");
    top: 90px;
    left: 10px;
    width: 150px;
    height: 150px;
  }
  .chimney2 {
    background-image: url("@/assets/img/chimney2.png");
    top: 90px;
    left: 10px;
    width: 150px;
    height: 150px;
    animation: machineRightAnimation1 16s 1s infinite linear;
  }
}

@include detailNarrow {
  #machine-left2 {
    .machine2 {
      left: -120px;
    }
    .chimney1 {
      left: -10px;
    }
    .chimney2 {
      left: -10px;
    }
  }
}

@keyframes machineRightAnimation1 {
  0% {}
  80% {transform: rotate(0);}
  85% {transform: rotate(90deg);}
  95% {transform: rotate(90deg);}
  100% {transform: rotate(0);}
}
@keyframes machineRightAnimation2 {
  0% {}
  60% {transform: translateX(0);}
  65% {transform: translateX(1px);}
  65.5% {transform: translateX(-1px);}
  66% {transform: translateX(1px);}
  66.5% {transform: translateX(-1px);}
  67% {transform: translateX(2px);}
  67.5% {transform: translateX(-2px);}
  68% {transform: translateX(1px);}
  68.5% {transform: translateX(-1px);}
  69% {transform: translateX(1px);}
  69.5% {transform: translateX(-1px);}

  75% {transform: translateX(1px);}
  75.5% {transform: translateX(-1px);}
  76% {transform: translateX(2px);}
  76.5% {transform: translateX(-2px);}
  77% {transform: translateX(4px);}
  77.5% {transform: translateX(-4px);}
  78% {transform: translateX(2px);}
  78.5% {transform: translateX(-2px);}
  79% {transform: translateX(1px);}
  79.5% {transform: translateX(-1px);}
  80% {transform: translateX(0);}
}

#machine-left2 {
  .pipe-smoke {
    top: 140px;
    left: 42px;
    width: 50px;
    height: 50px;
  }
}

@include detailNarrow {
  #machine-left2 {
    .pipe-smoke {
      left: 22px;
    }
  }
}

#machine-left2 {
  .pipe-smoke1 {
    background-image: url("@/assets/img/smoke1.png");
    animation: smokeRightAnimation1 16s 1s infinite linear;
  }
  .pipe-smoke2 {
    background-image: url("@/assets/img/smoke2.png");
    animation: smokeRightAnimation2 16s 1s infinite linear;
  }
  .pipe-smoke3 {
    background-image: url("@/assets/img/smoke3.png");
    animation: smokeRightAnimation3 16s 1s infinite linear;
  }
  .pipe-smoke4 {
    background-image: url("@/assets/img/smoke4.png");
    animation: smokeRightAnimation4 16s 1s infinite linear;
  }
  .pipe-smoke5 {
    background-image: url("@/assets/img/smoke5.png");
    animation: smokeRightAnimation5 16s 1s infinite linear;
  }
  .pipe-smoke6 {
    background-image: url("@/assets/img/smoke6.png");
    animation: smokeRightAnimation6 16s 1s infinite linear;
  }
  .pipe-smoke7 {
    background-image: url("@/assets/img/smoke7.png");
    animation: smokeRightAnimation7 16s 1s infinite linear;
  }
  .pipe-smoke8 {
    background-image: url("@/assets/img/smoke8.png");
    animation: smokeRightAnimation8 16s 1s infinite linear;
  }
  .pipe-smoke9 {
    background-image: url("@/assets/img/smoke9.png");
    animation: smokeRightAnimation9 16s 1s infinite linear;
  }
  .alt {
    animation-delay: 0.5s;
  }
}

@keyframes smokeRightAnimation1 {
  0% {opacity: 0;}
  84% {transform: translateY(0) translateX(0); opacity: 0;}
  92% {transform: translateY(-50px) translateX(-5px); opacity: 0.1}
  100% {transform: translateY(-100px) translateX(-10px); opacity: 0}
}
@keyframes smokeRightAnimation2 {
  0% {opacity: 0;}
  84% {transform: translateY(0) translateX(0); opacity: 0;}
  92% {transform: translateY(-44px) translateX(7px); opacity: 0.1}
  100% {transform: translateY(-88px) translateX(14px); opacity: 0}
}
@keyframes smokeRightAnimation3 {
  0% {opacity: 0;}
  84% {transform: translateY(0) translateX(0); opacity: 0;}
  92% {transform: translateY(-55px) translateX(-15px); opacity: 0.1}
  100% {transform: translateY(-110px) translateX(-31px); opacity: 0}
}
@keyframes smokeRightAnimation4 {
  0% {opacity: 0;}
  84% {transform: translateY(0) translateX(0); opacity: 0;}
  92% {transform: translateY(-38px) translateX(6px); opacity: 0.1}
  100% {transform: translateY(-76px) translateX(12px); opacity: 0}
}
@keyframes smokeRightAnimation5 {
  0% {opacity: 0;}
  84% {transform: translateY(0) translateX(0); opacity: 0;}
  92% {transform: translateY(-25px) translateX(5px); opacity: 0.2}
  100% {transform: translateY(-40px) translateX(10px); opacity: 0}
}
@keyframes smokeRightAnimation6 {
  0% {opacity: 0;}
  84% {transform: translateY(0) translateX(0); opacity: 0;}
  92% {transform: translateY(-20px) translateX(2px); opacity: 0.1}
  100% {transform: translateY(-42px) translateX(5px); opacity: 0}
}
@keyframes smokeRightAnimation7 {
  0% {opacity: 0;}
  84% {transform: translateY(0) translateX(0); opacity: 0;}
  92% {transform: translateY(-40px) translateX(8px); opacity: 0.2}
  100% {transform: translateY(-80px) translateX(19px); opacity: 0}
}
@keyframes smokeRightAnimation8 {
  0% {opacity: 0;}
  84% {transform: translateY(0) translateX(0); opacity: 0;}
  92% {transform: translateY(-62px) translateX(-5px); opacity: 0.1}
  100% {transform: translateY(-124px) translateX(-11px); opacity: 0}
}
@keyframes smokeRightAnimation9 {
  0% {opacity: 0;}
  84% {transform: translateY(0) translateX(0); opacity: 0;}
  92% {transform: translateY(-30px) translateX(5px); opacity: 0.2}
  100% {transform: translateY(-61px) translateX(13px); opacity: 0}
}

@include sp-s {
  .obj, .pipe-smoke {
    display: none;
  }
}
</style>
