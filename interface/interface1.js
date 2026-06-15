"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegal({
    firstName: "Pranab",
    lastName: "Sethi",
    age: 24
}));
function greet(user) {
    console.log("Hi there " + user.firstName);
}
greet({
    firstName: "Pranab",
    lastName: "Sethi",
    age: 24
});
//# sourceMappingURL=interface1.js.map