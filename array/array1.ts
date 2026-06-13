type NumberArray = number[];


function maxValue(arr: NumberArray) {         /* Here we only need to put he data type and this([]) annotation just to declare as array. */

  let max = arr[0];
  for(let i = 0; i < arr.length; i++) {

    if(arr[i] > max) {

      max = arr[i];                           /* This is a program to find a maximum value in an array among all the elements which are present in array. */

    }

  }

  return max;

}
console.log(maxValue([1, 45, -89]));