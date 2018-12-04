<template>
    <div class="produc-details-component">
      
        
        <div>
            <banner :bannerList="bannerList"></banner>
            <div class="productName">
              <h4>商品名称</h4>
              <hr>
              <p>
                  <span >市场价：<del>￥{{productInfo.market_price}}</del></span>
                  <span>销售价{{productInfo.sell_price}}</span>
              </p>
              <div class="buyNum">
                  <span>购买数量</span>
                  <div class="mui-numbox">
                    <button class="mui-btn mui-btn-numbox-minus" type="button" @click="sub">-</button>
                    <input class="mui-input-numbox" type="number" v-model="msg" />
                     <button class="mui-btn mui-btn-numbox-plus" type="button" @click="add">+</button>
                  </div>
                  <div class="btn-add-shop">
                    <transition 
                    name="my-ball"
                      @before-enter="beforeEnter"
                      @enter="enter"
                      @after-enter="afterEnter"
                      > <div class="ball" v-if="ballFalg" ref="ball">
                      </div>
                    </transition>
                      <mt-button size="normal" type="primary">立即购买</mt-button>
                      <mt-button size="normal" type="danger" class="add-shop-car" @click="chang" >加入购物车</mt-button>
                  </div>
              </div>
            </div>
            <div class="productParameter">
              <h4>商品参数</h4>
              <hr>
              <p>商品货号:{{productInfo.goods_no}} </p>
              <p>库存情况: {{productInfo.stock_quantity}}件</p>
              <p>上架时间:{{productInfo.goods_no | dataFormate}}</p>
              <hr>
              <div class="button">
                  <mt-button size="large" plain type="primary" @click="pageTo(id)">图文介绍</mt-button>
                  <mt-button  size="large" plain type="danger"  @click="pageToComment(id)">商品评论</mt-button>
              </div>
            </div>
        </div>
    </div>
</template>
<script>
import banner from "../../suncomponent/banner.vue"
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      ballFalg: false,
      msg: 1,
      bannerList:[],
      id: this.$route.params.id,
      productInfo: {},
      maxNum:"",
    };
  },
  created() {
    this.getproductInfo();
    this.getImgInfo()
 
  },
  methods: {
    getproductInfo() {
      this.$http.get("api/goods/getinfo/" + this.id).then(result => {
        if (result.body.status == 0) {
          this.productInfo = result.body.message[0]; 
          this.maxNum = result.body.message[0].stock_quantity
          
        }
      });
    },
    getImgInfo(){
      this.$http.get("api/getthumimages/"+this.id).then(result=>{
        // console.log( result.body.message)
        result.body.message.forEach(res => {
         res.img = res.src
         })
        this.bannerList = result.body.message
      })
    },
    add() {
      
      this.msg++;
      if (parseInt(this.msg)< 1) {
        this.msg = 1;
      } else if (parseInt(this.msg)>parseInt(this.maxNum)) {
        this.msg=this.maxNum
        Toast('商品超出上限');
      }
    },
    sub() {
      this.msg--;
      if (this.msg.toString() < 1) {
        this.msg = 1;
      }
    },
    pageTo(id){
      // console.log(this.$router.push)
      this.$router.push({ name: 'producTintroduce', params: { id }})
    },
    pageToComment(id) {
      // this.$router.push({path:`/home/productList/productComment/${id}`})  es6 的新语法
       this.$router.push({path: "/home/productList/productComment/"+id})  // 原始的拼接方式
    },
    chang(){
      this.ballFalg= !this.ballFalg
      let goodsInfo = {
        id:this.id,
        count:this.msg,
        price:this.productInfo.sell_price
      } 
      this.$store.commit('addToCar',goodsInfo)
       
    },
    beforeEnter(el){
      el.style.transform = "translate(0,0)"
     
    },
    enter(el,done){
      el.offsetWidth;
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      const shopcarposition = document.getElementById('badge').getBoundingClientRect();
      const ballY = shopcarposition.top - ballPosition.top
      const ballZ = shopcarposition.left - ballPosition.left 
     el.style.transform= 'translate('+ballZ+'px,'+ballY+'px)'
     el.style.transition = "all 0.5s ease"
     done()
    },
    afterEnter(){
      this.ballFalg = !this.ballFalg
    }
    
     
  },
 watch:{
  msg:function(to){
    console.log(to)
    if (to< 1) {
     this.msg = 1;
     Toast('输入不合法');
   } else if (to>parseInt(this.maxNum)) {
     this.msg=this.maxNum
     Toast('输入不合法');
   }
  }
 },
  components:{
    banner
  }
};
</script>


<style lang="less">
.produc-details-component {
  padding: 20px 10px;
  background-color: #eee;
  
  .banner,
  .productName,
  .productParameter {
    background-color: #fff;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    margin-top: 10px;
    h4 {
      line-height: 30px;
      margin: 0;
    }
  }
  // .banner {
  //   width: 100%;
  //   height: 230px;
  //   background-color: cyan;
  //   margin-top: 0;
  // }
  .productName {
    padding: 0 5px 10px;
    > p {
      height: 30px;
      line-height: 30px;
    }

    .btn-add-shop {
      margin-top: 15px;
      position: relative;
     .ball{
            position: absolute;
            top: -10px;
            left: 150px;
            width: 10px;
            height:10px;
            background: red;
            border-radius: 50%;
            z-index: 999;
            
        }
    }

    .mint-button {
      display: inline-block;
    }
  }
  .productParameter {
    padding-bottom: 5px;
    .mint-button {
      margin-top: 5px;
    }
    .button {
      padding-top: 15px;
    }
  }
}
</style>
