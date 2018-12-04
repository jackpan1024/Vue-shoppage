<template>
    <div class="banner">
       <mt-swipe :auto="4000" class="banner-list">
            <mt-swipe-item v-for="(item, index) in bannerList" :key="index">
                <a :href="item.url">
                    <img :src="item.img" alt="">
                </a>
            </mt-swipe-item>
        </mt-swipe> 
    </div>
</template>
<script>
    export default {
        props:['bannerList'],
    }
</script>

<style lang="less">
    .banner {
  .banner-list {
    width: 100%;
    height: 200px;
    .mint-swipe-item {
      &:nth-child(1) {
        background-color: blue;
      }
      &:nth-child(2) {
        background-color: #ccc;
      }
      &:nth-child(3) {
        background-color: skyblue;
      }
      img {
        width: 100%;
      }
    }
  }
}
</style>

