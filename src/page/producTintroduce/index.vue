<template>
    <div class="product-count-component">
        <h4>{{msg.title}}</h4>
        <hr>
        <div class="text" v-html="msg.content">
            
        </div>
    </div>
</template>
<script>
  export default {
      data(){
          return {
              id:this.$route.params.id,
              msg:{}
          }
      },
      created(){
          this.getproductCountData()
      },
      methods:{
          getproductCountData(){
              this.$http.get("api/goods/getdesc/"+this.id).then(result=>{
                  if(result.body.status == 0){
                      this.msg = result.body.message[0]
                  }else{
                      alert("信息获取失败")
                  }
              })
          }
      }
  }
</script>

<style lang="less">
    .product-count-component {
        padding: 0 10px;
        h4 {
            line-height: 30px;
            text-align: center;
        }
        .text {
            text-indent: 2em;
            img {
                width: 100%;
            }
        }
    }
</style>
