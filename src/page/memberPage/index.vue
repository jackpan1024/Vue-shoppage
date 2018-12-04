<template>
    <div class="abc">
        
        <transition 
        name="my-ball"
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          > <div class="ball" v-show="ballFalg"></div>
         </transition>
         <mt-button size="normal" type="danger" @click="ballFalg = !
ballFalg">加入购物车</mt-button>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                ballFalg:false
            }
        },
        // created(){
        //     console.log(this.$store.state.a)
        // },
        methods:{
            // chang(){
            //     this.ballFalg = !this.ballFalg
            // },
            beforeEnter(el) {
                el.style.transform = "translate(0,0)"
            },
            enter(el,done){
                el.offsetWidth;
                el.style.transform = "translate(100px,100px)"
                el.style.transition = "all 2s cubic-bezier(.4,-0.3,1,.68)"
                done()
            },
            afterEnter(el){
                this.ballFalg = !this.ballFalg
            }

        }
    }
</script>
<style lang="less">
    .abc{
        .ball{
            position: absolute;
            top: 20px;
            left: 50px;
            width: 50px;
            height: 50px;
            background: red;
            border-radius: 50%;
            z-index: 999;
            
        }
    }
</style>

