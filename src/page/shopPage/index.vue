<template>
  <div class="car-product-banence">
    <div class="productList" v-for="(item,index) in myGoods" :key="index">
      <mt-switch v-model="value" @change="selectChange(item.id)"></mt-switch>
      <img :src="item.thumb_path" alt>
      <div>
        <h4>{{item.title}}</h4>
        <span>{{item.sell_price}}</span>
        <div class="mui-numbox">
          <button class="mui-btn mui-btn-numbox-minus" type="button" @click="subsun(item.id)">-</button>
          <input class="mui-input-numbox" type="number" v-model="item.goodsCount">
          <button class="mui-btn mui-btn-numbox-plus" type="button" @click="addsun(item.id)">+</button>
        </div>
      </div>
    </div>
    <div class="bannece">
      <div class="txt">
        <p>总计</p>
        <p>
          已勾选的商品
          <span>0</span>件
          总价￥
          <span>0</span>元
        </p>
      </div>

      <mt-button type="danger" size="narmal">结算</mt-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      myGoods: [],
      goodsIds: [],
      ids: []
    };
  },
  created() {
    this.getAllMyGoods();
  },
  methods: {
    getAllMyGoods() {
      let myGoods = JSON.parse(localStorage.getItem("car"));
      if (myGoods) {
        myGoods.forEach(element => {
          var goodsObj = {};
          goodsObj.goodscount = element.count;
          this.goodsIds.push(goodsObj);
          this.ids.push(element.id);
        });
      } else {
        return;
      }
      this.$http
        .get("api/goods/getshopcarlist/" + this.ids.join(","))
        .then(res => {
          res.body.message.forEach((element, index) => {
            //    console.log(index)
            element.goodsCount = this.goodsIds[index].goodscount;
            //    console.log(this.goodsIds[index].goodscount)
          });
          this.myGoods = res.body.message;
          //   console.log(this.myGoods)
        });
    },
    addsun(id) {
      this.myGoods.forEach(item => {
        console.log(item.goodsCount);
        if (id === item.id) {
          item.goodsCount++;
        }
      });
    },
    subsun(id) {
      this.myGoods.forEach(item => {
        if (id === item.id) {
          item.goodsCount--;
          if (item.goodsCount < 1) item.goodsCount = 1;
        }
      });
    },
    selectChange(id) {
     
    }
  }
};
</script>
<style lang="less">
p {
  margin: 0;
  padding: 0;
}
.car-product-banence {
  background-color: #eee;
  width: 100%;
  height: 100%;
  padding: 15px 15px;

  .productList {
    box-shadow: 1px 1px 1px #ccc;
    padding: 5px;
    margin-bottom: 10px;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    box-align: center;
    img {
      width: 60px;
      height: 60px;
      background-color: red;
      margin: 10px;
    }
    h4 {
      font-size: 12px;
    }
  }

  .bannece {
    margin-top: 10px;
    background-color: #fff;
    padding: 15px 10px;
    display: flex;
    justify-content: space-between;
    .txt {
      span {
        color: red;
      }
    }
  }
}
</style>

