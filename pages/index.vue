<script setup lang="ts">
const SITE_TITLE = "Please Wait..."
useHead({
  title: SITE_TITLE
})

definePageMeta({
  layout: "welcome"
})

const router = useRouter()

const promiseFadeout = new Promise((resolve) => {
    setTimeout(() => {
      const element1 = document.querySelector("#welcome-container") as HTMLElement
      element1.classList.add("fadeout")
      const element2 = document.querySelector("#welcome-text") as HTMLElement
      element2.classList.add("fadeout")
      const element3 = document.querySelector("#skip-button") as HTMLElement
      element3.classList.add("fadeout")
      resolve(1)
    }, 6000)
  })

promiseFadeout.then(() => {
  setTimeout(() => {
    router.push({ path: "/portfolio" })
  }, 2000)
})
</script>

<template>
  <div id="welcome-container">
    <GearsIndex></GearsIndex>
  </div>
  <div id="welcome-text">
    <p>Welcome</p>
    <p>Please Wait...</p>
  </div>

  <div id="skip-button">
    <NuxtLink :to="{name: 'portfolio'}">SKIP</NuxtLink>
  </div>

</template>

<style lang="scss" scoped>

#welcome-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: radial-gradient(circle at center, rgba(200, 200, 240, 0.2) 0%, rgba(150, 150, 255, 0.9) 100%);
}

#welcome-text {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 65%;
  left: 0;
  width: 100%;
}
#welcome-text p {
  font-weight: bold;
}

#skip-button {
  position: absolute;
  top: 75vh;
  left: 0;
  width: 100vw;
  display: flex;
  justify-content: center;
}
#skip-button a {
  display: inline-block;
  width: 100px;
  height: 100%;
  font-size: $font-size-big;
  color: $text-white;
  background-image: linear-gradient(45deg, rgb(0,180,255), rgb(0,90,240));
  border-radius: 15px;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
}

.fadeout {
  animation-name: fadeoutAnimation;
  animation-duration: 2s;
  animation-fill-mode: forwards;
}
@keyframes fadeoutAnimation {
  0% {opacity: 1;}
  100% {opacity: 0;}
}

@include sp-s {
  #welcome-text {
    margin-top: 30px;
  }
  #skip-button {
    top: 80vh;
  }
  #skip-button a {
      width: 150px;
      height: 13vw;
      font-size: $sp-subtitle-font-size;
      vertical-align: middle;
    }
}
</style>
