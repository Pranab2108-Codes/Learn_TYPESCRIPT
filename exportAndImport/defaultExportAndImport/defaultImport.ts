import pranab, { b } from './defaultExport';       /* The one which is export by using default can be import without using the destructuring way. */


console.log(pranab);                               /* So here "a" got imported as "pranab", and still won't throw any error. */
console.log(b);                                    /* But if we change the name of this "b" it will throw error. */