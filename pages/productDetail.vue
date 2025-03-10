<script setup lang="ts">
const SITE_TITLE = "私の制作物"

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
    <div id="product-detail-container" class="detail-container-h">
      <transition name="box-fade">
        <div id="product-detail-box" v-if="toggleBox" class="detail-box">
          <ProductDetailItem></ProductDetailItem>
        </div>
      </transition>
    </div>
  </main>

</template>

<style lang="scss" scoped>
main {
  height: auto;
}
#product-detail-container {
  height: 1630px; /*productArray配列の要素数 * 300px + 130px の値*/
  @include sp-s {
    height: 2630px; /*productArray配列の要素数 * 500px + 130px の値*/
  }
}

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
