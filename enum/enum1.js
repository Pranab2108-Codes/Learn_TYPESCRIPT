"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function doSomething1(keyPressed) {
    /* We might feel like this input should be of a number type data or should be a string ?, let's try with string now. */
    if (keyPressed == "up") { /* Here will be the logic of our code, means when the user will press a specific key like up here it should do some action. */
    }
}
doSomething1("up");
doSomething1("down");
doSomething1("leftRandom"); /* The problem with this approach is let suppose we will put anything here, then typescript won't complain because it still look like a string, which we have allowed the function to take. */
function doSomething2(keyPressed) {
    if (keyPressed == "down") {
    }
}
doSomething2("up");
doSomething2("Gibberish"); /* So here we can say now typescript is complaining after seeing another input which is not mentioned in the type keyInput, but there is another solution of this problem and that is to use enum. */
//# sourceMappingURL=enum1.js.map