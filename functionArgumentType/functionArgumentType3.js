"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function runAfter1S(fn) {
    /* In this way we can declare the type of function when we are passing a function as input to another function. */
    setTimeout(fn, 3000);
}
runAfter1S(function () {
    console.log("Hi there"); /* If it would have return an integer then we could have write number as type instead of void. */
});
//# sourceMappingURL=functionArgumentTypes3.js.map