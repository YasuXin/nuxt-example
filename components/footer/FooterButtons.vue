<script setup lang="ts">
import {linkArray} from "~/assets/ts/data"

</script>

<template>
  <ul id="footer-button-container">
    <FooterButton v-for="data in linkArray" :key="data.id" :text="data.text" :link="data.link"></FooterButton>
  </ul>
</template>

<style lang="scss" scoped>
#footer-button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 50px;
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
}

@include sp-s {
  #footer-button-container {
    height: 90%;
    flex-direction: column;
    margin: 0;
    width: 100%;
  }

}
</style>
