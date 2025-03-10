<script setup lang="ts">
const toggleMenu = ref(false)

function toggleHamIcon() {
  toggleMenu.value = !toggleMenu.value
}

onMounted(() => {
  document.addEventListener('scroll', () => {
    //console.log(window.scrollY)
    if(window.scrollY >= 200) {
      const el = document.querySelector('#header') as HTMLElement
      el.classList.add('fixed')
      el.style.position = 'fixed'
    }
  })
})

onMounted(() => {
    if(window.scrollY >= 200) {
      const el = document.querySelector('#header') as HTMLElement
      el.classList.add('fixed')
      el.style.position = 'fixed'
    }
})

onMounted(() => {
  document.addEventListener('scroll', () => {
    //console.log(window.scrollY)
    if(window.scrollY < 200) {
      const el = document.querySelector('#header') as HTMLElement
      el.classList.remove('fixed')
      el.style.position = 'static'
    }
  })
})

onMounted(() => {
  document.addEventListener('scroll', () => {
    if(toggleMenu.value===true) {
      toggleMenu.value = false
    }
  })
})
</script>

<template>
  <div id="header-space">
    <header id="header">

      <section id="header-container">
        <HeaderLogo></HeaderLogo>
        <HeaderButtons></HeaderButtons>
        <HeaderHamburger @child-event="toggleHamIcon" :toggle="toggleMenu"></HeaderHamburger>
      </section>

      <transition name="ham-animation">
        <section id="ham-menu-container" v-show="toggleMenu">
          <HeaderHamButtons></HeaderHamButtons>
        </section>
      </transition>

    </header>
  </div>
</template>

<style lang="scss" scoped>
#header-space {
  width: 100%;
  height: $header-height;
}
#header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: $header-height;
}
#header-container {
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: $header-height;
  padding: 0;
  margin: 0;
  background-image: $header-bg-color;
  z-index: 20;
}

#ham-menu-container {
  display: none;
}


@include header-narrow {
  #header-container {
    justify-content: space-between;
    background-image: linear-gradient(180deg, rgb(255,255,255), rgb(240,240,240));
    border-top: $border-light;
    border-bottom: $border-light;
  }
  #ham-menu-container {
    display: block;
    position: absolute;
    top: 60px;
    right: 0;
    width: 200px;
    z-index: 10;
  }
  .ham-animation-enter-active, .ham-animation-leave-active {
    transition: opacity 1s, transform 1s;
  }
  .ham-animation-enter-from, .ham-animation-leave-to {
    opacity: 0;
    transform: translateX(200px);
  }
  .ham-animation-enter-to, .ham-animation-leave-from {
    opacity: 1;
  }
}

/* For Smart Phone */
@include sp-s {
  #header-space {
    height: $header-height-sp;
  }
  #header {
    height: $header-height-sp;
  }
  #header-container {
    height: $header-height-sp;
  }
  #ham-menu-container {
    top: 80px;
    width: 100%;
    height: calc(100vh - 79px);
  }
  .ham-animation-enter-active, .ham-animation-leave-active {
    transition: opacity 1s, transform 1s;
  }
  .ham-animation-enter-from, .ham-animation-leave-to {
    opacity: 0;
    transform: translateY(-400px);
  }
  .ham-animation-enter-to, .ham-animation-leave-from {
    opacity: 1;
  }
}

.fixed {
  animation-name: fixedAnimation;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  position: fixed;
  width: 100%;
}

@keyframes fixedAnimation {
  0% {opacity: 0; transform: translateY(-100%);}
  100% {opacity: 1; transform: translateY(0);}
}

</style>
