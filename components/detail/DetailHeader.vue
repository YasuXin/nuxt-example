<script setup lang="ts">
const props = defineProps({
  noSmoke: {
    type: Boolean,
    required: true,
  }
})
const noSmoke = ref(props.noSmoke)
const emit = defineEmits(['child-event'])

const onClickButton = () => {
  noSmoke.value = !noSmoke.value
  emit('child-event')
}

</script>

<template>
  <header id="detail-header">
    <section id="detail-header-container">
      <div class="header-button-box">
        <NuxtLink :to="{name: 'portfolio'}" class="header-button">
          戻る
        </NuxtLink>
        <button class="header-button smoke-button" :class="{'smoke-off': noSmoke}" @click="onClickButton">
          {{ noSmoke ? 'Smoke OFF' : 'Smoke ON' }}
        </button>
      </div>
      <div class="header-logo">
        <NuxtLink :to="{name: 'portfolio'}">
          <img src="../../assets/img/logo-text2.png" alt="My Portfolio" height="50">
        </NuxtLink>
      </div>
    </section>
  </header>


</template>

<style lang="scss" scoped>
#detail-header {
  width: 100%;
  height: 80px;
}
#detail-header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 5%;
  margin: 0;
}
.header-button-box {
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
  width: 320px;
}
.header-item img {

}
.header-button {
  display: inline-block;
  width: 120px;
  height: 50px;
  border: 3px solid rgb(60,60,180);
  border-radius: 15px;
  background-image: linear-gradient(45deg, rgba(0,0,30,1), rgba(0,0,90,1));
  color: $text-white;
  font-size: $font-size-big;
  text-align: center;
  line-height: 1.8;
  &:any-link {
    color: $text-white;
  }
}
.smoke-button {
  width: 160px;
  &:hover {
    cursor: pointer;
  }
}
.smoke-off {
  border: 3px solid rgb(210,60,60);
  background-image: linear-gradient(45deg, rgba(120,0,0,1), rgba(200,0,0,1));
}

@include detailNarrow {
  #detail-header-container {
    justify-content: center;
  }
  .header-button-box {
    width: 90%;
  }
  .header-button {
    width: 100px;
  }
  .smoke-button {
    width: 160px;
  }
  .header-logo {
    display: none;
  }
}

@include sp-s {
  .smoke-button {
    display: none;
  }
}
</style>
