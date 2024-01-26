//& Classes

/* class Employee {
    empCode: number;
    empName: string;

    constructor (code:number, name:string){
        this.empCode = code;
        this.empName = name;
    }
}


let emp1 = new Employee(1 ,'Mark')
// let emp2 = new Employee('Mark',2)
let emp3 = new Employee(2 ,'Anthony')

console.log(emp3.empCode) */


//& Inheritance

/* class Person {
    name: string;

    constructor(name: string){
        this.name = name
    }

    greet():void{
        console.log(`Merhaba ${this.name}`)
    }
}

class Employee extends Person {
    emplyCode:number;

    constructor(emplyCode: number, name:string){
        super(name);
        this.emplyCode = emplyCode;
    }
}

let person1 = new Person('Mark')

console.log(person1.name)

let emp4 = new Employee(100, 'Anthony')

console.log(emp4.name)

person1.greet()
emp4.greet() */

//& Abstract Classes

/* abstract class Vehicle{

    year:number;
    color:string;

    constructor(year: number, color:string){
        this.year = year;
        this.color = color;
    }

    startEngine():void{
        console.log(`Motor Calisti`)
    }

    abstract stopEngine(): void;
}

//let Vehicle1 = new Vehicle(1990, 'Siyah')

class Car extends Vehicle{
    model: string;
    numOfDoors: number;

    constructor(year: number, color:string, model:string,numOfDoors:number ){
        super(year, color);
        this.model = model;
        this.numOfDoors = numOfDoors
    }

    stopEngine(): void {
        console.log('Motor Durduruldu')
    }
}

let car1 = new Car (1990, 'Siyah', 'Fiat', 4)

console.log(car1)

car1.startEngine()
car1.stopEngine() */


//& Class Data Modifiers

//? Private

/* class Student {
    private studCode: number;
    public studName: string;

    constructor(code: number, name: string) {
        this.studCode = code;
        this.studName = name;
    }

    displayCode():void{
        console.log(this.studCode)
    }

    setCode(newCode:number):void{
       if(newCode > 0 && newCode <=2000){

           this.studCode = newCode
       }else{
        console.log('Hatalı giris yaptınız')
       }
       
       
    }

}

const Mathias = new Student(1576, 'Mathias')


console.log(Mathias.studName)

Mathias.setCode(2000)

Mathias.displayCode() */

//? protected

/* class Student {  
    private studCode: number;  
    protected studName: string; 

    constructor(code: number, name: string){  
        this.studCode = code;  
        this.studName = name;  
        }  
        public display() {
            return (`My unique code: ${this.studCode}, my name is : ${this.studName}.`);
        }

        protected getCode(){
            return this.studCode
        }
} 

class Person extends Student {  
    public department: string;  
  
    constructor(code: number, name: string, department: string) {  
        super(code, name);  
        this.department = department;  
    }  
    public getStudCode() {  
        return (`My unique code: ${this.getCode()}, my name is: ${this.studName}.`)
    }  
}  

let person1: Person = new Person(1, "Mark", "FS");  

console.log(person1.getStudCode())
console.log(person1.display()) */

//? Read only

/* class Employee {
    empName: string;
    readonly empCode: number;
  
    constructor(empCode: number, name: string) {
      this.empCode = empCode;
      this.empName = name
    }
  }
  
  let emp = new Employee(100, "John")
  emp.empCode = 20 // Compiler Error */

//? Static

/*   class Circle {
    static pi: number = 3.14;
  
    static calcArea(radius:number) {
      return this.pi * radius * radius
    }
}

console.log(Circle.pi)
console.log(Circle.calcArea(10)) */


//& Interfaces

interface Calendar {
    events: string[];
    addEvents(event: string): void;
}

class LMSCalender implements Calendar {
    constructor(public events: string[]) { }

    addEvents(event: string): void {
        this.events.push(event);
    }
}

const cohort15 = new LMSCalender(["HTML", "CSS", "JS"])

