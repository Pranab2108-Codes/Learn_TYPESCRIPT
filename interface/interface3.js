"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    name;
    age;
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
const e = new Employee("Pranab Sethi", 24);
e.greet("Hello, I am ");
//# sourceMappingURL=interface3.js.map