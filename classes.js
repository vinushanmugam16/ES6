// class BackgroundColor{
//     constructor(color1,color2){
//         this.color1=color1;
//         this.color2=color2;
//     }
// }
// class ValidColor extends BackgroundColor{
//     constructor(color1,color2,...color){
//         super(color1,color2,);
//         this.color=color;
//     }
//     getColors(color1,color2,...color){
//         return (`${color1} and ${color2} are valid colors for background ,other than ${color}`);
//     }
// }
// var colour=new ValidColor('White','Red','pink','Teal','Brown');
// console.log(colour.getColors('White','Red','pink','Teal','Brown'));


// //base class 

// class Students{
//     constructor(rolln,name,age,...score){
//         this.rolln=rolln;
//         this.name=name;
//         this.age=age;
//         this.score=score;
//     }
//     getPercentage(mark){
//         this.mark=mark;
//         let percent=mark/5;
//         return Math.round(percent);
//     } 
// }
// class Grade extends Students{
//     constructor(rolln,name,age,...score){
//         super(rolln,age,name,...score);
//     }
//     getGrade(grade,mark){
//         this.grade=grade;
//         this.mark=super.getPercentage(mark);
//         if(mark>95){
//             return grade;
//         }
//         else{
//             console.log(`${this.mark}`);
//             return 'B';
//         }
//     }
// }
// const total = new Grade(102,'Yuvi',15,483,'A+');
// console.log(total.getPercentage(490));
// console.log(total.getGrade('A+'));


// //Static methods
// class Operation{
//     static value1=22;
//     static value2=65;
//     static sum(){
//         return this.value1+this.value2;
//     }
// }
// console.log(Operation.sum());


class AddingWords{
    static word='Vinu'
    static getword(){
        return this.word;
    }
}
class Sentence extends AddingWords{
    static getSentence(){
        return (`Hi, ${super.word}`);
    }
}
console.log(Sentence.getSentence());


// class DetailForm{
    
//    static toGetDetails(details){
//        return JSON.stringify(details);
//    }
// }
// const details={ name: 'Lisa',id:234,branch:'siruseri'};
// console.log(DetailForm.toGetDetails(details));


// //getter and setter methods

// class Cars{
//     constructor(color,name){
//         this.color=color;
//         this.Name = name;
//     }
//     get details(){
//         return `${this.Name} , ${this.color}`;
//     }
// }
// const car=new Cars('black','BMW');
// console.log(car.details);


// const numbers={
//     addition:[1,3,4],
//     get adding(){
//         return numbers.addition.map((item)=>(item+item));
//     }
// }
// console.log(numbers.adding);


// const shapes={
//     rectangle:'2 sides are equal',
//     square : '4 sides are equal',
//     circle:'nothing',
//     set circ(value){
//         this.circle=value;
//     }
// };
// shapes.value='It is round-shaped';
// console.log(shapes.circ);


// class Shapes{
//     rect;sqr;
//     constructor(rect,sqr){
//         this.rectangle=rect;
//         this.square=sqr;
//     }
//     set rectangle(rect){
//        this.rect='2sides equal';
//     }
//     get rectangle(){
//         return this.rect;
//     }
// }
// const shape=new Shapes();
// console.log(shape.rectangle);




// //inhertitance la methods with arrow,this

class Product{
    constructor(num1,num2,num3){
        this.num1=num1;
        this.num2=num2;
        this.num3=num3;
    }
}
class ProductNumbers extends Product{
    constructor(num1,num2,num3){
        super(num1,num2,num3);
       
    }
    togetResult=()=>{
       return (this.num1)*(this.num2)*(this.num3);
         
    }
}
const result = new ProductNumbers(40,21,13);
console.log(result.togetResult());


// //abstract class 
//  class Details{
//    name;
//         constructor(name){
//             this.name=name;
//         }
// }
// class Employee extends Details{
//     constructor(name,place){
//         super(name);
//         this.place=place;
//     }
//     getdetails(){
//         return (`${name} from ${place}`)
//     }
// }
// const output=new Employee('Kumar','Chennai');
// console.log(output.getdetails());




// //spread operator ---whereto use ,, arrray of objects,map 

const employee=[
    {
        emp_name:'Lisa',
        emp_id:567,
        emp_domain:'Web app'
    },
    {
        emp_name:'Elsa',
        emp_id:566,
        emp_domain:'Mobile app'
    },
    {
        emp_name:'Pony',
        emp_id:569,
        emp_domain:'DataAnalyst'
    }
];
// console.log(...employee);
console.log(employee.map((employee)=>(`${employee.emp_name} , ${employee.emp_id}`)));
console.log(employee.map((item)=>{return {...item}}));