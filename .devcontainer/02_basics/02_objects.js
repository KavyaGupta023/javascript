// let data={ name: "kavya",
//         age:20,
//         gmail:"kavya@mail.com",
//         student:true,
//         "full name": "kavya gupta"
//      }

// data.student=false                      //overwriting
// data.gmail="kavyagupta@gmail.com"         

// console.log(data.student);
// console.log(data["gmail"]);
// console.log(data.full name)               //error
// console.log(data["full name"]);


// data.greeting=function(){
//         console.log("hey beautiful")
// }   
// console.log(data.greeting())

// data.greetingTwo=function(){
//         console.log(`the name is ${this.name} and mail is ${this.gmail}`)
// }
// console.log(data.greetingTwo())
 

// let mySym=Symbol("key")
// let d1={
//         name:"kavya",
//         [mySym]:"key1"
// }
// console.log(d1[mySym])

//***************************************************************************//

// const data=new Object()
// data.id="123abc"
// data.name="Sam"

// let data={
//         userId:"123abc",
//         extraDetails:{                              //nested object
//                 fullName:{                          //another nested object
//                         firstName:"kavya",
//                         lastName:"gupta"
//                 }
//         }
// }
// console.log(data.extraDetails.fullName?.middleName?.id);

const obj1= {1:"a" , 2:"b"}
const obj2= {3:"c" , 4:"d"}
const obj3= Object.assign({},obj1,obj2)
console.log(obj3);




