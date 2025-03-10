<script setup lang="ts">

</script>

<template>
  <div id="app" v-cloak>
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
[v-cloak] {
  display: none;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  font-weight: normal;
}

html {
  scroll-behavior: smooth;
}
body {
  color: $text-black;
  transition:
      color 0.5s,
      background-color 0.5s;
  line-height: 1.6;
  font-family:
      Inter,
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'Arial Narrow',
      sans-serif;
  font-size: $font-size-normal;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0;
  font-weight: normal;
}
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: $container-height;
}
.box {
  width: 90%;
  height: $box-height;
}

.detail-container-h {
  display: flex;
  justify-content: center;
  width: 100%;
  height: $detail-container-height-h;
  @include sp-s {
    height: $sp-detail-container-height-h;
  }
}
.detail-container-l {
  display: flex;
  justify-content: center;
  width: 100%;
  height: $detail-container-height-l;
  @include sp-s {
    height: $sp-detail-container-height-l;
  }
}

.detail-box {
  flex-basis: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100% - 130px);
  border: $border-gray;
  background-color: $bg-clear-black;
  @include detailNarrow {
    height: calc(100% - 100px);
  }
}
.detail-item {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: $text-white;
  padding: 20px 50px;
  @include sp-s {
    padding: 20px;
  }
}
.detail-text {
  text-indent: 1em;
  color: $text-white;
}

a:not(.normal-link) {
  text-decoration: none;
  transition: 0.4s;
  padding: 0;

  &:any-link {
    color: $text-black;
  }
}

button.scroll-button {
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  background-color: transparent;
}

/* For Smart Phone(S) */
@include sp-s {
  .container {
    height: $container-height-sp;
  }
  .box {
    height: $box-height-sp;
  }
}

/* For Smart Phone (L)*/
@include sp-l {
  .container {
    height: $container-height-sp-large;
  }
  .box {
    height: $box-height-sp-large;
  }
}

/* Animation */
@keyframes profileLinkAnimation {
  0% {}
  70% {filter:blur(0); font-size:32px; letter-spacing:8px; transform: scale(1.2, 1);}
  100% {filter:blur(3px); font-size:32px; letter-spacing:8px; transform: scale(1.1, 1);}
}
@keyframes strengthLinkAnimation {
  0% {background-color: transparent;}
  100% {transform: scale(1.5,1.5) rotateY(360deg); background-color:transparent;}
}


</style>
