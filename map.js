const source=new Map([['Rice','1kg'],
['Oil','1litre'],
['Powder','50gm']]);
console.log(source);


source.set(['Chilli'],['100gm']);
console.log(source);


console.log(source.get('Oil'));
console.log(source.has('Powder'));



const state2=new Map(Object.entries({
    green:'beans',
    orange:'carrot'
}));
console.log(state2);

state2.set('red', 'chilli').set('leaf','mint');
console.log(state2);

console.log(state2.size);

console.log(state2.has('orange'));

state2.delete('orange');   
console.log(state2);



const source2=new Map();
source2.set('fruit','orange');
source2.set('veg','Bottleguard');
source2.set('juice','orange');
source2.set('fruit','guava');
source2.set('spice','ginger');

console.log(source2);

console.log(source2.size);


console.log(source2.get('veg'));
console.log(source2.has('juice'));

source2.delete('spice');
console.log(source2);

source2.clear();
console.log(source2);
