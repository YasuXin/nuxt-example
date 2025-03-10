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
  <li class="header-button">
    <button class="header-button-text scroll-button" @click="scrollLink">
      {{ props.text }}
    </button>

  </li>

</template>

<style lang="scss" scoped>
.header-button {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 100px;

  &:hover {
    animation-name: hoverAnimation;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }
}
.header-button-text {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 20px;
}

/* For PC And Tablet Horizontal */
@include header-wide{
  @keyframes hoverAnimation {
    0% {background-color: rgba(0,0,0,0);}
    100% {background-color: rgba(0,0,0,0.2);}
  }
}

/* For Tablet Vertical And SmartPhone */
@include header-narrow {
  .header-button {
    height: 60px;
  }

  .header-button-text {
    color: $text-lighter;

    &:hover {
      animation-name: hoverAnimation;
      animation-duration: 1s;
      animation-fill-mode: forwards;
    }
  }

  @keyframes hoverAnimation {
    0% {background-color: rgba(0,0,0,0);}
    100% {background-color: rgba(0,0,0,0.8);}
  }
}

/* For Smart Phone(S) */
@include sp-s {
  .header-button {
    height: calc(100% / 6);
  }
  .header-button-text {
    font-size: $sp-subtitle-font-size;
  }
}
</style>
