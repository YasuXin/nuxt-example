<script setup lang="ts">

</script>

<template>
  <footer>
    <section id="footer-container">
      <FooterButtons></FooterButtons>
    </section>
  </footer>
</template>

<style lang="scss" scoped>
#footer-container {
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 200px;
  background-color: black;
}

@include sp-s {
  #footer-container {
    height: calc(60vh);

  }
}
</style>
