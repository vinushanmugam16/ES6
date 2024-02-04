// const numbers=[1,4,32,5,5];
// const output=numbers.map((value)=>value%2);
// console.log(output);

// console.log(numbers.filter((value)=>value%2==0));


// var initialNum=0;
// const sumTotal=numbers.reduce((prevValue,currValue)=>prevValue+currValue+initialNum);
// console.log(sumTotal);




// const str='My computer has strucked';
// const str2=str.split(" ");
// str2.forEach(i => {
//     console.log(i);
// });

// const words=['one','two','three','four','five'];
// words.forEach((value)=>
// {
//     if(value.length<4){
//         console.log(value);
//     }
// })


// let x=9,y=8;
// const z=(x,y)=>(x+y);
// console.log(z(x,y));

//test
let person=[
    {
        person_id:123,
        firstName:"vinu",
        lastName:"dharshini"
    },
    {
        person_id: 128,
        firstName:"janu",
        lastName:"shree"
    },
    {
        person_id: 124,
        firstName:"sumi",
        lastName:"malar "
    }
]
function getRequired(person){
    let out=[];
        out=person.map((person)=>person.firstName + person.lastName);    //array map()
    return out;
}
const result=getRequired(person);
console.log(result);







// let person=[
//     {
//         person_id:123,
//         firstName:"vinu",
//         lastName:"dharshini"
//     },
//     {
//         person_id: 128,
//         firstName:"janu",
//         lastName:"shree"
//     },
//     {
//         person_id: 124,
//         firstName:"sumi",
//         lastName:"malar "
//     }
// ]

// function getRequired(person){
//     let output=[];
//         output =person.map((firstName,lastName)=>{                                             // array map(), arrow, this.
//            this.firstName+this.lastName});
//     return output;
// }

// const result=getRequired(person);
// console.log(result);




const cars=['BMW','Volvo','Ford','Tesla'];

const one=cars.map((ele)=>ele.cars);
console.log(one);