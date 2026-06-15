"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function firstElement(arr) {
    return arr[0];
}
const value = firstElement(["Pranab", "Sethi", 100]);
console.log(value.toUpperCase()); /* It is generating the error because let's suppose we are passing a number in our array and we know this "toUpperCase" won't work for numbers so that's why throwing error. */
//# sourceMappingURL=generic1.js.map