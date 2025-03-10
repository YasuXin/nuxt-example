<script setup lang="ts">
import {links, skillsArray} from "@/assets/ts/data"
import {defineFadeinPosition} from "@/assets/ts/functions";
const linkTo = links[3]
const toggle = ref(false)


let scrollPoint = 0

onBeforeMount(() => {
  scrollPoint = defineFadeinPosition(4, window.innerWidth, window.innerHeight)
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

</script>

<template>
  <section id="skills-container" class="container">
    <TitleTextBox :toggle="toggle" :title="linkTo" :scroll="scrollPoint"></TitleTextBox>

    <div id="skills-box-parent">
      <div id="skills-box" class="box">
        <SkillsWhatIDo :id="skillsArray[0].id" :title="skillsArray[0].title" :text="skillsArray[0].text" :toggle="toggle"></SkillsWhatIDo>
        <SkillsCertification :id="skillsArray[1].id" :title="skillsArray[1].title" :text="skillsArray[1].text" :toggle="toggle"></SkillsCertification>
      </div>

      <div id="skills-link">
        <NuxtLink :to="{name: 'skillsDetail'}" id="skills-link-text" class="normal-link">詳細はこちら</NuxtLink>
      </div>
    </div>

  </section>
</template>

<style lang="scss" scoped>
#skills-container {

}
#skills-box-parent {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#skills-box {
  display: flex;
  justify-content: space-evenly;
  background-color: $bg-clear-white;
}
#skills-link {
  display: flex;
  justify-content: end;
  width: 100%;
}
#skills-link-text {
  display: inline-block;
  margin-right: 100px;
}
.skills-item {
  flex-basis: 30%;
}

@include sp-s {
  #skills-box {
    flex-direction: column;
  }
  #skills-link-text {
    margin-right: 50px;
  }
}

.fade1-enter-active {
  transition: opacity 1s, transform 1s;
}
.fade1-enter-from, .fade3-enter-from {
  opacity: 0;
  transform: translateX(100%);
}
.fade1-enter-to, .fade3-enter-to {
  opacity: 1;
}

.fade2-enter-active {
  transition: opacity 1s 0.3s, transform 1s 0.3s;
}
.fade2-enter-from {
  opacity: 0;
  transform: translateX(-100%)
}
.fade2-enter-to {
  opacity: 1;
}

.fade3-enter-active {
  transition: opacity 1s 0.6s, transform 1s 0.6s;
}
</style>
