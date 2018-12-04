import Vue  from "vue"

import  Vuex  from "vuex"

Vue.use(Vuex)
// const a = JSON.parse(localStorage.getItem('productData') || [])
const car = JSON.parse(localStorage.getItem('car') || '[]')
export default  new Vuex.Store({
    state:{
        car:car
        
    },
   
  mutations:{ 
      addToCar(state,goodsInfo){
          var flag = false
          state.car.some(item=>{
              if(item.id=== goodsInfo.id){
                  item.count +=parseInt(goodsInfo.count)
                  flag = true;
                  return true
              }
             
          })
        if(!flag){
             state.car.push(goodsInfo)
         }
         localStorage.setItem('car',JSON.stringify(state.car))
      }
  },
  getters:{
      getAllData(state) {
          let count = 0
        state.car.forEach(item => {
            count += item.count
            
        })
        return count
      }
  }
})