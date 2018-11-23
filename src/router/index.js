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
   {path:'/home/pootoList',component:photoListComponent},
   {path:'/home/pootoList/:id',component:photoInfoComponent}
  ],
  linkActiveClass:"mui-active"
})
