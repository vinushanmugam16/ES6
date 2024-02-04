//assigning property to object

var source ={one:1,two:2,twenty:20};
var source2={name:'tina',place:'chennai'};
const result=Object.assign(source,source2);
console.log(result);

let num1={a:'apple',b:'pine'};
let num2={b:'grape',c:'lime'};
const output=Object.assign(num1,num2);
console.log(output);
console.log(output===num1);

//finding an array element
const values=[2,3,9,7,4];
console.log(values.find(i=>i>3 && i<9));

const words=['apple','orange','lime','grape'];
console.log(words.find((i)=> i.length>4 ));


console.log(values.findIndex((i)=>i>7));
console.log(words.findIndex((i)=>i==='grape'));

//repeating strings
const word=' Greetings. ';
console.log(`Hi all ,${word.repeat(2)}`);
console.log(`Hi , ${word.repeat(3.5)}`);
console.log(`${word.repeat(1)}of the day`);
console.log(`${word.repeat(0)}of the day`);

//string searching
const line='Hi all, Greetings of the day';
console.log(line.includes('all'));
console.log(line.includes('Hi',0));
console.log(line.startsWith('H'));
console.log(line.startsWith('a',3));
console.log(line.endsWith('s',17));
console.log(line.endsWith('y'));

//finite & NaN

console.log(isFinite(90));
if(isFinite(0)===isFinite(43)){
    console.log('Is finite');
}
else{
    console.log('it is not finite');
}

console.log(isFinite(NaN));
console.log(isFinite(-Infinity));
console.log(isFinite(-345));


console.log(Number.isFinite(40/3));
console.log(Number.isFinite(3/4));
console.log(Number.isFinite(NaN));


const num=-9;
console.log(typeof num);

console.log(Number.isNaN(num));
console.log(Number.isNaN(NaN));
if(isNaN!==isNaN){
    console.log('Its not same');
}
else if(isNaN===isNaN){
    console.log('its same');
}


//safety checking

console.log(Number.isSafeInteger(34));
console.log(Number.isSafeInteger(2**53));
console.log(Number.isSafeInteger(2**53 -1));
console.log(Number.isSafeInteger(NaN));
console.log(Number.isSafeInteger(432.9));
console.log(Number.isSafeInteger(40.0));


//number epsilon
let value=Number.EPSILON;
console.log(value);
let a=0.1,b=0.3,c;
c=a+b;
console.log(c);
// if(a === c){
//     console.log('Epsilon num');
// }
// else{
//     console.log('Not a epsilon');
// }
if(0<value){
    console.log('Epsilon num');
}

let difference=1 - 0.9;
console.log(difference);
if(difference < 1){
    console.log('true ,epsilon');
}

console.log(Math.abs(difference));


//number truncate

console.log(Math.trunc(-23.9));
console.log(Math.trunc(-0.7));
console.log(Math.trunc(234.7));
console.log(Math.trunc(-Infinity));


//math sign

console.log(Math.sign(-98.8));
console.log(Math.sign(-0));
console.log(Math.sign(76));
console.log(Math.sign(30.0));