"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function maxValue(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; /* This is a program to find a maximum value in an array among all the elements which are present in array. */
        }
    }
    return max;
}
console.log(maxValue([1, 45, -89]));
//# sourceMappingURL=array1.js.map