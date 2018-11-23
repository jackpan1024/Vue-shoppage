<template>
   <div class="peoductList-component">
       <ul>
           <router-link tag="li" :to="'/home/productList/'+item.id" v-for="item in productList" :key="item.id">
               <div class="product">
                   <div class="photo">
                       <img :src="item.img_url" alt="">
                        <p>{{item.title}}</p>
                   </div>
                   <div class="price">
                        <p>
                            <span class="new">￥ {{item.sell_price}}</span>
                            <del class="old"> ￥ {{item.market_price}}</del>
                        </p>
                        <p class="other">
                            <span class="status"> 热卖中 </span>
                            <span class="sulpus">剩{{item.stock_quantity}}件</span>
                        </p>
                    </div>
               </div>
           </router-link>
       </ul>
   </div>
</template>
<script>
export default {
    data(){
        return {
            pageindex:1,
            productList:[]
        }
    },
    created(){
        this.getProductList()
    },
    methods:{
        getProductList(){
            this.$http.get('api/getgoods?pageindex='+this.pageindex).then(result=>{
               if(result.body.status == 0){
                   this.productList = result.body.message
                //    console.log(this.productList)
               }else {
                   alert('获取信息失败')
               }
            })
        }
    }
}
</script>

<style lang="less">
.peoductList-component {
    width: 100%;
  ul{
      width: 100%;
      padding: 0;
     li{
     width: 49%;
     display: inline-block;
     list-style: none;
     box-sizing: border-box;
     padding: 5px;
     border: none;
     .product {
         border: 1px  solid #ccc;
         box-sizing: border-box;
         .photo {
             position: relative;
             img {
                 width: 100%;
                 background-color: cyan;
                 height: 230px;
                 display: block;
             }
             p {
                 position: absolute;
                 top: 50%;
                 transform: translateY(-50%);
                 color:#000;
                 font-weight: 700;
             }
         }
         .price {
             .new {
                 font-size: 16px;
                 color: red;
                 font-weight: 600;
                 margin-right: 10px;
             }
             .old,.other{
                 font-size: 12px;
                 padding: 10px;
             }
            .sulpus{
                float: right;
            }
         }
     }
    }
  }

}
</style>
