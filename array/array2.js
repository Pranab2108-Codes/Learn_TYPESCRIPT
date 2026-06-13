"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function filterUsers(users) {
    return users.filter(user => user.age > 18);
}
const users = [
    {
        firstName: "Pranab",
        lastName: "Sethi",
        age: 25
    }, {
        firstName: "Rahul",
        lastName: "Sharma",
        age: 16
    }, {
        firstName: "Amit",
        lastName: "Kumar",
        age: 18
    }, {
        firstName: "Deepak",
        lastName: "Meheta",
        age: 24
    }
];
const eligibleUsers = filterUsers(users); /* So here we can see in above function filterUsers which is returning after filtered all the users who are eligible for vote has not been mentioned by the type of the output which supposed to be like "User[]" there. */
console.log(eligibleUsers); /* But still this eligibleUsers here not complaining by Typescript and it is taking the whole answer which returned by the function filterUsers finely, because TypeScript can automatically infers, similarly in this case we know filter always return an array, and the input was interface so the final answer array returned by filter also make an array of interface data type. */
//# sourceMappingURL=array2.js.map