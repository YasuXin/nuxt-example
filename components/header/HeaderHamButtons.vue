<script setup lang="ts">
import {linkArray} from "~/assets/ts/data"
import type {LinkArray} from "~/assets/ts/interfaces"
import {defineLinkPosition} from "assets/ts/functions";

let array: LinkArray[] = linkArray
onBeforeMount(() => {
  array = defineLinkPosition(linkArray, window.innerWidth, window.innerHeight);
})
</script>

<template>
  <ul id="header-ham-button-container">
    <HeaderButton v-for="data in array" :key="data.id" :text="data.text" :link="data.link"></HeaderButton>
  </ul>
</template>

<style lang="scss" scoped>
/* For PC And Tablet Horizontal */
@include header-wide {
  #header-ham-button-container {
    display: none;
  }
}

/* For Tablet Vertical And SmartPhone */
@include header-narrow {
  #header-ham-button-container {
    background-image: linear-gradient(45deg, rgba(0,0,0,0.6), rgba(0,0,0,0.8));
    width: 100%;
    padding: 0;
  }
}

/* For Smart Phone */
@include sp-s {
  #header-ham-button-container {
    background-image: linear-gradient(45deg, rgba(0,0,0,0.9), rgba(0,0,0,1));
    height: 100%;
  }
}
</style>
