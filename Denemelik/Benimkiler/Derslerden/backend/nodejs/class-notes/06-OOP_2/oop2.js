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

// class Vehicle {
//     vehicleIsActive = false;

//     constructor(VehicleType) {
//         this.VehicleType = VehicleType;
//     }
// }
// class Car extends Vehicle {

//     isRunning = false

//     constructor(brand, model, year, VehicleType = "Car") {
//         super(VehicleType)
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

// class Accessory extends Car {
//     constructor(accessoryName, brand, model, year, VehicleType) {
//         super(brand, model, year, VehicleType);
//         this.accessoryName = accessoryName;
//     }
// }

// const FordClimate = new Accessory("Bosch Climate", "Ford", "Mustang", 1967, "Car");
// console.log(FordClimate);

/* ------------------------------------------------------- */

//? Polymorphism: Miras aldığımız sınıfın özellik/methodlarını yeniden yazabilme.
//? Override: Üst metodla aynı isim ve yapıda yeni bir metod yazma. (ezme / iptal etme / önceliğini alma)
//? Overload: Üst metodla aynı isimde ama farklı yapıda (farklı adet/tip) yeni method oluşturma. (aynı anda ikisi de aktif) (JS desteklemez)

// class Vehicle {

//     vehicleIsActive = false;

//     constructor(vehicleType) {
//         this.vehicleType = vehicleType;
//     }

//     getDetails() {
//         console.log("Vehicle runned.");
//     }
// }
// class Car extends Vehicle {

//     isRunning = false

//     constructor(brand, model, year, vehicleType = "Car") {
//         super(vehicleType)
//         this.brand = brand
//         this.model = model
//         this.year = year

//     }

//     runEngine() {
//         this.isRunning = true
//         console.log('Engine runned')
//         return this.isRunning
//     }

//     getDetails() {
//         super.getDetails();                         // Hem üsttekini görmek.
//         return `${this.vehicleType} is runned.`;    // Hem de override edilmiş halini görmek istersek.
//     }
// }

// const Ford = new Car('Ford', 'Mustang', 1967)
// console.log(Ford)
// console.log(Ford.getDetails())

/* ------------------------------------------------------- */

//? JS PUBLIC: Genel erişime açık.
//? JS PROTECTED: Sadece Tanımlı olduğu class ve Inherit edilen child-class erişebilir.
//? -* JS/ES12 öncesi desteklemiyor: Genel erişime açık ama lütfen dokunmayın :) 
//? JS PRIVATE: Sadece tanımlı olduğu class içinde erişim var.

/* ------------------------------------------------------- */

class Vehicle {

    vehicleIsActive = false

    constructor (vehicleType) {
        this.vehicleType = vehicleType
    }

    getDetails() {
        console.log('Vehicle.getDetails runned.')
        return this.vehicleType
    }
}

class Car extends Vehicle { // Inheritance

    isRunning = false

    constructor (brand, model, year, vehicleType = 'Car') {
        super(vehicleType)
        this.brand = brand
        this.model = model
        this.year = year
    }

    runEngine() {
        this.isRunning = true
        console.log('Engine runned')
        return this.isRunning
    }
    
    getDetails() {
        console.log('Car.getDetails runned.')
        // return this
        return super.getDetails() // Ezdiğimiz methodu çalıştırma yöntemi.
    }
}

const Ford = new Car('Ford', 'Mustang', 1967);
console.log(Ford.getDetails());