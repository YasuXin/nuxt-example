<script setup lang="ts">

</script>

<template>
  <section class="hobby-item detail-item">
    <DetailSubtitleBox title="私の趣味特技"></DetailSubtitleBox>
    <DetailTextBox>
      <div class="hobby-text">
        <img src="~/assets/img/bass-guitar.jpg" alt="" width="180" class="bass-img-big">
        <p>主な趣味は音楽、ジャンルはJazz、クラシック、ロック、メタルなど。鑑賞からギターとベースの演奏、作曲までやります。
        また、スピーカー、アンプの自作もやります。</p>
        <p>　</p>
        <p>好きな演奏家</p>
        <p>Jaco Pastrius、Ron Carter、Avishai Cohen、Emmet Cohen、Victor Wooten、Pino Palladino、
          Marcus Miller、Anthony Jackson、flea、Jimi Hendrix、Jeff Beck、Erick Crapton、John Fruchanteなど
        </p>
        <p>　</p>
        <img src="~/assets/img/bass-guitar.jpg" alt="" width="150" class="bass-img-small">
      </div>
    </DetailTextBox>
  </section>
</template>

<style lang="scss" scoped>
.hobby-item {

}
.bass-img-big {
  float: right;
  display: block;
  margin-left: 20px;
  @include sp-s {
    display: none;
  }
}
.bass-img-small {
  float: right;
  display: none;
  @include sp-s {
    display: block;
  }
}
</style>
