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
  <ul id="header-button-container">
    <HeaderButton v-for="data in array" :key="data.id" :text="data.text" :link="data.link"></HeaderButton>
  </ul>
</template>

<style lang="scss" scoped>
#header-button-container {
  flex-basis: 70%;
  display: flex;
  justify-content: end;
  height: 60px;
  list-style-type: none;
  padding: 0;
}

/* For Tablet Vertical And SmartPhone */
@include header-narrow {
  #header-button-container {
    display: none;
  }
}
</style>
