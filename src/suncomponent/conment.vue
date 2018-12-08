<template>
    <div class="conment-component">
        <h4>评论列表</h4>
        <textarea class="txt" placeholder="请输入评论的内容(最多不超过120个字)" v-model="postcomment"></textarea>
        <mt-button size="large" type="danger" @click="addComment">发表评论</mt-button>
        <div class="user-comment" v-for="(item, index) in usercomment" :key="index">
                <p class="title">
                    <span>第{{index+1}}楼</span>
                    <span>用户:{{item.user_name}}</span>
                    <span>发表时间:{{item.add_time | dataFormate}}</span>
                </p>
                <p class="content">
                    {{item.content }}
                </p>
        </div>
        <mt-button type="danger" size="large" plain @click="addMore">加载更多</mt-button>
        <!-- <mt-button size="large" type="danger" plain="true">点击加载更多</mt-button> -->
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    props:['id'],
  data() {
    return {
        postcomment:'',
        pageindex:1,
        usercomment:[]
    };
  },
  created(){
      this.getUserComment()
      
  },
  methods:{
       getUserComment(){
           this.$http.get('api/getcomments/'+this.id+'?pageindex='+this.pageindex).then(result=>{
               if(result.body.status === 0 ){
                   this.usercomment = this.usercomment.concat(result.body.message) 
               }
            
           })
       },
       addComment(){
           // 前端做内容判定
            if(this.postcomment.trim()==""){
                //   Toast('请输入要评论的内容')
                  Toast({
                    message: '请输入要评论的内容',
                    duration: 1000,
                    position:'top'
                    })
                    return false
              }
              //要定义传过去的字符串
           this.$http.post('api/postcomment/'+this.id,{content:this.postcomment}).then(result=>{
            
               if( result.body.status === 0){
                  this.usercomment = []
                  this.getUserComment()
                  this.postcomment =""
              }
              
           })
        
       },
       addMore(){
           this.pageindex++
         this.getUserComment()
       }
  }



};
</script>
<style lang="less">
.conment-component {
  h4 {
    font-size: 16px;
  }
  .txt {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }
  .title {
      font-size: 12px;
      background-color: #ccc;
  }
}
</style>



