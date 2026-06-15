function identity<T>(arg: T) {                                        /* This is the exact syntax of using the generic. */
                                                                      /* Generics in TypeScript allow us to write code that works with many types while still preserving type safety. */
  return arg;

}
let output1 = identity<string>("Hey it's me, ");
let output2 = identity<number>(11.11);
console.log(output1.toUpperCase());                                                 


function getFirstElement<F>(arr: F[]) {

  return arr[0];

}
const element1 = getFirstElement(["Pranab", "Sethi"]);                 /* Now here we are not need to explicitly provide the value is of which type like we were doing in the above code "<string>". */
const element2 = getFirstElement([true, 1]);                           


interface User {

  name: string;
  age: number;

}
const element3 = getFirstElement<User>([{name: "Pranab", age: 24}]);   /* See we can pass an user defined data type also because we have provide in the function declaration about it can take generic type, means it can take any data type. */
console.log(element1.toUpperCase());