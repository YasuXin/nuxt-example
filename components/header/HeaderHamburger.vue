<script setup lang="ts">
const emit = defineEmits(['child-event'])
const onClick = () => {
  emit('child-event')
}
const props = defineProps({
  toggle: {
    type: Boolean,
    required: true,
  }
})

</script>

<template>
  <section id="hamburger-container">
    <button id="hamburger-button" @click="onClick">
      <transition name="ham-anime" mode="out-in">
        <img src="~/assets/img/batu.png" alt="" width="36" id="hamburger-batu" v-if="toggle" />
        <img src="~/assets/img/bars.png" alt="" width="36" id="hamburger-icon" v-else />
      </transition>
    </button>
  </section>
</template>

<style lang="scss" scoped>
#hamburger-container {
  display: none;
}

/* For Tablet Vertical And SmartPhone */
@include header-narrow {
  #hamburger-container {
    display: block;
    position: relative;
    flex-basis: 70px;
    height: 60px;
  }
  #hamburger-button {
    position: absolute;
    background-image: linear-gradient(145deg, rgba(255, 255, 255, 1), rgba(200, 200, 200, 1));
    top: 9px;
    right: 32px;
    padding: 0;
    height: 42px;
    border: 3px solid #666;
    border-radius: 10px;
  }

  .ham-anime-enter-active, .ham-anime-leave-active {
    transition: opacity .5s, rotate .5s;
  }
  .ham-anime-enter-from, .ham-anime-leave-to {
    opacity: 0;
    rotate: 90deg;
  }
  .ham-anime-enter-to, .ham-anime-leave-from {
    opacity: 1;

  }
}

/* For Smart Phone */
@include sp-s {
  #hamburger-button {
    right: 12px;
  }
}
</style>
