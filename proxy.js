const target={
    message:'This is the target message'
};
const handler={
    get:(target,value)=>{
        console.log(`This is to get target object message "${value}"`);
        return target[value];
    } 
}
const state=new Proxy(target,handler);
console.log(state.message);


const target1={
     message : 'Hi Aspire'
}
const handler1={};
                                                                           

const result = new Proxy(target1,handler1);
console.log(result.message);




const details={
    firstName:'Tina',
    lastName:'Thomas',
    get fullName(){
        return this.firstName+ ' ' +this.lastName;
    }
}
const handler2={
    
    get:(detail,value)=>{
        console.log(`The employee ${value}`);
        return detail[value];
    },

}
const empDetail=new Proxy(details,handler2);
console.log(empDetail.firstName);
console.log(empDetail.lastName);
console.log(empDetail.fullName)



///reflect

const user={a:23};

console.log (Reflect.defineProperty(user,'a',{value:23}));
console.log(user);


const random={ fruit:'apple', veg:'Beans'};
Reflect.deleteProperty(random,'fruit');
console.log(random);



function getCount(arr){
    
  Reflect.deleteProperty(arr,'arr[2]');
  arrCount--;
  return (`After deleting count ${arrCount}`);
  

}
const arr=[1,2,3,4,5];
arrCount=arr.length;
console.log(`Actual count ${arrCount}`);
const deleting=getCount(arr);
console.log(deleting);


console.log(Reflect.get(arr,4));

console.log(Reflect.get(['vinu','aspire','system'],2));

console.log(Reflect.ownKeys([]));

console.log(Reflect.ownKeys([87,90]));


const word={
    present:'Web',
    domain:'backend'
}
console.log(Reflect.ownKeys(word));


const sent={
    delay:'2mins',
}

console.log(Reflect.get(sent,'delay'));
console.log(Reflect.ownKeys(sent));

const num=[1,2,4,9];
Reflect.set(num,2,765);
console.log(num);

const words=['apple','lime','lime'];
Reflect.set(words,2,'orange');
console.log(words);

const details1={
    firstName:'Tina',
    lastName:'Thomas',
    fullName:''
}
Reflect.set(details1,'fullName','details.firstName'+'details.lastName');
console.log(details1);