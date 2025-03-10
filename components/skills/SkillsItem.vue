<script setup lang="ts">

</script>

<template>

    <div class="skills-item">
      <div class="skills-subtitle">
        <NuxtLink :to="{name: 'skillsDetail'}" class="skills-subtitle-link">
          <slot name="title"></slot>
        </NuxtLink>
      </div>
      <div class="skills-text">
        <p>
          <slot name="text"></slot>
        </p>
      </div>
    </div>

</template>

<style lang="scss" scoped>
.skills-item {
  display: flex;
  flex-direction: column;
}
.skills-subtitle {
  height: 15%;
  margin: 0 3%;
  padding: 6% 3%;
  border-bottom: $border-light;
}
.skills-subtitle:hover {
  animation-name: skillsLinkAnimation;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}
.skills-subtitle-link {
  display: inline-block;
  width: 100%;
  height: 100%;
  transition: none;
  font-family: "游明朝", serif;
  font-style: italic;
  font-size: $subtitle-font-size;
}
.skills-text {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6%;
  & p {
    text-overflow: ellipsis;
  }
}

@include sp-s {
  .skills-subtitle {
    height: auto;
    margin: 0;
    padding: 0;
  }
  .skills-subtitle-link {
    padding-left: 10px;
    font-size: $sp-subtitle-font-size;
  }
  .skills-text {
    flex-basis: auto;
    padding: 0;
    margin: 0;
  }
  .skills-text p {
    width: 95%;
    font-size: $sp-font-size;
  }
}
.fadeSkills1-enter-active {
  transition: opacity 1s, transform 1s;
  @include sp-s {
    transition: opacity .5s, transform .5s;
  }
}
.fadeSkills1-enter-from, .fadeSkills3-enter-from, .fadeSkills2-enter-from {
  opacity: 0;
  transform: translateY(100%);
  @include sp-s {
    transform: translateX(100%);
  }
}
.fadeSkills1-enter-to, .fadeSkills3-enter-to, .fadeSkills2-enter-to {
  opacity: 1;
}

.fadeSkills2-enter-active {
  transition: opacity 1s 0.3s, transform 1s 0.3s;
  @include sp-s {
    transition: opacity .5s 0.2s, transform .5s 0.2s;
  }
}

.fadeSkills3-enter-active {
  transition: opacity 1s 0.6s, transform 1s 0.6s;
  @include sp-s {
    transition: opacity .5s 0.4s, transform .5s 0.4s;
  }
}

@keyframes skillsLinkAnimation {
  0% {}
  100% {background-color: $hovered-color-dark;}
}
</style>
