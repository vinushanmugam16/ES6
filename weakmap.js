const state1=new WeakMap();
const stateobj1={};
const stateobj2={};
const stateobj3={};
state1.set(stateobj1,'positive');
state1.set(stateobj2,67);
state1.set(stateobj3,NaN);

console.log(state1.get((stateobj2)));
console.log(state1.get((stateobj3)));

console.log(state1.has(stateobj2));

state1.delete(stateobj2,67);
console.log(state1.get(stateobj2));

// console.log(state1);


let state2=new WeakMap();
let person={};
state2.set(person,'Lisa');
// person='Tina';
console.log(state2.get(person));



let fruit={name:'apple'};
// console.log(fruit);

fruit='';
console.log(fruit);

