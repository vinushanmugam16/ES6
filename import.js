import {source1,source2} from './export.js'
console.log(source1,'\n',source2);

import {name,value,} from './export.js' 
console.log(`${name}-${value}`);

import {person1} from './export.js'
console.log(person1);


import {details} from './export.js'
console.log(details.fname);
console.log(details);




import {number as x} from './export.js'
console.log(x);


// import {number1} from './export.js'
// console.log(number1());

import {Greet} from './export.js'
const invite=new Greet('Emi','Good Morning');
console.log(invite.greeting());


import {Increment} from './export.js'
const credit=new Increment('Rocky',15000);
console.log(credit.salaryincrement());



import {words} from './export.js'
const state=words();
console.log(state.next());
console.log(state.next());
console.log(state.next());
console.log(state.next());


import {multiply} from './export.js'
const res=multiply();
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());


console.log(...res);        //using spread operator

for(let i of res){
    console.log(i);        
}


//////default
import merging from './export.js'
console.log(merging('Vinu','dharshini'));
console.log(merging('Good','afternoon'));


import {Operations} from './export.js'
const sum=new Operations(32,10);
console.log(sum.getOperations());





////////

import {merge} from './export.js'
console.log(merge('Aspire','Systems'));


import {empName} from './export.js'
console.log(empName);


import {detail} from './export.js'
console.log(detail);












// export {c} from './export.js'
// console.log(c);



// console.log(details(numbers).next());



// to import all (*) 
// import * as exp from './export.js'
// console.log();






















/////////aggregation

// import * as adding from './export.js'
// console.log(adding.addnum);

// import {default as source}from './export.js'
// console.log(source());