type GreetArg = number | string;           /* This is the feature only allowed by "type", not by "interface". */


function greet(id: GreetArg) {

  console.log(`Hey this is ${id}`);

}
greet(2);
greet("22");