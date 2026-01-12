// const promiseOne=new Promise(function(resolve,reject){                                                 //creation of promise
//         //do any asyn task
//         //cryptogarphy,network,DB calls
//         setTimeout(function(){
//             console.log('async task is complete');
//             resolve();                                                       //  this resolve is a method jiski help se upar function mei jo resolve hai vo , aur `then` connect hue hai 
//         },1000)
// });             

// promiseOne.then(function(){
//     console.log("promise consumed")
// })                            //then ka relation is with resolve                    // consumption of promise 

// new Promise(function(resolve,reject){

//     setTimeout(function(){
//         console.log('async task 2 completed');
//         resolve();
//     },1000)
// }).then(function(){
//     console.log('promise consumed');
// })

// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:'kavya',email:'kavya@gmail.com'});            //this time we passed parameters in resolve funtion
//     },1000)
// })

// promiseThree.then(function(user){                          //receiving the parameters
//     console.log(user);
// })

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:'kavya',password:123})
        }
        else{
            reject('ERROR:went something wrong');
        }
        
    },1000)
})

// const nn=promiseFour.then( (user)=>{                  //this is not allowed !!!! means storing in `nn` is not allowed
//         console.log(user);
//         return user.username;
        
// })
// console.log(nn);

//then how this is done
//through chaining 

promiseFour.then( (user)=>{                  //this is not allowed !!!! means storing in `nn` is not allowed
        console.log(user);
        return user.username;
        
}).then( (username)=>{
    console.log(username);
})                           // iss vale then ko function mei vo value return hogi jo upar vale then se aayi hai

