const x: number = 101;
x = "Pranab";              /* We can do the type check by doing tsc -b, that's why Typescript has been introduced. */
console.log(x);            /* We can't pass String in a variable which was declared to hold the Number type, before it was possible while we were using only Javascript. */