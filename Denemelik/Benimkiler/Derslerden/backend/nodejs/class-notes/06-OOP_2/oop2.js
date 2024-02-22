"use strict"

/* -------------------------------------------------------
    OOP & CLASSES
------------------------------------------------------- */
//? OOP: Object Oriented Programming
//? DRY: Don't Repeat Yourself
//? BLUEPRINT: Taslak (Mimarların kullandığı mavi şablon kağıdı)
//? CLASS: Obje türetmek için kullanılacak şablon.

/* ------------------------------------------------------- */

//* Class Decleration:
// class PascalCaseClassName {...}

//* Class Expression:
// const PascalCaseClassName = class {
//     undefinedProperty       // only definition. (undefinedProperty == undefined)
//     propertyName = "value"  // attribute, field

//     //? "new Class" ile obje oluştururken parametre göndermek için "constructor" isminde bir method kullanırız.
//     constructor (parametre1, parametre2 = "default-value"){
//         this.parametre1 = parametre1;
//         this.parametre2 = parametre2;
//     }

//     methodName1(){
//         return this 
//     }
// }

/* ------------------------------------------------------- */

//? INSTANCE = Bir classtan türetilen objedir.

// const PascalCaseInstanceName = new PascalCaseClassName(0, 1);
// const PascalCaseInstanceName2 = new PascalCaseClassName(1);
// console.log(PascalCaseInstanceName);
// console.log(PascalCaseInstanceName2);

// class Car {

//     isRunning = false

//     constructor (brand, model, year) {
//         this.brand = brand
//         this.model = model
//         this.year = year
//     }

//     runEngine() {
//         this.isRunning = true
//         console.log('Engine runned')
//         return this.isRunning
//     }
// }

// const Ford = new Car('Ford', 'Mustang', 1967)
// console.log(Ford)
// // Ford.isRunning = true
// // console.log(Ford)
// Ford.runEngine()
// console.log(Ford)

/* ------------------------------------------------------- */

//* INHERITANCE = Başka bir class'ın tüm özelliklerini ve methodlarını devralma. (Parent - Child) ilişkisi kurulur.

class Vehicle {
    vehicleIsActive = false;

    constructor(VehicleType) {
        this.VehicleType = VehicleType;
    }
}
class Car extends Vehicle{

    isRunning = false

    constructor(brand, model, year, VehicleType) {
        super(VehicleType)
        this.brand = brand
        this.model = model
        this.year = year
        
    }

    runEngine() {
        this.isRunning = true
        console.log('Engine runned')
        return this.isRunning
    }
}

const Ford = new Car('Ford', 'Mustang', 1967)
console.log(Ford)