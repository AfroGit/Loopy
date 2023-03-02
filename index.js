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

const myArray = [];
for(let i = 1; i <= 9; i += 2){
  myArray.push(i);
  };
console.log(myArray);
// ------------------------------------------
/*Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total. */ 
const myArr = [2, 3, 4, 5, 6];
let total = 0;
for(let i = 0;i < myArr.length;i++){
  total += myArr[i];//total + myArr[0] -> 0+2 = 2  
};
console.log(total);