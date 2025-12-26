// let data={ name: "kavya",
//         age:20,
//         gmail:"kavya@mail.com",
//         student:true,
//         "full name": "kavya gupta"
//      }

// console.log(data.name);
// console.log(data["age"]);
// console.log(data.full name)               //error
// console.log(data["full name"]);
 
let mySym=Symbol("key")
let d1={
        name:"kavya",
        [mySym]:"key1"
}
console.log(d1[mySym])






