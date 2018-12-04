<template>
    <comment :id="id"></comment>
</template>
<script>
import comment from "../../suncomponent/conment.vue"
    export default {
        data(){
            return {
                id:this.$route.params.id
            }
        },
        components:{
            comment
        }
    }
</script>