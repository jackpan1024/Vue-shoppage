// 导入vue 
import Vue from "vue"
// 导入  APP 的组件
import app from "./App.vue"

//导入接口的请求文件
import VueResource from "vue-resource"

// 注册接口请求
Vue.use(VueResource)
// 阻止vue 启动的时候的默认提示功能
Vue.config.productionTip = false

// import MintUi from "mint-ui"

// import "mint-ui/lib/style.css"
// Vue.use(MintUi)  //导入全局的Mint-ui   但是一般不使用 因为部分样式的使用不到 会让代码比较多余
// console.log(__dirname)

// 按需导入   在导入的时候是需要先下载 babel-plugin-babelrc 的包 然后再按照官方文档配置相关的文件
import { Header,Button,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

 // 在同一个项目中是可以同时使用多个框架老构建项目的
 //使用mui 专业的手机移动端布局  因为mui没有npm  所以直接下载包 然后导入包
 import "./lib/mui/css/mui.css"
//  import "./lib/mui/js/mui.js"
import "./lib/mui/css/icons-extra.css"


// 导入路由模板
import router from "./router/"


// 导入公共样式模块

import "./css/com.css"



let vm = new Vue({
  el:'#app',
  render:c=>c(app),
  router
})