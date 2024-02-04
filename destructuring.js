
//Destructuring array
let name='vinu', domain='lamp', branch='siruseri';
getobjProp={name,domain,branch};
console.log(getobjProp);

var list =[ 1,2,3,4,5 ];
var [a,b,c,d,e]=list;
console.log(a,e);

//swapping
let [k,l]=[44,11];
[k,l]=[l,k];
console.log([k,l]);

//Destructuring objects in shorthand
const obj={
    c:"cat",
    d:"doll"
};
var {c,d}=obj;
console.log(c,d);


var {c:getC, d:getD} =obj;
console.log(getD);

//Destructuring objects in deep 

// function getNames(Surname){
 
//     console.log(Surname);
// }

// var fullName={name:{firstName:'Vinu',Lname:'dharshini',Surname:'C S'}};
// var {name:{firstName,Lname,Surname}} = fullName;
// getNames(Surname);


function getValues(dest){
    
   return dest;
}
var destruct={name:{firstName:'vinu',Lname:'dharshini'},native:'Erode'};
var {name:{firstName:fname,Lname:lname},native:city}=getValues(destruct);
console.log(getValues(destruct));




//parameter matching 
function getNumbers(num1,num2){
    console.log(num1,num2);
}
function getObj({name:a,id:b}){
    console.log(a,b);
}

const output1=getNumbers(23,76);
const output2=getObj({name:'sona',id:23});


//
var arr=[1,2,3];
var [a=3,b=7,c=4,d=9]=arr;
console.log(a,b,c,d);