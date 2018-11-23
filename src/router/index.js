import Vue from 'vue'
import Router from 'vue-router'


// 导入相关的组件
import homeComponent from "../page/homePage"
import memberComponent from "../page/memberPage"
import shopComponent from "../page/shopPage"
import searchComponent from "../page/searchPage"
import newLIst from "../page/news"
import newsInfo from "../page/newsInfo"
import photoListComponent from "../page/photoList"
import photoInfoComponent from "../page/photoInfo"
import productListComponent from "../page/productList"
import productDetailsComponent from "../page/productDetails"

Vue.use(Router)

export default new Router({
  routes: [
   {path:'/',redirect:"/home"},
   {path:'/home',component:homeComponent},
   {path:'/member',component:memberComponent},
   {path:'/shop',component:shopComponent},
   {path:'/search',component:searchComponent},
   {path:'/home/news',component:newLIst},
   {path:'/home/news/newIfon/:id',component:newsInfo},
   {path:'/home/photoList',component:photoListComponent},
   {path:'/home/photoList/:id',component:photoInfoComponent},
   {path:'/home/productList',component:productListComponent},
   {path:'/home/productList/:id',component:productDetailsComponent}
  ],
  linkActiveClass:"mui-active"
})
