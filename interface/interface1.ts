function isLegal(user: {               /* The only problem of this approach is let's suppose we want to pass the user into somewhere else then we have to write again the same definition there. */

  firstName: String,
  lastName: String,
  age: number
   
}) {

  if(user.age > 18) {

    return true;

  }else {

    return false;

  }

}
console.log(isLegal({

  firstName: "Pranab",
  lastName: "Sethi",
  age: 24

}));


function greet(user: {                 /* Like here, so basically this type of code we call as code repitition, or voilating the DRY rule. */

  firstName: String,
  lastName: String,
  age: number
   
}) {

  console.log("Hi there " +user.firstName);

}
greet({

  firstName: "Pranab",
  lastName: "Sethi",
  age: 24

});