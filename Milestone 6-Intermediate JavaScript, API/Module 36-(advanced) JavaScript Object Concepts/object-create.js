// Different way to Create Object

// 1. using object literal
const student = { name: "Sakib AL Hasan", job: "cricketer" };

// 2. object constructor
const person=new Object();
// console.log(person);

// 3. 
// const human=Object.create(null);
// console.log(human);
const human=Object.create(student);
// console.log(human.job);

class People{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
}

// 4. class
const peop=new People('Hamid Hosen',23);
// console.log(peop);

// function=> syntactical Sugar
function Manus(names){
    this.names=names;
}

// 5. function
const man=new Manus('Hamid Hosen')
console.log(man);
console.log(man.names);