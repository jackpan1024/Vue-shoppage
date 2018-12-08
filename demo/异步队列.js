// for(var a =1; a<=3;a++){
//     setTimeout(function(){
//         console.log(a)
//     }(a),0)
// }
// set 的数组去重
// let arr = [1,2,3,4,5,1,2,3,4,2,3,43,2]
// let a = []
// let newarr = new Set (arr)
// newarr.forEach(item => {
//     a.push(item)
// });
// console.log(a)
//console.log(newarr)//返回的是一个对象
// console.log(arr.every(item=>{
//     // if(item == 1 ) console.log("a")
//     console.log(1)
// }))
// promise的解决异步操作
// function a (){
//     console.log(1)
//    setTimeout(function(){
//        console.log(2)
//    },0)
//     console.log(3)
// }
function a (){
    console.log(1)
    new Promise(function(){
        setTimeout(function(){
            console.log(2)
        },0)
    }
    )
    console.log(3)
}
a()
console.i