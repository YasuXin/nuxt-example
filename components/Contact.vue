<script setup lang="ts">
import {links, adminEmail} from "@/assets/ts/data"
import {defineFadeinPosition} from "@/assets/ts/functions";

const linkTo = links[5]
const toggle = ref(false)
const buttonToggle = ref(false)

const adminEmailLink = "mailto:" + adminEmail

let scrollPoint = 0

onBeforeMount(() => {
  scrollPoint = defineFadeinPosition(6, window.innerWidth, window.innerHeight)
  scrollPoint -= 200

})

onMounted(() => {
  document.addEventListener('scroll', () => {
    if(window.scrollY >= scrollPoint) {
      toggle.value = true
    }
  })
  if(window.scrollY >= scrollPoint) {
    toggle.value = true
  }

  if(window.innerWidth <= 500  &&  window.innerHeight >= window.innerWidth * 1.2) {
    buttonToggle.value = true
  }
})

</script>

<template>
  <section id="contact-container" class="container">

    <TitleTextBox :toggle="toggle" :title="linkTo" :scroll="scrollPoint"></TitleTextBox>

    <div id="contact-box-parent">
      <div id="contact-box" class="box">
        <div id="contact-item">
          <address class="email-address" v-if="buttonToggle">
            お問い合わせは：<br>
            <a :href="adminEmailLink" class="address">こちら</a>
          </address>
          <address class="email-address" v-else>
            お問い合わせはこちらから：
            <a :href="adminEmailLink" class="address">{{adminEmail}}</a>
          </address>
        </div>
      </div>
    </div>

  </section>
</template>

<style lang="scss" scoped>
#contact-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}
#contact-box-parent {
  display: flex;
  justify-content: center;
}
#contact-box {
  display: flex;
  justify-content: center;
  background-color: $bg-clear-white;
  width: 90%;
}
#contact-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: $box-height;
}
.email-address {
  margin-right: 50px;
  font-size: $font-size-big;
}
.email-address a {
  display: block;
  font-size: $title-font-big;
  text-decoration-line: underline;
  padding: 20px 30px 20px 100px;
  height: 100px;
  line-height: 1;

  &:hover {
    animation-name: addressAnimation;
    animation-duration: 2s;
    animation-fill-mode: forwards;
  }
}

/* Animations */
@keyframes addressAnimation {
  0% {}
  10% {transform: rotate(5deg);}
  20% {transform: rotate(-3deg);}
  30% {transform: rotate(4deg);}
  40% {transform: rotate(-2deg);}
  50% {transform: rotate(0); color: var(--text-color-black); height: 200px; line-height: 4;}
  100% {transform: perspective(500px) rotateX(60deg) scale(1, 2.5); color: darkred; height: 200px; line-height: 4;}
}

/* For Smart Phone(S) */
@include sp-s {
  .email-address {
    margin-right: 0;
    padding: 0 5vw;
  }
  .email-address a {
    display: inline-block;
    height: auto;
    font-size: 5vw;
    color: $text-white;
    text-decoration-line: none;
    padding: 10px 10px 15px;
    border: 10px solid rgb(200,200,255);
    border-radius: 30px;
    background-color: rgb(90,90,220);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);

    &:hover {
      animation: none;
    }
  }
  .address {
    margin-top: 50px;
    width: 100%;
    text-align: center;
  }
}

</style>
