function greet(firstName: String) {

  console.log("Hello " +firstName);

}
greet("Pranab");

function sum(a: number, b: number): number {             /* Here we can explicitly give the type of output also. */
                                                         /* But not required because, Typescript support type inference, means if the inputs all are number types and we are returning after adding those numbers then it will automatically return a number type. */
  return a + b;                                          /* If ever we hover over this function then it will exactly look like this same. */
                                                         /* It is a good practice because let suppose some one will pass the argument by mistakenly as a string then it will show an error. */
}
const value = sum(3, 15);
console.log(value);