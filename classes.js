const student={
    roll_no:301,
    total_girls:13,
    total_boys:15,
    total_Stud:function(){
        return this.total_girls + this.total_boys;
    }
}
console.log(student.total_Stud());



//class definition

class Values{
    constructor(val,i,j){
        this.value=val;
        this.move(i,j);
    }
    move(i,j){
        this.num1=i;
        this.num2=j;
    }
    getSumValues(value,num1,num2){
        return value+(num1*num2);
    }
};
const givenValues=new Values(10,10,12);
console.log(givenValues.getSumValues(10,10,12));


//class inheritance
class employee{
    constructor(name,id){
        this.name=name;
        this.id=id;
    }
};
class getEmployeeDetails extends employee{
    constructor(name,id,place){
        super(name,id);
        this.place=place;
    }
    toShareDetails(name,id,place){
        return (`${name}-${id} from ${place}`);
    }
}

const details=new getEmployeeDetails('Lila',654,'chennai');
console.log(details.toShareDetails(name,id,place));
