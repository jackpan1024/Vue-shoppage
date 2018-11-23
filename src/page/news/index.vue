<template>
   <!-- <h1> xinwen</h1> -->
   <div class="newsList">
        <router-link :to="'/home/news/newIfon/'+item.id" v-for="item in newsList" :key="item.id">
            <img src="https://www.xp510.com/uploadfile/2018/0129/20180129092501876.jpg" alt="">
            <div class="count">
                <h3 class="mint-header-title">{{item.title}}</h3>
                <p>
                    <span class="time">发表时间：{{item.add_time | dataFormate}}</span>
                    <span class="tauch">点击: <i>{{item.click}}</i>次</span>
                </p>
            </div>
        </router-link>
    </div>
</template>

<script>
    
    export default {
        data(){
            return{
                newsList:[]
            }
        },
        created(){
            this.getNewsData()
        },
        methods:{
            getNewsData(){
                this.$http.get('api/getnewslist').then(result =>{
                   if(result.body.status === 0 ){
                       this.newsList = result.body.message
                    //    console.log(this.newsList)
                   }
                   else{
                       alert("信息获取失败")
                   }
                })
            }
        },
       
    }
    
</script>
<style lang="less">
    .newsList {
        padding: 10px;
       >a {
            display: flex;
        img {
            height: 60px;
            float: left;
            margin-right: 5px;
            display: block;
        }
        .count {
           flex: 1;
           padding-right: 20px;
           h3 {
            //    display: inline-block;
               font-size: 14px;
               width: 300px;
               color: #000;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              
           }
           .time,.tauch {
               font-size: 12px;
               color:#0094ff;
           }
        .tauch {
            float: right;
             
        }
        }
       }
    }
</style>
