<script setup lang="ts">
import {links, admin, adminUniversity} from "@/assets/ts/data"
import {defineFadeinPosition} from "@/assets/ts/functions";
const linkTo = links[0]
const toggle = ref(false)


let scrollPoint = 0

onBeforeMount(() => {
  scrollPoint = defineFadeinPosition(1, window.innerWidth, window.innerHeight)
})


onMounted(() => {
  document.addEventListener('scroll', (): void => {
    if(window.scrollY >= scrollPoint) {
      toggle.value = true
    }
  })
  if(window.scrollY >= scrollPoint) {
    toggle.value = true
  }
})

</script>

<template>
  <section id="profile-container" class="container">

    <TitleTextBox :toggle="toggle" :title="linkTo" :scroll="scrollPoint"></TitleTextBox>

    <div id="profile-box-parent">
      <div id="profile-box" class="box">
        <transition name="fade1">
          <div id="profile-item" v-show="toggle">
            <div id="profile-image">
              <img src="~/assets/img/profile-cat.png" alt="my_cat" width="140">
            </div>
            <div id="profile-text">
              <table>
                <tbody>
                  <tr>
                    <th>管理人：</th>
                    <td>{{admin}}</td>
                  </tr>

                </tbody>
              </table>
              <p>プログラミングやってます。<br>
              当サイトは私のポートフォリオですが、<br>
              現在は一部を除いて情報を非公開にしています。<br>
              <br>
              写真の猫はくろちゃん♂。</p>
            </div>
            <div id="buttons">
              <NuxtLink :to="{name: 'introduction'}" class="profile-link">自己紹介</NuxtLink>
              <NuxtLink :to="{name: 'hobby'}" class="profile-link">趣味特技</NuxtLink>
            </div>
          </div>
        </transition>


      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#profile-container {

}
#profile-box-parent {
  display: flex;
  justify-content: center;
  width: 100%;
}
#profile-box {
  display: flex;
  justify-content: center;
  flex-direction: row;
}
#profile-item {
  flex-basis: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: $bg-clear-white;
}
#profile-text {
  padding: 10px 30px;
  width: 500px;
}

.profile-text tbody {

}
.profile-text th {
  width: 30%;
  text-align: left;
}

#buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  width: 50vw;
  min-width: 400px;
}
.profile-link {
  display: inline-block;
  font-size: $font-size-big;
  border-bottom: $border-gray;
  width: 180px;
  height: 50px;
  text-align: center;
  font-family: "游明朝", serif;
  font-style: italic;
  background-image: linear-gradient(0, rgba(0,0,0,0.2), rgba(0,0,0,0));

  &:hover {
    animation-name: profileLinkAnimation;
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
  }
}

/* For Smart Phone */
@include sp-s {
  #profile-text {
    width: 100%;
    font-size: $sp-font-size;
  }
  #profile-text p {

  }
  #buttons {
    flex-direction: column;
    width: 100%;
    height: 130px;

  }
  .profile-link {
    font-size: $subtitle-font-size;
    border: 5px solid #ccf;
    border-radius: 15px;
    vertical-align: middle;
    height: 60px;

  }
}
@include sp-l {
  #profile-text p {
    min-height: 150px;
  }
  #buttons {
    height: 140px;
  }
  .profile-link {

  }
}

.fade1-enter-active {
  transition: opacity 1s, transform 1s;
  @include sp-s {
    transition: opacity .5s, transform .5s;
  }
}
.fade2-enter-active {
  transition: opacity 1s .5s, transform 1s .5s;
  @include sp-s {
    transition: opacity .5s .5s, transform .5s .5s;
  }
}
.fade1-enter-from, .fade2-enter-from {
  opacity: 0;
  transform: translateY(50px);
}
.fade1-enter-to, .fade2-enter-to {
  opacity: 1;
}


</style>
