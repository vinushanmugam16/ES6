class Details{
    #name;
    constructor(name){
        this.#name=name;
    }
    get newname(){
        return this.#name;
    }
}
const person =new Details('Vinu');
console.log(person.newname);



class Employee{
    empName='Tina'; 
    set naming(empName){
        this.empName= empName;
    }
    get naming(){
        return this.empName;
    }
}
const result =new Employee();
console.log(result.naming);



class Student{
    mark=87;
    set scoring(mark){
        this.mark= mark;
    }
    get scoring(){
        return this.mark;
    }
}
const school=new Student();
// console.log(school.scoring);
school.scoring=95;
console.log(school.scoring);






    let fruits = [
        {
            name: 'apple',
            price: 20
        },
        {
            name: 'orange',
            price: 30
        },
        {
            name: 'mango',
            price: 40
        },
        {
            name: 'banana',
            price: 20
        }
    ]
     


       let output = fruits.filter((value)=>value.price>20).map(value=>value.name);
       console.log(output);