<script setup lang="ts">

const SITE_TITLE = "MyPortfolio"
useHead({
  title: SITE_TITLE,
})
/*onMounted(() => {
  document.addEventListener("scroll", () => {
    console.log(window.scrollY)
  })
})*/
</script>

<template>
  <main>
    <Home></Home>
    <div id="profile" class="space"></div>
    <Profile></Profile>
    <div id="career" class="space"></div>
    <Career></Career>
    <div id="strength" class="space"></div>
    <Strength></Strength>
    <div id="skills" class="space"></div>
    <Skills></Skills>
    <div id="product" class="space"></div>
    <Product></Product>
    <div id="contact" class="space"></div>
    <Contact></Contact>

  </main>
</template>

<style lang="scss" scoped>
main {

}

.space {
  width: 100%;
  height: 60px;
}

@include sp-s {
  .space {
    height: 80px;
  }
}
</style>
