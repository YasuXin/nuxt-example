<script setup lang="ts">
import {links, strengthArray} from "@/assets/ts/data"
import {defineFadeinPosition} from "@/assets/ts/functions";
const linkTo = links[2]
const toggle = ref(false)



let scrollPoint = 0

onBeforeMount(() => {
  scrollPoint = defineFadeinPosition(3, window.innerWidth, window.innerHeight)
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
  <section id="strength-container" class="container">

    <TitleTextBox :toggle="toggle" :title="linkTo" :scroll="scrollPoint"></TitleTextBox>
    <div id="strength-box-parent">
      <div id="strength-box" class="box">

        <StrengthItem
            v-for="item in strengthArray"
            :key="item.id"
            :id="item.id"
            :title="item.title"
            :text="item.text"
            :toggle="toggle"
        ></StrengthItem>

      </div>

      <div id="strength-link">
        <NuxtLink :to="{name: 'strengthDetail'}" id="strength-link-text" class="normal-link">
          詳細はこちら
        </NuxtLink>
      </div>

    </div>
  </section>
</template>

<style lang="scss" scoped>
#strength-container {
  flex-wrap: wrap;
}
#strength-box-parent {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: calc($box-height + 20px);
}
#strength-box {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: $bg-clear-white;
}
#strength-link {
  width: 100%;
  display: flex;
  justify-content: end;
}
#strength-link-text {
  display: inline-block;
  margin-right: 100px;
}

@include sp-s {
  #strength-box-parent {
    height: calc($box-height-sp + 20px);
    justify-content: space-evenly;
  }
  #strength-link-text {
    margin-right: 50px;
  }
}
@include sp-l {
  #strength-box-parent {
    height: calc($box-height-sp-large + 20px);
  }
}
</style>
