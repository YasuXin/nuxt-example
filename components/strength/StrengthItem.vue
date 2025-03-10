<script setup lang="ts">
const props = defineProps ({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  toggle: {
    type: Boolean,
    required: true,
  }
})

const animationNumber = "fadeStrength" + props.id
let isEven = props.id % 2 === 0

onMounted(() => {
  /* スマートフォンサイズの場合、すべて奇数番目の処理にする */
  if(window.innerWidth <= 500) {
    if(window.innerHeight  >= window.innerWidth * 1.2) {
      isEven = false
    }
  }
})
</script>

<template>
  <transition :name="animationNumber">
    <div class="strength-item" v-show="toggle">
      <div class="strength-subtitle" v-if="!isEven">
        <NuxtLink :to="{name: 'strengthDetail'}" class="strength-subtitle-link">
          {{ props.title }}
        </NuxtLink>
      </div>

      <div class="strength-text">
        <p>{{ props.text }}</p>
      </div>

      <div class="strength-subtitle" v-if="isEven">
        <NuxtLink :to="{name: 'strengthDetail'}" class="strength-subtitle-link">
          {{ props.title }}
        </NuxtLink>
      </div>
    </div>

  </transition>
</template>

<style lang="scss" scoped>
.strength-item {
  display: flex;
  width: 100%;
  height: calc(($box-height - 30px) / 3 - 30px);
  margin: 15px 0;
}
.strength-subtitle {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 35%;
}
.strength-subtitle a {
  text-align: center;
}
.strength-text {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 65%;
  border-left: $border-light;
}
.strength-text:nth-child(2n-1) {
  border-left: none;
  border-right: $border-light;
}
.strength-text p {
  display: inline-block;
  width: 80%;
  height: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
}
.strength-subtitle-link {
  font-size: $title-font-size;
  font-family: "游明朝", serif;
  font-style: italic;
  text-decoration: underline solid $text-darker;

  &:hover {
    animation-name: strengthLinkAnimation;
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
  }
}

@include sp-s {
  .strength-item {
    flex-direction: column;
    height: calc($box-height-sp / 3 - 30px);
    margin: 0;
  }
  .strength-subtitle {
    justify-content: start;
    flex-basis: auto;
  }
  .strength-text {
    flex-basis: auto;
    border-left: none;
    border-top: $border-light;
  }
  .strength-text p {
    font-size: $sp-font-size;
    width: 95%;
  }
  .strength-subtitle-link {
    padding-left: 10px;
    text-decoration: none;
    font-size: $sp-subtitle-font-size;
  }
}
@include sp-l {
  .strength-item {
    flex-direction: column;
    height: calc($box-height-sp-large / 3 - 30px);
  }
}

.fadeStrength1-enter-active {
  transition: opacity 1s, transform 1s;
  @include sp-s {
    transition: opacity .5s, transform .5s;
  }
}
.fadeStrength1-enter-from, .fadeStrength3-enter-from {
  opacity: 0;
  transform: translateX(100%);
}
.fadeStrength1-enter-to, .fadeStrength3-enter-to, .fadeStrength2-enter-to {
  opacity: 1;
}

.fadeStrength2-enter-active {
  transition: opacity 1s 0.3s, transform 1s 0.3s;
  @include sp-s {
    transition: opacity .5s 0.2s, transform .5s 0.2s;
  }
}
.fadeStrength2-enter-from {
  opacity: 0;
  transform: translateX(-100%);
  @include sp-s {
    transform: translateX(100%);
  }
}

.fadeStrength3-enter-active {
  transition: opacity 1s 0.6s, transform 1s 0.6s;
  @include sp-s {
    transition: opacity .5s 0.4s, transform .5s 0.4s;
  }
}

</style>
