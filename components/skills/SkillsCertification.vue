<script setup lang="ts">
import {certificationArray} from "assets/ts/data";

const props =defineProps({
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  toggle: {
    type: Boolean,
    required: true,
  }
})

</script>

<template>

  <transition name="fadeSkills2">
    <SkillsItem v-show="props.toggle">
      <template v-slot:title>
        {{props.title}}
      </template>
      <template v-slot:text>
        <template v-for="item in certificationArray">・{{item.text}}<br></template>
      </template>
    </SkillsItem>
  </transition>

</template>

<style scoped lang="scss">

</style>
