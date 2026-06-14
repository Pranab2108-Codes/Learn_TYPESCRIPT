function doSomething1(keyPressed: string) {         /* Let's suppose we are making a game, where the user will press the keys of arrows like ("up", "down", "left", "right") so it should act like that. */
                                                    /* We might feel like this input should be of a number type data or should be a string ?, let's try with string now. */
  if(keyPressed == "up") {                          /* Here will be the logic of our code. */       


  }

}
doSomething1("up");
doSomething1("down");
doSomething1("leftRandom");                         /* The problem with this approach is let suppose we will put anything here, then typescript won't complain because it still look like a string, which we have allowed the function to take. */

type keyInput = "up" | "down" | "left" | "right";   /* This one is a solution for this problem is take the input as a type, where itwill include only valid press buttons as string. */

function doSomething2(keyPressed: keyInput) {

  if(keyPressed == "down") {


  }

}
doSomething2("up");
doSomething2("zibris");                             /* So here we can say now typescript is complaining after seeing another input which is not mentioned in the type keyInput, but there is another solution of this problem is to use enum. */          