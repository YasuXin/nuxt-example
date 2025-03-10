<script setup lang="ts">
const SITE_TITLE = "趣味特技"

useHead({
  title: SITE_TITLE
})

definePageMeta({
  layout: "detail"
})

const toggleBox = ref(false)

onMounted(() => {
  setTimeout(() => {
    toggleBox.value = true
  }, 1000)
})

</script>

<template>
  <main>
    <div id="hobby-container" class="detail-container-l">
      <transition name="box-fade" class="detail-box">
        <div id="hobby-box" v-if="toggleBox">
          <HobbyItem></HobbyItem>
        </div>
      </transition>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.box-fade-enter-active {
  transition: opacity 1s;
}
.box-fade-enter-from {
  opacity: 0;
}
.box-fade-enter-to {
  opacity: 1;
}
</style>
