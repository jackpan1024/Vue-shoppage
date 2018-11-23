<template>
   <div>
    <div class="banner">
       <mt-swipe :auto="4000" class="banner-list">
            <mt-swipe-item v-for="(item, index) in bannerList" :key="index">
                <a :href="item.url">
                    <img :src="item.img" alt="">
                </a>
            </mt-swipe-item>
        </mt-swipe> 
    </div>
    <div class="title">
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="/home/news">
		             <img src="../../img/menu1.png" alt="">
		              <p>新闻资讯</p>
                  </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="/home/pootoList">
		             <img src="../../img/menu2.png" alt="">
		              <p>图片分享</p>
                  </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="/home/productList">
		             <img src="../../img/menu3.png" alt="">
		              <p>商品购买</p>
                  </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="/">
		             <img src="../../img/menu4.png" alt="">
		              <p>留言反馈</p>
                  </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="/">
		             <img src="../../img/menu5.png" alt="">
		              <p>视频专区</p>
                  </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="/">
		             <img src="../../img/menu6.png" alt="">
		              <p>练习我们</p>
                  </router-link>
                </li>
		        </ul> 
    </div>
   </div>
</template>
<script>
// 插件  提示的功能
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      bannerList: []
    };
  },
  created() {
    this.getBannerData();
  },
  methods: {
    getBannerData() {
      this.$http.get("api/getlunbo").then(result => {
        if (result.body.status === 0) {
          this.bannerList = result.body.message;
          // console.log(this.bannerList);
          // Toast('导入数据失败');
        } else {
          Toast("导入数据失败");
        }
      });
    }
  }
};
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

.title {
  .mui-grid-view.mui-grid-9 {
    border: none;
    background-color: #fff;
    text-align: center;
    > li {
      border: none;
      background-color: #fff;
      img {
        width: 60px;
        height: 60px;
        background-color: pink;
        display: block;
        border-radius: 50%;
        margin: auto;
      }
    }
  }
}
</style>

