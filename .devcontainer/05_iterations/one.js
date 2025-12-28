// const arr=[1,2,3,4]
// for (const i of "kavya") {
//     console.log(i);
    
// }

const map=new Map()
map.set(1,"a")
map.set(2,"b")
map.set(3,"c") 

// console.log(map);

// for(let i=1;i<=map.size;i++){
//     console.log(map.get(i));
    
// }

for (const [k,v] of map) {
    console.log(k,"=>",v);
}

