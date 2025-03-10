<script setup lang="ts">
import {links, reversedProductArray} from "@/assets/ts/data"
import {defineFadeinPosition, convertImgSrc} from "@/assets/ts/functions";

const linkTo = links[4]
const toggle = ref(false)
const pToggle = ref(true)

let scrollPoint = 0

onBeforeMount(() => {
  scrollPoint = defineFadeinPosition(5, window.innerWidth, window.innerHeight)
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
    pToggle.value = false
  }

})


const hoveredImgPath = ref("")

onMounted(() => {
  const productImg = document.getElementsByClassName("product-image") as HTMLCollectionOf<HTMLImageElement>
  for(let i = 0; i < productImg.length; i++) {
    productImg[i].addEventListener('mouseover', (e: any): void => {
      const targetImg = e.target as HTMLImageElement
      hoveredImgPath.value = targetImg.src
      const hoveredImg = document.querySelector("#hovered-img") as HTMLElement
      if(e.clientX <= 500) {
        hoveredImg.style.left = 30 + "px"
      } else {
        hoveredImg.style.left = "50vw"
      }
      if(e.clientY <= 300) {
        hoveredImg.style.top = e.clientY + 100 + "px"
      } else {
        hoveredImg.style.top = e.clientY - 350 + "px"
      }
      hoveredImg.classList.remove("hovered-hidden")
      hoveredImg.classList.add("hovered-show")
    })
  }
})

onMounted(() => {
  const productImg = document.getElementsByClassName("product-image") as HTMLCollectionOf<HTMLImageElement>
  for(let i = 0; i < productImg.length; i++) {
    productImg[i].addEventListener('mouseout', (e: any): void => {
      hoveredImgPath.value = ""
      const hoveredImg = document.querySelector("#hovered-img") as HTMLElement
      hoveredImg.classList.remove("hovered-show")
      hoveredImg.classList.add("hovered-hidden")
    })
  }
})

</script>

<template>
  <section id="product-container" class="container">

    <TitleTextBox :toggle="toggle" :title="linkTo" :scroll="scrollPoint"></TitleTextBox>

    <div id="product-box-parent">
        <transition name="fadein">
          <div id="product-box" class="box" v-show="toggle">
            <client-only>

              <!-- 1番目  No Image -->
              <div class="product-item">
                <div class="product-image-box">
                  <a :href="reversedProductArray[0].link" class="normal-link">
                    <img src="~/assets/img/product/product0.png" :alt="`サムネイル（${reversedProductArray[0].title}）`" class="product-image" width="200"/>
                  </a>
                </div>

                <div class="product-text-box">
                  <h2>{{reversedProductArray[0].title}}</h2>
                  <p v-if="pToggle">{{reversedProductArray[0].text}}</p>
                  <p><a :href="reversedProductArray[0].link" class="normal-link">リンク先</a></p>
                </div>
              </div>

              <!-- 2番目  No Image -->
              <div class="product-item">
                <div class="product-image-box">
                  <a :href="reversedProductArray[1].link" class="normal-link">
                    <img src="~/assets/img/product/product0.png" :alt="`サムネイル（${reversedProductArray[1].title}）`" class="product-image" width="200"/>
                  </a>
                </div>

                <div class="product-text-box">
                  <h2>{{reversedProductArray[1].title}}</h2>
                  <p v-if="pToggle">{{reversedProductArray[1].text}}</p>
                  <p><a :href="reversedProductArray[1].link" class="normal-link">リンク先</a></p>
                </div>
              </div>

              <!-- 3番目  No Image -->
              <div class="product-item">
                <div class="product-image-box">
                  <a :href="reversedProductArray[2].link" class="normal-link">
                    <img src="~/assets/img/product/product0.png" :alt="`サムネイル（${reversedProductArray[2].title}）`" class="product-image" width="200"/>
                  </a>
                </div>

                <div class="product-text-box">
                  <h2>{{reversedProductArray[2].title}}</h2>
                  <p v-if="pToggle">{{reversedProductArray[2].text}}</p>
                  <p><a :href="reversedProductArray[2].link" class="normal-link">リンク先</a></p>
                </div>
              </div>

              <!-- 4番目  KAKUU NEKO CAFE -->
              <div class="product-item">
                <div class="product-image-box">
                  <a :href="reversedProductArray[3].link" class="normal-link">
                    <img src="~/assets/img/product/product1.png" :alt="`サムネイル（${reversedProductArray[3].title}）`" class="product-image" width="200"/>
                  </a>
                </div>

                <div class="product-text-box">
                  <h2>{{reversedProductArray[3].title}}</h2>
                  <p v-if="pToggle">{{reversedProductArray[3].text}}</p>
                  <p><a :href="reversedProductArray[3].link" class="normal-link">リンク先</a></p>
                </div>
              </div>

            </client-only>
          </div>
        </transition>

        <div id="product-link">
          <NuxtLink :to="{name: 'productDetail'}" id="product-link-text" class="normal-link">詳細はこちら</NuxtLink>
        </div>
      </div>

    <teleport to="body">
      <div id="hovered-img" class="hovered-hidden">
        <img :src="hoveredImgPath" alt="" width="500">
      </div>
    </teleport>

  </section>
</template>

<style lang="scss" scoped>
#product-container {

}
#product-box-parent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: calc($box-height + 30px);
}
#product-box {
  display: flex;
  flex-wrap: wrap;
  background-color: $bg-clear-white;
}
.box {
  width: 100%;
}
.product-item {
  flex-basis: 50%;
  display: flex;
  height: 200px;
  padding: 0 2.5%;
}
.product-image-box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height:200px;
}
#hovered-img {

}
.hovered-hidden {
  display: none;
}
.hovered-show {
  display: block;
  position: fixed;
}
.product-text-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
}
#product-link {
  display: flex;
  justify-content: end;
}
#product-link-text {
  display: inline-block;
  margin-right: 100px;
}

@include sp-s {
  #product-box-parent {
    height: calc($box-height-sp + 30px);
  }
  #product-box {
    justify-content: center;
  }
  .product-item {
    flex-basis: 95%;
    height: calc($box-height-sp / 4);
    & h2 {
      font-size: $sp-font-size;
    }
    & p {
      font-size: $sp-font-size;
    }
  }
  #product-link-text {
    margin-right: 50px;
  }
}
@include sp-l {
  #product-box-parent {
    height: calc($box-height-sp-large + 30px);
  }
  .product-item {
    height: calc($box-height-sp-large / 4);
  }
}

.fadein-enter-active {
  transition: opacity 1s;
  @include sp-s {
    transition: opacity .5s;
  }
}
.fadein-enter-to {
  opacity: 1;
}
.fadein-enter-from {
  opacity: 0;
}
</style>
