interface Student{
    studName:String,
    rollNum:Number;
}
const member:Student={
    studName:'Bava',
    rollNum:301
}
console.log(member);



interface Shapes{
    square:string;
    rectangle:string;
    getSides():string;
}
class Sides{
    square:string;
    rectangle:string;  
    constructor(square,rectangle){
        this.square=square;
        this.rectangle=rectangle;
    }
    getSides(){
        return (`Square: ${this.square}, Rectangle: ${this.rectangle}`);
    }
}
const shape: Shapes =new Sides('4 sides equal',"2 sides equal");
console.log(shape.getSides());


// interface Job{
//     whiteJob:string;
//     goldJob:string;
//     count:number;
//     counting():string;
// }
// class CholarJobs{
//     whiteJob:string;
//     goldJob:string;
//     count:number;
//     constructor(whiteJob,goldJob){
//         this.whiteJob=whiteJob;
//         this.goldJob=goldJob;
//     }
//     set counting(count){
//         this.count=2;
//     }
//     get counting(){
//         return (`${this.whiteJob}, ${this.goldJob}, Total = ${this.count}`);
//     }
// }
// const jobs: Job=new CholarJobs('Office Workers','Doctors');
// console.log(jobs.counting);             /////doubt


//arrayofobject
interface Food{
    breakFast:string;
    lunch:string;
}
const options=[
    {
        breakFast:'Idly',
        lunch:'Sambar Rice'
    },
    {
        breakFast:'Dosa',
        lunch:'Egg Curry'
    },
    {
        breakFast: 'Poori',
        lunch:'Ghee Rice'
    }
]

console.log(options.map(value=>value.breakFast));



let num:number=23;
num=40;
console.log(num);


let word:string;
word='aspire';
console.log(word);


//implicit

// var value=67;
// value='Higher';                ///Implicit type --- value assigned is number so,ts automatically determines type as number so we can't re-assign a string to it
// console.log(value);           //error


let arr=[1,4,'five',true];
console.log(arr);


///explicit unions

let source:(string|boolean);
source='Rocky';
source=true;


function getLength(obj:number[]){
    return obj.length;
}
console.log(getLength([23,2,9]));


function getType(word:string | string[]){
    if(typeof word === 'string'){
        return word;
    }
    else{
        return [word];
    }
}
console.log(getType(['Aspire', 'Systems']))


///generic

function multiply(num1:number,num2:number,num3:number){
     return num1*num2*num3;
}
const digits=multiply(2,4,6);
console.log(digits);


function merge(age:any,name:any){
    return (`${name} is ${age} years old`);           ///any ----basic type
}
const words=merge(32,'Daniel');
console.log(words);


function objects<T>(fruit:T,price:T){
    return (`In market ${fruit}\'s price is ${price}`);
}
console.log(objects<any>('mango',45));


interface Person{
    firstName:string;
    lastName:string;
}
function fullName(user:Person){
    return user.firstName+user.lastName;
}

const user={ firstName:'Siva', lastName:'Sathya'}
console.log(fullName(user));