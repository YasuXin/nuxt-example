<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  link: {
    type: Number,
    required: true,
  },
})

const scroll = ref(props.link)

function scrollLink(): void {
  window.scrollTo(0, Number(scroll.value));
}
</script>

<template>
  <li class="footer-button">
    <button class="footer-button-text scroll-button" @click="scrollLink">
      {{ props.text }}
    </button>
  </li>
</template>

<style lang="scss" scoped>
.footer-button {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 100px;
  height: 100%;
}
.footer-button-text {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: $font-size-normal;
  color: $text-lighter;

  &:hover {
    animation-name: hoverAnimation;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }
}

@include sp-s {
  .footer-button {
    flex-basis: 90px;
    width: 100%;
    background-image: $sp-footer-bg;
  }
  .footer-button-text {
    font-size: $sp-font-size-big;
  }
}

@keyframes hoverAnimation {
  0% {background-color: rgba(0,0,0,0);}
  100% {background-color: rgba(255,255,255,0.2);}
}

</style>
