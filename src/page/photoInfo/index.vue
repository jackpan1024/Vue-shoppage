<template>
   <div class="photoInfo-component">
       <div class="details" v-for="(item, index) in photoDetails" :key="index">
           <h3>{{item.title}}</h3>
            <p>
                <span class="time">发表时间：{{item.add_time | dataFormate}}</span>
                <span class="click">点击次数： {{item.click}} 次</span>
            </p>
            <hr>
            <div class="small-img">
                <img :src="item.src" alt="" v-for="(item, index) in imagesList" :key="index">
            </div>
            <p class="count" v-html="item.content"></p>
       </div>
       <comment :id="id"></comment>

   </div>
</template>
<script>
    import comment from "../../suncomponent/conment.vue"
    export default {
        data(){
            return {
                id:this.$route.params.id,
                photoDetails:[],
                imagesList:[]
            }
        },
        created(){
            this.getDetails(),
            this.getImageData()
        },
        methods:{
            getDetails(){
                 this.$http.get("api/getimageInfo/"+this.id).then(result=>{
                     
                     if(result.body.status == 0){
                         this.photoDetails = result.body.message
                        
                     }else{
                         aleart('数据获取失败')
                     }
                 })
            },
            getImageData(){
               this.$http.get("api/getthumimages/"+this.id).then(result=>{
                  if(result.body.status == 0){
                      this.imagesList = result.body.message
                  }
                })
            }
        },
        components:{
            comment
        }
    }
</script>
<style lang="less">
    .photoInfo-component {
        .small-img {
            img {
                width: 16px;
                height: 16px;
                background-color: red;
                display: inline-block;
                margin-left: 5px;
            }
        }
    }
</style>

