<script setup lang="ts">
import {strengthArray} from "~/assets/ts/data"

const array = strengthArray

</script>

<template>

  <section v-for="item in array" :key="item.id" :id="item.title" class="strength-detail-item detail-item">

      <DetailSubtitleBox :title="item.title"></DetailSubtitleBox>
      <DetailTextBox>
        <div class="strength-detail-text">
          <p>{{ item.textDetail }}</p>
        </div>
      </DetailTextBox>

  </section>

</template>

<style lang="scss" scoped>
.strength-detail-item {

}
</style>
