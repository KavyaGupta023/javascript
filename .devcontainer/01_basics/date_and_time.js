const date=new Date()                              //date ka typeof will return 'object'
// console.log(date);
// console.log(date.toString());
// console.log(date.toLocaleString());
// console.log(date.toDateString());
// const d1=new Date(2027,5,23)
// console.log(d1.toDateString());
// const t=Date.now();
// console.log(t);

console.log(date.toLocaleString('default',{
    weekday: "long",
   
}));

