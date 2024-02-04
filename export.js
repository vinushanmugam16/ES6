export let source1,source2;
source1='Web Technology';
source2='Full-Stack '

export const value=98.3456;
export const name='Vinu';

let person1='thava', person2 ='dev';
export {person1,person2}

//object
export let details={
    firstName:'Vinu',
    lastName:'dharshini',
    fullName:'',
    get fname(){
      return this.fullName=this.firstName+this.lastName;;
    },
}

export {number};
let number=4;



//class
export class Greet{
    constructor(name,msg){
        this.name=name;
        this.message=msg;
    }
    greeting(){
        return (`Hi ${this.name}, ${this.message}`);
    }
}

class Employee{
    constructor(name,salary){
        this.empName=name;
        this.salary=salary;
    }
}
export class Increment extends Employee{
    constructor(name,salary){
        super(name,salary);
    }
    salaryincrement(){
        let res;
        if(super.salary >= 10000 ){
            res=super.salary+1500;
        }
        else{
            res=super.salary;
        }
        return res;
    }
}




//generator
export function* words(){
    yield 'One';
    yield 'Two';
    yield 'Three';
}


export function* multiply(){
    let num=10,product;
    for(let i=0;i<=num;i++){
        product = i*num;
        yield product; 
    }
}




//export default 
export default function merging(word1,word2){
        
        return word1+ ' '+word2;
}


export class Operations{
    constructor(num1,num2){
        this.num1=num1;
        this.num2=num2
    }
    getOperations(){
        return this.num1*this.num2;
    }
}


// export let c=2+3;



///////////aggregations
export * from "./module.js"

export {default as source} from './module.js'

////test
export function merge(word1,word2){  
    return word1+ ' '+word2;
}


export let empName='Vinu';

export const detail={
        empName:'Elsa',
        empId:123,
        empPlace:'Siruseri'
}