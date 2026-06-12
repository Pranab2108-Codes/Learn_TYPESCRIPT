function runAfter1S(fn: () => void) {           /* It is not returning anything that's why we had to mention void. */
                                                /* In this way we can declare the type of function when we are passing a function as input to another function. */
  setTimeout(fn, 3000);             

}
runAfter1S(function() {

  console.log("Hi there");                      /* If it would have return an integer then we could have write number as type instead of void. */                    

});