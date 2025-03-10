<script setup lang="ts">

const toggle = ref(false)

onMounted(() => {
  setTimeout(():void => {
    toggle.value = true
  }, 500)
})

</script>

<template>
  <section id="home-container" class="container">
    <client-only>
      <transition name="fade1">
        <div class="home-child" v-show="toggle">
          <p class="home-text ja">ようこそ</p>
        </div>
      </transition>
      <transition name="fade2">
        <div class="home-child" v-show="toggle">
          <p class="home-text en">Welcome to my Homepage</p>
        </div>
      </transition>
    </client-only>
  </section>
</template>

<style lang="scss" scoped>
#home-container {
  justify-content: center;
  align-items: center;
}
.home-child p {
  font-family: "游明朝", serif;
  font-style: oblique;
}
.ja {
  font-size: 48px;
}
.en {
  font-size: 36px;
}

.fade1-enter-active {
  transition: opacity 3s, transform 3s;
}
.fade1-enter-from {
  opacity: 0;
  transform: translateY(50px);
}
.fade1-enter-to {
  opacity: 1;
}
.fade2-enter-active {
  transition: opacity 3s 1s, transform 3s 1s;
}
.fade2-enter-from {
  opacity: 0;
  transform: translateY(50px);
}
.fade2-enter-to {
  opacity: 1;
}

/* For Smart Phone */
@include sp-s {
  .ja {
    margin-bottom: 50px;
  }
  .en {
    font-size: 24px;
    margin-bottom: 200px;
  }
}
</style>
