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

// function randomRange(myMin, myMax) {
  
//   return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  
// };
// console.log(randomRange(5, 10));
// ---------------------------------------------
/*Use the conditional operator in the checkEqual function to check if two numbers are equal or not. The function should return either the string Equal or the string Not Equal. */ 

// function checkEqual(a, b) {
// return a === b ? 'Equal' : 'Not Equal';
// }

// console.log(checkEqual(1, 2));

// ------------------------------------------------

/*In the checkSign function, use multiple conditional operators - following the recommended format used in findGreaterOrEqual - to check if a number is positive, negative or zero. The function should return positive, negative or zero. */ 

// function checkSign(num) {
// return (num > 0) ? 'positive'
//   : (num < 0) ? 'negative'
//   : 'zero'
// }

// console.log(checkSign(-1));

// --------------------------------------------------

// function countup(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countup(n - 1);
//     countArray.push(n);
//     return countArray;
//   }
// }
// console.log(countup(10));

/*define a function called countdown with one parameter (n). The function should use recursion to return an array containing the integers n through 1 based on the n parameter. If the function is called with a number less than 1, the function should return an empty array. For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. Your function must use recursion by calling itself and must not use loops of any kind. */ 


// function countdown(n){
//    if (n < 1) {
//     return [];
//   } else {
//     const downArr = countdown(n - 1);
//     downArr.unshift(n);
//     return downArr;
//   }
 
// };
// console.log(countdown(10));
// _____________------------------------____________-------
/* defined a function named rangeOfNumbers with two parameters. The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same. */ 

function rangeOfNumbers(startNum, endNum) {
  if(endNum < startNum){
  return [];
  } else {
    const digits = rangeOfNumbers(startNum, endNum -1);
    digits.push(endNum);
    return digits;
  }
};
console.log(rangeOfNumbers(1, 5));