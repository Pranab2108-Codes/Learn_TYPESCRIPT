enum Direction1 {                                /* This is the more cleaner solution of this game problem, where we are using enum. */
                                                 /* Enum help to use the more human-readable constants which can fit the scenario. */
  Up,                                            /* Bydefault enum starts to give value from the first constant as 0 and then increment as the constants present at the below like 1, 2, 3 .... and so on. */
  Down,                                          /* But we can also give values as per our wish in any order, not neccessarily need it to be in increment order. */
  Left,
  Right

}


function doSomething(keyPressed: Direction1) {   /* Here we can put the logic of the pressed button. */

  if(keyPressed == Direction1.Up) {             


  }

}
doSomething(Direction1.Up);
doSomething(Direction1.Right);
console.log(Direction1.Up);
console.log(Direction1.Down);
console.log(Direction1.Left);
console.log(Direction1.Right);

console.log();

enum Direction2 {

  Up = 3,
  Down,                                          /* Here the value will be after incrementing the value which been hold by it's previous constant. */
  Left = -9,                                     /* Here it holding "-9". */
  Right                                          /* Here it will be -8. */

}
console.log(Direction2.Up);
console.log(Direction2.Down);
console.log(Direction2.Left);
console.log(Direction2.Right);

console.log();

enum Direction3 {

  Up = "up",                                     /* In previous scenario we have seen that, we can put values(number) type to constants at start and then we can either give values to other constants or not based on our own wish. */
  Down,                                          /* But let's suppose we have given the value(string) type to constant then the Typescript can't guess automatically which would be the next value for nect constant, like the way it was doing in the case of number data type. */
  Left,
  Right,

}