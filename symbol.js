if(Symbol(1)===Symbol(1)){
    console.log(true);
}
else{
    console.log(false);
}

const value=Symbol();
console.log(typeof value);

//symbol ignores jsonstringify
const id1=Symbol();
const id2=Symbol();
const obj={}
obj[id1]=123;
obj[id2]=890;
obj.value=988; 
console.log(JSON.stringify(obj));

const x= Symbol('hello');
console.log(x);
console.log(x.description);


if(Symbol.for('hello')===Symbol.for('hello')){
    console.log(true);
}
else{
    console.log(false);}



const sym = Symbol.for('Aspire Systems');
console.log(Symbol.keyFor(sym));
console.log(typeof sym);


const value1=Symbol();
const value2=Symbol();
const develop ={}
develop[value1]='Software';
develop[value2]='Hardware';
console.log(Object.keys(develop));
console.log(Object.values(develop));
console.log(Object.getOwnPropertySymbols(develop));
console.log(Object.getOwnPropertyNames(develop));

