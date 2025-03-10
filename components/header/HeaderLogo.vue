<script setup lang="ts">
function scrollTop(): void {
  window.scrollTo(0, 0);
}
</script>

<template>
  <section id="header-logo-container">
    <div id="header-logo">
      <button @click="scrollTop" class="scroll-button">
        <img src="~/assets/img/logo-text.png" alt="My Portfolio" width="300">
      </button>
    </div>
  </section>
</template>

<style scoped>
#header-logo-container {
  display: flex;
  width: 300px;
  height: 60px;
}
#header-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

</style>
