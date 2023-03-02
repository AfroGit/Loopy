/*Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop. */ 

// const myArray = [];
// let i = 5;

// while (i >= 0) {
//   myArray.push(i);
//   i--;
// };
// console.log(myArray);

// --------------------------------------------

/*Push the odd numbers from 1 through 9 to myArray using a for loop. */ 

// const myArray = [];
// for(let i = 1; i <= 9; i += 2){
//   myArray.push(i);
//   };
// console.log(myArray);
// ------------------------------------------
/*Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total. */ 
// const myArr = [2, 3, 4, 5, 6];
// let total = 0;
// for(let i = 0;i < myArr.length;i++){
//   total += myArr[i];//total + myArr[0] -> 0+2 = 2  
// };
// console.log(total);

// -----------------------------------------------
// const arr = [
//   [1, 2], [3, 4], [5, 6]
// ];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }
// ------------------------------------------
// function multiplyAll(arr) {
//   var product = 1;
//   // Only change code below this line
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr[i].length; j++) {
//       product *= arr[i][j];
//     }
//   }
//   // Only change code above this line
//   console.log(product);
// }

// Modify values below to test your code
// multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

// --------------------------------------------


// function countdown(i) {console.log(i)//print out the number 5
//     if (i <= 1) {  // base case
//         return;
//     } else {     // recursive case
//         countdown(i - 1);
//     }
//   // console.log(i)
// }

// countdown(5);

/*Change randomFraction to return a random number instead of returning 0. */ 
// function randomFraction() {

  
//       let result = 0;
//       while(result === 0){
//         result = Math.random();

//       }
//   return result;
// };
// console.log(randomFraction());
// --------------------------------------------------
/*We are calling Math.random(), multiplying the result by 10, then passing the value to Math.floor() function to round the value down to the nearest whole number. */ 

// function randomWholeNum() {

//   return Math.floor(Math.random() * 10);
// };
// console.log(randomWholeNum())
// -----------------------------------------------
/*

Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.
 */ 

function randomRange(myMin, myMax) {
  
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  
};
console.log(randomRange(5, 10));