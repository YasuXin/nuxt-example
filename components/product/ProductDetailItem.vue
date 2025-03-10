<script setup lang="ts">
import {productArray} from "~/assets/ts/data"

productArray.reverse()
</script>

<template>

  <section class="product-detail-item detail-item">
    <a :href="productArray[3].link"><DetailSubtitleBox :title="productArray[3].title"></DetailSubtitleBox></a>
    <DetailTextBox>
      <div class="product-detail-text detail-text">
        <p>{{ productArray[3].textDetail }}<br>
          リンク先：<a :href="productArray[3].link" class="normal-link">{{ productArray[3].link }}</a>
        </p>
        <img src="~/assets/img/product/product0.png" :alt="`サムネイル（${productArray[3].title}）`" width="250">
      </div>
    </DetailTextBox>
  </section>

  <section class="product-detail-item detail-item">
    <a :href="productArray[2].link"><DetailSubtitleBox :title="productArray[2].title"></DetailSubtitleBox></a>
    <DetailTextBox>
      <div class="product-detail-text detail-text">
        <p>{{ productArray[2].textDetail }}<br>
          リンク先：<a :href="productArray[2].link" class="normal-link">{{ productArray[2].link }}</a>
        </p>
        <img src="~/assets/img/product/product0.png" :alt="`サムネイル（${productArray[2].title}）`" width="250">
      </div>
    </DetailTextBox>
  </section>

  <section class="product-detail-item detail-item">
    <a :href="productArray[1].link"><DetailSubtitleBox :title="productArray[1].title"></DetailSubtitleBox></a>
    <DetailTextBox>
      <div class="product-detail-text detail-text">
        <p>{{ productArray[1].textDetail }}<br>
          リンク先：<a :href="productArray[1].link" class="normal-link">{{ productArray[1].link }}</a>
        </p>
        <img src="~/assets/img/product/product0.png" :alt="`サムネイル（${productArray[1].title}）`" width="250">
      </div>
    </DetailTextBox>
  </section>

  <section class="product-detail-item detail-item">
    <a :href="productArray[0].link"><DetailSubtitleBox :title="productArray[0].title"></DetailSubtitleBox></a>
    <DetailTextBox>
      <div class="product-detail-text detail-text">
        <p>{{ productArray[0].textDetail }}<br>
          リンク先：<a :href="productArray[0].link" class="normal-link">{{ productArray[0].link }}</a>
        </p>
        <img src="~/assets/img/product/product1.png" :alt="`サムネイル（${productArray[0].title}）`" width="250">
      </div>
    </DetailTextBox>
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
