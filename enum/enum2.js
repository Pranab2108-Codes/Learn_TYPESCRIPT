"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Direction;
(function (Direction) {
    /* Enum help to use the more human-readable constants which can fit the scenario. */
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
function doSomething(keyPressed) {
    if (keyPressed == Direction.Up) {
    }
}
doSomething(Direction.Up);
doSomething(Direction.Right);
//# sourceMappingURL=enum2.js.map