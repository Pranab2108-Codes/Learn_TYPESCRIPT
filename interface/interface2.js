"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isLegal(user) {
    if (user.age > 18) {
        return 'Yes you are eligible to vote.';
    }
    else {
        return 'No you are not eligible to vote.';
    }
}
console.log(isLegal({
    firstName: "Pranab",
    lastName: "Sethi",
    age: 18,
    email: "pranabsethi1368@gmail.com"
}));
function message(user) {
    console.log("Try it after getting 18 years old " + user.firstName);
}
message({
    firstName: "Pranab",
    lastName: "Sethi",
    age: 18
});
//# sourceMappingURL=interface2.js.map