const state=new WeakSet();
const example={};
state.add(example);
console.log(state);
console.log(state.has(example));



const numbers=new WeakSet();
const person={name:'Niha'};
numbers.add(person);

console.log(numbers);
console.log(numbers.has(person));

console.log(numbers.delete(person));


