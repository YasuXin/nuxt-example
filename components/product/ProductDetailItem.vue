<script setup lang="ts">
import {reversedProductArray} from "~/assets/ts/data"

</script>

<template>

  <section class="product-detail-item detail-item" v-for="item in reversedProductArray" :key="item.id">

    <!--繰り返し処理 ここから-->
    <a :href="item.link"><DetailSubtitleBox :title="item.title"></DetailSubtitleBox></a>
    <DetailTextBox>
      <div class="product-detail-text detail-text">
        <p>{{ item.textDetail }}<br>
          リンク先：<a :href="item.link" class="normal-link">{{ item.link }}</a>
        </p>
        <img :src="`../img/product${item.src}.png`" :alt="`サムネイル（${item.title}）`" width="250">
      </div>
    </DetailTextBox>
    <!--繰り返し処理 ここまで-->

  </section>

</template>

<style lang="scss" scoped>
.product-detail-item {
  height: 300px;
  @include sp-s {
    height: 500px;
  }
}
a:any-link {
  color: $text-white;
}
.product-detail-text {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include sp-s {
    flex-direction: column;
    height: 360px;
  }
}
</style>
