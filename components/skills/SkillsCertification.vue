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
        <template v-for="(item, index) in certificationArray" :key="item.id" :class="[index > 7 ? 'hide' : '']">・{{item.text}}<br></template>
        <p style="text-align: right;">ほか</p>
      </template>
    </SkillsItem>
  </transition>

</template>

<style scoped lang="scss">
.hide {
  display: none;
}
</style>
