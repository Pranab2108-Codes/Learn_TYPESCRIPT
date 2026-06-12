"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const greet = (name) => `Hello, ${name}!`; /* Here we can see if we are not mentioning the data type of name which is a parameter, will show an error, because Typescript specially made for these type of type check. */
/* We can sheck this after going to the tsconfig file and look for the noImplicitAny key which must be true. */
/* But in modern Typescript's tsconfig.json noImplicitAny is enabled through strict so we need to make false of this strict key if we dont want to see the error for temporarily. */ 
//# sourceMappingURL=noImplicitAny1.js.map