<template>
    <div class="produc-details-component">
        <div v-for="(item, index) in productInfo" :key="index">
            <div class="banner"></div>
            <div class="productName">
            <h4>商品名称</h4>
            <hr>
            <p>
                <span >市场价：<del>￥{{item.market_price}}</del></span>
                <span>销售价{{item.sell_price}}</span>
            </p>
            <div class="buyNum">
                <span>购买数量</span>
                <div class="mui-numbox">
					<button class="mui-btn mui-btn-numbox-minus" type="button" @click="sub">-</button>
					<input class="mui-input-numbox" type="number" v-model="msg"/>
					<button class="mui-btn mui-btn-numbox-plus" type="button" @click="add">+</button>
				</div>
                <div class="btn-add-shop">
                    <mt-button size="normall" type="primary">立即购买</mt-button>
                    <mt-button size="normall" type="danger" class="add-shop-car"><span></span>   加入购物车</mt-button>
                </div>
            </div>
            </div>
            <div class="productParameter">
            <h4>商品参数</h4>
            <hr>
            <p>商品货号:{{item.goods_no}} </p>
            <p>库存情况: {{item.stock_quantity}}件</p>
            <p>上架时间:{{item.goods_no | dataFormate}}</p>
            <hr>
            <div class="button">
                <mt-button size="large" plain type="primary">图文介绍</mt-button>
                <mt-button size="large" plain type="danger" >商品评论</mt-button>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      msg: 1,
      id: this.$route.params.id,
      productInfo: []
    };
  },
  created() {
    this.getproductInfo();
  },
  methods: {
    getproductInfo() {
      this.$http.get("api/goods/getinfo/" + this.id).then(result => {
        if (result.body.status == 0) {
          this.productInfo = result.body.message;
          console.log(this.productInfo);
        }
      });
    },
    add() {
      this.msg++;
      if (this.msg.toString() < 1) {
        this.msg = 1;
      }
    },
    sub() {
      this.msg--;
      if (this.msg.toString() < 1) {
        this.msg = 1;
      }
    }
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
  .banner {
    width: 100%;
    height: 230px;
    background-color: cyan;
    margin-top: 0;
  }
  .productName {
    padding: 0 5px 10px;
    > p {
      height: 30px;
      line-height: 30px;
    }

    .btn-add-shop {
      margin-top: 15px;
      .add-shop-car {
        >span {
            display: block;
            width: 10px;
            height: 10px;
            background: red;
            border-radius: 50%;
            z-index: 999;
        }
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
