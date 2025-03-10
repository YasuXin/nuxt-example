<script setup lang="ts">
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

  <transition name="fadeSkills1">
    <SkillsItem v-show="props.toggle">
      <template v-slot:title>
        {{props.title}}
      </template>
      <template v-slot:text>
        {{props.text}}
      </template>
    </SkillsItem>
  </transition>

</template>

<style scoped lang="scss">

</style>
