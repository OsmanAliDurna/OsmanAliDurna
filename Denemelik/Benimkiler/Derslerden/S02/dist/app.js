class Student {
    constructor(code, name) {
        this.studCode = code;
        this.studName = name;
    }
    display() {
        return (`My unique code: ${this.studCode}, my name: ${this.studName}.`);
    }
    getCode() {
        return this.studCode;
    }
}
class Person extends Student {
    constructor(code, name, department) {
        super(code, name);
        this.department = department;
    }
    getStudCode() {
        return (`My unique code: ${this.getCode()}, my name: ${this.studName}.`);
    }
}
let person1 = new Person(1, "Mark", "FS");
