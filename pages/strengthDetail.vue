<script setup lang="ts">
const SITE_TITLE = "私の強み"

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
    <div id="strength-detail-container" class="detail-container-h">
      <transition name="box-fade">
        <div id="strength-detail-box" v-if="toggleBox" class="detail-box">
          <StrengthDetailItem></StrengthDetailItem>
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
