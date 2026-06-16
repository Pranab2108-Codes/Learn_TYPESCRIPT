function greet(id: (number | string)) {               /* Earlier we only saw that we could only put one type of data while declaring, but we can put any number of type of data. */

  console.log(`Hey this is ${id}`);                   /* Instead of declaring like this what we can do is use the "type". */

}
greet(1);
greet("11");