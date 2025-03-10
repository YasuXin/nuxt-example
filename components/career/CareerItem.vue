<script setup lang="ts">
import {careerArray} from "assets/ts/data";

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  }
})

const itemLength = careerArray.length
</script>

<template>
  <div class="career-item">
    <div class="career-title">
      <h1>{{props.title}}</h1>
    </div>
    <div class="career-text">
      <p>{{props.text}}</p>
    </div>
  </div>
  <CareerArrow v-show="props.id!=itemLength"></CareerArrow>
</template>

<style lang="scss" scoped>
.career-item {
  display: flex;
  flex-direction: column;
  flex-basis: 400px;
  height: 100%;
  padding: 50px 20px;
}
.career-title {
  border-bottom: 3px solid gray;
}
.career-text {
  margin-top: 20px;
}

/* For Smart Phone */
@include sp-s {
  .career-item {
    flex-basis: 350px;
  }
  .career-title h1 {
    font-size: $sp-subtitle-font-size;
  }
  .career-text p {
    font-size: $sp-font-size;
  }
}
</style>
