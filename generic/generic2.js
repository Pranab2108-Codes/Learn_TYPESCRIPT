"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function identity(arg) {
    /* Generics in TypeScript allow us to write code that works with many types while still preserving type safety. */
    return arg;
}
let output1 = identity("Hey it's me, ");
let output2 = identity(11.11);
console.log(output1.toUpperCase());
function getFirstElement(arr) {
    return arr[0];
}
const element1 = getFirstElement(["Pranab", "Sethi"]); /* Now here we are not need to explicitly provide the value is of which type like we were doing in the above code "<string>". */
const element2 = getFirstElement([true, 1]);
const element3 = getFirstElement([{ name: "Pranab", age: 24 }]); /* See we can pass an user defined data type also because we have provide in the function declaration about it can take generic type, means it can take any data type. */
console.log(element1.toUpperCase());
//# sourceMappingURL=generic2.js.map