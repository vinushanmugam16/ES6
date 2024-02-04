// function employee(name,id,place,mobileNum){
//     return new Promise((resolve,reject)=>{
//         let pass=true;
//         if(pass){
//         setTimeout(()=>resolve(`${name} has employed and their details are id -${id},from ${place}and mobile number-${mobileNum}`,1000));
//         }
//         else{
//             setTimeout(()=>reject(`${name} has not employed`));
//         }

//     })
// }
// employee('Henna','INT234','chennai',9876543210).then((message)=>console.log(message))
// .catch((err)=>console.error(err));





//promise combinations

// let statement1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve('Welcome To Aspire Systems,Always Attention'),3000);
// });
// let statement2=new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve('Hi Aspirians'),2000);
// });
// let statement3=new Promise((resolve,reject)=>{
//     setTimeout(()=>reject('Rejected'),1000);
// });
// Promise.all([statement1,statement2]).then((message)=>console.log(message))

// Promise.all([statement1,statement2,statement3])
// .catch((err)=>console.error(err));



let state1=new Promise((resolve,reject)=>{
    let testcase=false;
    if(testcase){
        setTimeout(()=>resolve('Testcases1 are passed'),1000);
    }
    else{
        setTimeout(()=>reject('Testcases1 are not passed'),1000);
    } 
})
let state2=new Promise((resolve,reject)=>{
    let testcase=true;
    if(testcase){
        setTimeout(()=>resolve('Testcases2 are passed'),2000);
    }
    else{
        setTimeout(()=>reject('Testcases2 are not passed'),2000);
    } 
})
let state3=new Promise((resolve,reject)=>{
    let testcase=true;
    if(testcase){
        setTimeout(()=>resolve('Testcases3 are passed'),1000);
    }
    else{
        setTimeout(()=>reject('Testcases3 are not passed'),1000);
    } 
})
// Promise.all([state1,state2,state3]).then((message)=>console.log(message))
// .catch((err)=>console.error(err));
// Promise.allSettled([state1,state2,state3]).then((message)=>console.log(message))
// .catch((err)=>console.error(err));
// Promise.any([state1,state2,state3]).then((message)=>console.log(message))
// .catch((err)=>console.error(err));
Promise.race([state1,state2,state3]).then((message)=>console.log(message))
.catch((err)=>console.error(err));