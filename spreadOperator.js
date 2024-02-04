function Multiply(a,b=9,c=5){
    if (a,b,c>=3){
        console.log(a*b*c);
    }
    else{
        console.log(a,b,c);
    }
}
Multiply(3);



const values=[1,23,44,11,7];
console.log(...values);

const val1=[1,2,3];
const val2=[0,2,6];
console.log(...val1,...val2);



let val=true;
const fruits={
    apple :80,
    orange :45,
    ...val?
    {Grape:30}: false, 
}
console.log(fruits);


//with spread operator
function Operation(a,b,...args){ 

    return (`${a},${b},${args}`)
}

const values1= Operation(23,65,98,2,90);
console.log(values1);

//without spread Operator
function Operate(a,b,c,d,e){

    return (`${a},${b},${c},${d},${e}`)
}

const values2= Operate(23,65,98,2,90);
console.log(values2);

