<script setup lang="ts">

</script>

<template>
  <section class="introduction-item detail-item">
    <DetailSubtitleBox title="私の自己紹介"></DetailSubtitleBox>
    <DetailTextBox>
      <div class="introduction-text detail-text">
        <table class="table">
          <tbody>
            <tr>
              <th>氏　　名</th>
              <td>：</td>
              <td>yasu</td>
            </tr>
            <tr>
              <th>生年月日</th>
              <td>：</td>
              <td>1989年7月某日</td>
            </tr>
            <tr>
              <th>最終学歴</th>
              <td>：</td>
              <td>とある大学</td>
            </tr>
            <tr>
              <th>職　　業</th>
              <td>：</td>
              <td>非公開</td>
            </tr>
          </tbody>
        </table>
        <p>現在個人情報は非公開にしています。</p>
        <p>使用可能なプログラミング言語はHTML・CSS・Javascript・Typescript・PHP・Java・Kotlin・Python、
          フレームワークツールはLaravel・Vue.js・Nuxt.js・Django、スタイルシート言語はSass、など。</p>
        <p>当サイトの製作期間は約2か月で、
          Nuxt.js、Typescript、SCSSを使用してコーディングされています。</p>
      </div>
    </DetailTextBox>
  </section>
</template>

<style lang="scss" scoped>
.introduction-item {

}
.table {
  margin-left: 1em;
  margin-bottom: 1em;
  & th {

  }
}

</style>
