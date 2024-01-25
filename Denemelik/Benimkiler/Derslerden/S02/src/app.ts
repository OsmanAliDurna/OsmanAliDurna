//& Classes

// class Employee {
//     empCode: number;
//     empName: string;

//     constructor(code: number, name: string) {
//         this.empCode = code;
//         this.empName = name;
//     }
// }

// let emp1 = new Employee(1, "Mark");
// // let emp2 = new Employee(1, 2);
// let emp3 = new Employee(2, "Anthony");

// console.log(emp3.empCode)

//& Inheritance

// class Person {
//     name: string;

//     constructor(name: string) {
//         this.name = name;
//     }

//     greet(): void {
//         console.log(`Merhaba ${this.name}`)
//     }
// }

// class Employee extends Person {
//     emplyCode: number;

//     constructor(emplyCode: number, name: string) {
//         super(name);
//         this.emplyCode = emplyCode;
//     }
// }

// let person1 = new Person("Mark");

// console.log(person1.name)

// let emp4 = new Employee(100, "Osman")

// console.log(emp4.name)

// person1.greet();
// emp4.greet();

//& Abstract Classes

// abstract class Vehicle {
//     year: number;
//     color: string;

//     constructor(year: number, color: string) {
//         this.year = year;
//         this.color = color;
//     }

//     startEngine(): void {
//         console.log(`Engine started...`)
//     }

//     abstract stopEngine(): void;
// }

// class Car extends Vehicle {
//     model: string;
//     numberOfDoors: number;

//     constructor(year: number, color: string, model: string, numberOfDoors: number) {
//         super(year, color)
//         this.model = model;
//         this.numberOfDoors = this.numberOfDoors;
//     }

//     stopEngine(): void {
//         console.log(`Engine stopped...`)
//     }
// }

// let car1 = new Car(1990, "Black", "Fiat", 4)

// console.log(car1)

// car1.startEngine();
// car1.stopEngine();

//& Class Data Modifiers

//& Private

// class Student {
//     private studCode: number;
//     public studName: string;

//     constructor(code: number, name: string) {
//         this.studCode = code;
//         this.studName = name;
//     }

//     displayCode(): void {
//         console.log(this.studCode)
//     }

//     setCode(newCode): void {
//         this.studCode = newCode;
//     }
// }

// const Mathias = new Student(1576, "Mathias");

// console.log(Mathias.studName);

// Mathias.displayCode();
// Mathias.setCode(1111)
// Mathias.displayCode();

//& Protected

class Student {
    private studCode: number;
    protected studName: string;
    constructor(code: number, name: string){
        this.studCode = code;
        this.studName = name;
        }
        public display() {
            return (`My unique code: ${this.studCode}, my name: ${this.studName}.`);
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
        return (`My unique code: ${this.getCode()}, my name: ${this.studName}.`)
    }
}
let person1: Person = new Person(1, "Mark", "FS");