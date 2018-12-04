<template>
  
    <div class="app-component">
      <!--这是头部板块 -->
      <div class="header">
        <!-- <mt-header type="defaul" fixed title="vue test"></mt-header>  -->
        <mt-header class="zIndex" fixed title="vue test vue testvue testvue testvue testvue test">
          <span slot="left" v-show="flagBack" @click="goBack">
            <mt-button icon="back">返回</mt-button>
          </span>
         
        </mt-header>
      </div>
      
      <!-- 底部板块 -->
       <div class="tapbar">
        <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-item-llb" to="/home">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </router-link>
          <router-link class="mui-tab-item-llb" to="/member">
          <span class="mui-icon mui-icon-contact"></span>
          <span class="mui-tab-label">会员</span>
        </router-link>
        <router-link class="mui-tab-item-llb" to="/shop">
          <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="badge">{{$store.getters.getAllData}}</span></span>
          <span class="mui-tab-label">购物车</span>
        </router-link>
      
        <router-link class="mui-tab-item-llb" to="/search">
          <span class="mui-icon mui-icon-search"></span>
          <span class="mui-tab-label">搜索</span>
        </router-link>
	      </nav>
      
      </div>
      <!-- 中间内容板块 -->
      <div class="product">

        <transition >
        
         <router-view></router-view>

        </transition>
      </div>
   
    </div>

</template>

<script>
// import { Toast } from "mint-ui"; // 导入mint-ui的消息提示框
export default {
  //向外暴露的成员  组件的内容对象
  data() {
    return {
      msg: "点击显示隐藏框",
      flagBack:true,
      num:""
    };
  },
  created(){
   
    if(this.$route.path === "/home" ){
      this.flagBack = false;
    }else{
      this.flagBack = true
    }
     
  },
   
  methods: {

    // 返回上一级
    goBack(){
      if(this.$route.path !== "/home"){
         this.$router.go(-1)
      }
      
    }
  },
  watch: {
    // 这里用箭头函数就不可以
      '$route.path': function(to){
       
        if(to === "/home"){
           this.flagBack = false
        }else {
          this.flagBack = true
        }
      }
    }
};
</script>

<style lang="less">
.app-component {
  padding: 40px 0 50px;
  // background-color: pink; 
  overflow-x: hidden;
  .header {
    .zIndex {
		z-index: 999;
	}
  }
  .product {
    width: 100% ;
    height: 100%;
    .v-enter
     {
       opacity: 0;
      transform: translateX(100%)
    }
    .v-leave-to{
      position: absolute;
      transform: translateX(-100%);
      opacity: 0;
    }
    .v-enter-active,
    .v-leave-active{
      transition: all 0.5s ease;
    }
  }
.mui-bar-tab .mui-tab-item-llb.mui-active {
  color: #007aff;
}

.mui-bar-tab .mui-tab-item-llb {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}

.mui-bar-tab .mui-tab-item-llb .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-llb .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
}
</style>
