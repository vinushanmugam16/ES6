const numbers=new Set();
numbers.add(1);
numbers.add(9);
numbers.add(6);
numbers.add(1);
numbers.add(4);
console.log(numbers);
console.log(numbers.size);

for(let i of numbers){
    console.log(i);
}


const flowers=['lily','rose','hibiscus','lotus','lily','rose'];
const nature=new Set(flowers);
console.log(nature);


// const example=new Set();
// const detail={
//     name:'Rita',
//     place:'chennai',
//     native:'trichy'
// }
// example.add(detail);
// // console.log(example);
// console.log(example.has('name: Rita'));
// for(let x of example.values()){
//     console.log(x);
// }



const flower=['lily','rose','hibiscus','lotus','lily','rose'];
const state=new Set(flower);
console.log(state.has('lily'));

for(let x of state){
    console.log(x);
}

state.delete('hibiscus');
console.log(state);

state.clear();
console.log(state);




const state2=new Set(Object.entries({
    green:'beans',
    orange:'carrot'
}));

console.log(state2);


console.log(state2.delete('beans')); 

state2.clear();
console.log(state2);

