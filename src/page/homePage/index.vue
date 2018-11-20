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
		            <li v-for="(item,index) in title" :key="index" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
		                   <img :src="item.url" alt="">
		                    <p>{{item.name}}</p>
                        </a>
                    </li>
		            <!-- <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">Email</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">Chat</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">location</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">Phone</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-gear"></span>
		                    <div class="mui-media-body">Setting</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-info"></span>
		                    <div class="mui-media-body">about</div></a></li>
		           <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-more"></span>
		                    <div class="mui-media-body">more</div></a></li> -->
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
      bannerList: [],
      title:[
          {name:'新闻资讯',url:'src/img/menu1.png'},
          {name:'新闻资讯',url:'img/menu1.png'},
          {name:'新闻资讯',url:'../../img/menu1.png'},
          {name:'新闻资讯',url:'../../img/menu1.png'},
          {name:'新闻资讯',url:'../../img/menu1.png'},
          {name:'新闻资讯',url:'../../img/menu1.png'}
      ]
    };
  },
  created() {
    this.getBannerData();
  },
  methods: {
    getBannerData() {
      this.$http.get("http://www.lovegf.cn:8899/api/getlunbo").then(result => {
        if (result.body.status === 0) {
          this.bannerList = result.body.message;
          console.log(this.bannerList);
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
        border:none;
        background-color: #fff; 
        text-align: center;
        >li {
            border:none;
            background-color: #fff; 
            img {
                width: 60px;
                height: 60px;
                background-color: pink;
                display: block;
                border-radius: 50%  ;
                margin: auto;
            }
        }
    }
}
</style>

