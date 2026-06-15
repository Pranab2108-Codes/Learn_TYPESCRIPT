interface User {

  firstName: String;
  lastName: String;
  age: number;
  email?: String;                      /* This(email) is an optional, either we can pass or not as per our need. */

}


function isLegal(user: User) {         /* Here we are directly passing the interface, so no more defining again. */

  if(user.age > 18) {

    return 'Yes you are eligible to vote.';

  }else {

    return 'No you are not eligible to vote.';

  }

}
console.log(isLegal({

  firstName: "Pranab",
  lastName: "Sethi",
  age: 18,
  email: "pranabsethi1368@gmail.com"

}));


function message(user: User){

  console.log("Try it after getting 18 years old " +user.firstName);

}
message({

  firstName: "Pranab",
  lastName: "Sethi",
  age: 18

});