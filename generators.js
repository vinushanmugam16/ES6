// let program = function* (){
//     let num1=33;
//     for(let i=1;i<num1;i++){
//         let output=(i%2);
//         if(output==0){
//             yield i;
//                 }
//         else{
//             yield 'odd num';
//         }
//         console.log('thankyou');   
//     }
// }
// let result=program();
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());
// let num1=33;
// for(let i=0;i<num1;i++){
//     console.log(result.next());
// }



//async await 
// function message(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve('Resolve Timed 2000 to display'),2000);
//         // setTimeout(()=>reject('Rejected timed 1000 to display'),1000)
//     })
// }
// function displayMessage(){
//     message().then((message)=>console.log(message))
//     .catch((err)=>console.error(err));
//     console.log('Hello , Welcome');
// }
// async function start(){
//     const result=await message();
//     console.log(result);
//     console.log('thank you');
// }
// // displayMessage();
// start();


function details(value){
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>resolve(value),1000);
        // setTimeout(()=>reject('rejected'),1000);
    })
}
async function* getDetails(){
    yield details(234);
    yield details(453);
}
async function resultIn(){
    let wait =await getDetails();
    return wait.next();
}
resultIn().then((message)=>console.log(message))
.catch((err)=>console.error(err));



// function details(value){
//         return new Promise((resolve,reject)=>
//         {
//             setTimeout(()=>resolve(value),1000);
//             // setTimeout(()=>reject('rejected'),1000);
//         })
//     }
// async function* color(){
//     yield details ('red');
//     yield details ('orange');
//     yield details ('yellow');
// }
// async function getColors(){
//     const output =await color();
//     for await(let i of color()){
//         console.log( i);
//     }
   
// }
// getColors().catch((err)=>console.error(err));



// function displayValues(time,value){
//     return new Promise((resolve)=>{
//         setTimeout(()=>resolve(value),time);
//     });
// }
// async function* getValues(){
//     console.log('Welcome');
//     yield displayValues(1000,32);
//     yield displayValues(5000,12);
//     yield displayValues(3000,40);
    
// }
// async function values(){
//     for await (let i of getValues()){
//         console.log('value:',i);
//         console.log('Thankyou')
//     }
// }
// values().catch((err)=>console.error(err));




//generator methods with objects and class
// class School {
//     *generator(){
//     yield'vinu';
//     yield 345;
//     yield 'saratha matriculation school';
// }};
// const temp =new School();
// const temp2=temp.generator();
// console.log(temp2.next());
// console.log(temp2.next());
// console.log(temp2.next());
// console.log(temp2.next());



// class Adding{
//     num1;num2;
//     constructor(num1,num2){
//         this.num1=num1;
//         this.num2=num2;
//     }
//     *addNumbers(){
//         let sum=this.num1+this.num2;
//         yield sum;
//     }
// }
// const addition=new Adding(20,30);
// const number=addition.addNumbers();
// console.log(number.next());


// class Numbers{
//     *getNumbers(passArray){
//         for(let i of passArray){
//             yield i;
    
//         }
//     }
// }
// const passArray=[2,4,6,8,9];
// const num=new Numbers();
// const setNum=num.getNumbers(passArray);
// // console.log(setNum.next());
// // console.log(setNum.next());
// // console.log(setNum.next());
// for(let i of passArray){
//         console.log(setNum.next());
// }


// //objects

// // const car={
// //     carName:'BMW',
// //     carColor:'black',
// //     carYear:2015,
// //     *gettingProperties(){
// //         yield this.carName;
// //         yield this.carColor;
// //     }
// // }
// // const result=car.gettingProperties();
// // console.log(result.next());
// // console.log(result.next());
// // console.log(result.next());
// // console.log(result.next());


// const car={
//         carName:['BMW','Ford'],
//         *gettingProperties(){
//            let mapping = this.carName.map((value)=>(`${value} branded`));
//            yield mapping;
//         }
// }
//     const result=car.gettingProperties();
//     console.log(result.next());
//     console.log(result.next());




