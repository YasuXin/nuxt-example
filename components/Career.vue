<script setup lang="ts">
import {careerArray, links} from "@/assets/ts/data"
import {defineFadeinPosition} from "@/assets/ts/functions";
const linkTo = links[1]
const toggle = ref(false)


let scrollPoint = 0

onBeforeMount(() => {
  scrollPoint = defineFadeinPosition(2, window.innerWidth, window.innerHeight)
})

onMounted(() => {
  document.addEventListener('scroll', () => {
    if(window.scrollY >= scrollPoint) {
      toggle.value = true
    }
  })
  if(window.scrollY >= scrollPoint) {
    toggle.value = true
  }
})


const scrollDeltaY = ref(0)

onMounted(() => {
  const scrollElement = document.querySelector("#career-box") as HTMLElement;
  scrollElement.addEventListener("wheel", (e) => {
    if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
    e.preventDefault();
    scrollElement.scrollLeft += e.deltaY;
    scrollDeltaY.value = e.deltaY;
  });
})

</script>

<template>
  <section id="career-container" class="container">
    <TitleTextBox :toggle="toggle" :title="linkTo" :scroll="scrollPoint"></TitleTextBox>

    <div id="career-box-parent">
      <transition name="fade1">
        <div id="career-box" class="box" v-show="toggle">
          <div id="career-items">

            <CareerItem v-for="item in careerArray" :key="item.id" :id="item.id" :title="item.title" :text="item.text" ></CareerItem>

          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#career-container {
  justify-content: center;
}
#career-box-parent {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}
#career-box {
  overflow-x: scroll;
  overflow-y: hidden;
}
#career-items {
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 2000px;
  height: 100%;
  background-color: $bg-clear-white;
}

/* For Smart Phone */
@include sp-s {
  #career-box {
    width: 95%;
    height: 90%;
  }
  #career-items {

  }
}

.fade1-enter-active {
  transition: opacity 2s, transform 2s, background-color 2s;
  @include sp-s {
    transition: opacity 1s, transform 1s, background-color 1s;
  }
}
.fade2-enter-active {
  transition: opacity 1s .5s, transform 1s .5s;
  @include sp-s {
    transition: opacity .5s .5s, transform .5s .5s;
  }
}
.fade1-enter-from, .fade2-enter-from {
  opacity: 0;
  background-color: rgba(0,0,0,1);
  transform: rotateX(90deg) perspective(100px);
}
.fade1-enter-to, .fade2-enter-to {
  opacity: 1;
}
</style>
