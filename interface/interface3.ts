interface Person {                       /* This is a custom type called Person, also know as interface. */

  name: string;                          /* So basically here the Typescript tells whoever will use this Person interface must have the inputs in this way only. */
  age: number;                           /* Till now it has not allocate any memory, it only exists during Typescript compilation to check types. */
  greet(phrase: string): void;

}


class Employee implements Person {       /* Here it is describing about interfaces can be also implemented as a class and this Employee must follow the structure of this interface. */
  
  name: string;
  age: number;

  constructor(n: string, a: number) {

    this.name = n;
    this.age = a;

  }

  greet(phrase: string) {

    console.log(`${phrase} ${this.name}`);

  }
  
}
const e = new Employee("Pranab Sethi", 24);
e.greet("Hello, I am ");