<script setup lang="ts">
import {skillsArray, certificationArray} from "~/assets/ts/data"

const array = skillsArray
</script>

<template>

  <section class="skills-detail-item detail-item">

    <DetailSubtitleBox :title="skillsArray[0].title"></DetailSubtitleBox>
    <DetailTextBox>
      <div class="skills-detail-text cert-text">
        <p>{{ skillsArray[0].textDetail }}</p>
      </div>
    </DetailTextBox>

  </section>

  <section class="skills-detail-item detail-item">

    <DetailSubtitleBox :title="skillsArray[1].title"></DetailSubtitleBox>
    <DetailTextBox>
      <div class="skills-detail-text">
        <p>今日までに取得した資格一覧</p>
        <p v-for="item in certificationArray" :key="item.id">・{{item.text}}</p>
      </div>
    </DetailTextBox>

  </section>

</template>

<style lang="scss" scoped>
.skills-detail-item {

}
.skills-detail-text {

}
.cert-text {
  text-indent: 0;
}
</style>
