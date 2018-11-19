<template>
  
    <div class="app-component">
      <!--这是头部板块 -->
      <div class="header">
        <mt-header type="defaul" fixed title="vue test"></mt-header> 
      </div>
      
      <!-- 底部板块 -->
       <div class="tapbar">
        <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-item" to="/home">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </router-link>
          <router-link class="mui-tab-item" to="/member">
          <span class="mui-icon mui-icon-contact"></span>
          <span class="mui-tab-label">会员</span>
        </router-link>
        <router-link class="mui-tab-item" to="/shop">
          <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
          <span class="mui-tab-label">购物车</span>
        </router-link>
      
        <router-link class="mui-tab-item" to="/search">
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
      msg: "点击显示隐藏框"
    };
  },
  methods: {
    // show() {
    //   Toast("弹出消息框");
    // }     对消息提示框的使用方式
  }
};
</script>

<style lang="less">
.app-component {
  padding: 40px 0 50px;
  background-color: pink; 
  overflow-x: hidden;
  .product {
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
}
</style>
