//
// for (const i of arr) {
//     console.log(i);
    
// }

// const map=new Map()
// map.set(1,"a")
// map.set(2,"b")
// map.set(3,"c") 

// console.log(map);

// for(let i=1;i<=map.size;i++){
//     console.log(map.get(i));
    
// }

// for (const [k,v] of map) {
//     console.log(k,"=>",v);
// }


// const obj={
//     1:"a",
//     2:"b",
//     3:"c"
// }
// for (const [k,v] of obj) {
//        console.log(k,v);
//     }


// for (const key in obj) {
//     const element = obj[key];
//     console.log(key,element);
// }

// for (const i in arr) {
//   console.log(i);
  
    
// }

//   const arr=[1,2,3,4]
// arr.forEach( function (item) {
//         console.log(item)
// })

// arr.forEach( (item)=> {
//         console.log(item);
        
// })


// function one(val){
//     console.log(val);
    
// }
// arr.forEach(one)

// let arr=[1,2,3,4,5,6]
// arr.forEach( function (item){
//         console.log(item);
        
// })

// const val=arr.filter( function (item){
//     return item%2==0  ;      
// } )
// // console.log(val);

// let array=[]
// arr.forEach( (item)=>{
//     if(item>3)
//         array.push(item)
// })
// console.log(array);

// const val=arr.filter( (item)=> item>3)

// console.log(val)
 

// let arr=[1,2,3,4,5,6,7]
// const val=arr.map( (item)=> item+10)
// console.log(val);

//  let arr=[1,2,3,4,5,6,7,8,9,10]
//  const val=arr.map( (item)=> item*10)
//               .map( (item)=> item+1)
//               .filter((item)=> (item>=40))
// console.log(val)

// const arr=[1,2,3]
// const ans=arr.reduce( function(acc,currvalue){
//     return acc+currvalue
// },0)
// console.log(ans);

// const val=arr.reduce( (acc,currvalue)=>{
//     return acc+currvalue
// },0)
// console.log(val);

// const val=arr.reduce( (arr,currvalue)=> arr+currvalue,0)
//  console.log(val);

const array=[
    {
        course:"js",
        price:100
    },
    {
        course:"python",
        price:2000
    },
    {
        course:"java",
        price:500
    },
    {
        course:"cpp",
        price:3000
    },
]

const val=array.reduce( (acc,currvalue)=>acc+currvalue.price,0)
console.log(val);
