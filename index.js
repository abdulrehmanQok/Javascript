//functions*********************************************************
// function fun(name){
//     console.log('Hello, '+name+'!');
// }
// fun("abdulrehman");

// function fun(a,b){
//     // console.log('Hello, World!');
//     let c= a+b;
//   console.log(c);
// }
// fun(5,10);
// let arr=[1,2,3,4,5]
// let fun=function(){
//     for(let i=0;i<arr.length;i++){
//         console.log(arr[i]);
//     }
// }
// fun();
// let arr=[1,2,3,4,5];
// let arr2=[6,7,8,9,10]
// function fun(arr){
//     for(let i=0;i<arr.length;i++){
//         console.log(arr[i]+5);
//     }
// }
// fun(arr);
// fun (arr2);
// let abc=()=>{
//     console.log('Hello, World!');
// }
// abc();
// function login(){
//     console.log('login successfull');
// }
let arr=[1,2,3,4,5,6,7,8,9,10];
function fun(arr){
    setTimeout(()=>{
        for(let i=0;i<arr.length;i++){
            console.log(arr[i]);
        }
    },5000)
}
fun(arr);
// function register(){
     // console.log('register successfull');
//     setTimeout(()=>{
//         console.log('register successfull after 3 seconds'),
//         register()
//       },3000)
// }

              //callback****************************************************************


// function logout(){
//     console.log('logout successfull');
// }
// logout();
// register();
// login();
// function login(callback){
//     setTimeout(()=>{
//         console.log('login successfull');
//         callback();

//     },5000)  
// }
//  function register(callback){
//     setTimeout(()=>{
//         console.log('register successfull');
//         callback();
//     },5000)
//  }
//  function logout(callback){
//     setTimeout(()=>{
//         console.log('logout successfull');
//         callback();
//     },5000)
//  }
//  login(()=>{
//     register(()=>{
//     });
//  });
// function login(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             return reject("error while executing function");

//         },5000)
//     })
// }

// function register(){
//     setTimeout(() => {
//         console.log('register successfull');

//     }, 8000)
// }

// function logout(){
//     setTimeout(()=>{
//         console.log('logout successfull');

//     },10000)
// }
// login().then(register).then(logout).catch((error)=>{
//     console.log("error",error);

// })
// fetch("https://fakestoreapi.com/products").then((response)=>response.json()).then((data)=>console.log(data)).catch((error)=>console.log("error",error));



//map methid******************************
// let arr=[22,33,44,5,66,7,8];
// arr.map((x)=>{
//     console.log(x*2);

// })