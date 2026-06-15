"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Direction1;
(function (Direction1) {
    /* Enum help to use the more human-readable constants which can fit the scenario. */
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
function doSomething(keyPressed) {
    if (keyPressed == Direction1.Up) {
    }
}
doSomething(Direction1.Up);
doSomething(Direction1.Right);
console.log(Direction1.Up);
console.log(Direction1.Down);
console.log(Direction1.Left);
console.log(Direction1.Right);
console.log();
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 3] = "Up";
    Direction2[Direction2["Down"] = 4] = "Down";
    Direction2[Direction2["Left"] = -9] = "Left";
    Direction2[Direction2["Right"] = -8] = "Right"; /* Here it will be -8. */
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Up);
console.log(Direction2.Down);
console.log(Direction2.Left);
console.log(Direction2.Right);
console.log();
var Direction3;
(function (Direction3) {
    Direction3["Up"] = "up";
    Direction3[Direction3["Down"] = void 0] = "Down";
    Direction3[Direction3["Left"] = void 0] = "Left";
    Direction3[Direction3["Right"] = void 0] = "Right";
})(Direction3 || (Direction3 = {}));
//# sourceMappingURL=enum2.js.map