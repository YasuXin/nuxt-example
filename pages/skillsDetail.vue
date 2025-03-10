<script setup lang="ts">
const SITE_TITLE = "私のスキル"

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
    <div id="skills-detail-container" class="detail-container-h">
      <transition name="box-fade">
        <div id="skills-detail-box" v-if="toggleBox" class="detail-box">
          <SkillsDetailItem></SkillsDetailItem>
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
