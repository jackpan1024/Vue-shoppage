<template>

<!-- this.$route.params.id  获取URL的传递的参数 -->
    <div class="newsDetails">
        <div v-for="(item, index) in newsCuntend" :key="index">
            <h1>{{item.title}}</h1>
            <p>
                <span class="creatTime">发表时间：{{item.add_time | dataFormate}}</span>
                <span class="sumClick"> 点击：{{item.click}}次</span>
            </p>
            <hr>
            <div class="countend" v-html="item.content"></div>
        </div>
         <!-- 占位标签 --> 
        <conment :id="id"></conment>
    </div>

</template>

<script>
import conment from "../../suncomponent/conment.vue"
export default {
  data() {
    return {
      id: this.$route.params.id,
      newsCuntend: []
    };
  },
  created() {
    this.getNewsDetails();
  },
  methods: {
    getNewsDetails() {
      this.$http.get("api/getnew/" + this.id).then(result => {
        // console.log(result)
        if (result.body.status === 0) {
          this.newsCuntend = result.body.message;
          // console.log(this.newsCuntend)
        }
      })
    }
  },
   components:{
            conment
        }
};
</script>

<style lang="less">

.newsDetails {
  padding: 5px;
  h1 {
    font-size: 14px;
    color: red;
    text-align: center;
    line-height: 35px;
  }
  .creatTime,
  .sumClick {
    font-size: 12px;
    color: #0094ff;
  }
  .sumClick {
    float: right;
  }
  img {
    width: 100% ;
  }
}
</style>
