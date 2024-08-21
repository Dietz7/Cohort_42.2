// Task1
//Create an array of strings and print its length, the first and the last elements of the array to the console

let string = ["I", "love",  "to", "learn", "something", "new"];
console.log(string.length);
console.log(string[0]);
console.log(string[5]);
//My notes: the value of the length property is a nonnegative integer with a value less than 2^32.

//Task2
//Create a new array based on the array [1, 2, 3, 4, 5, 6] that will only contain even(четные) numbers from 
//the given array
// just a reminder for me
console.log(5 % 2);// 1
console.log(4 % 2);// 0

//For loop
let arr = [1, 2, 3, 4, 5, 6]; // the above given array
console.log(arr);
let newArr = []; // one more array where we put and store our even numbers
for( let i = 0; i < arr.length; i++){
if (arr[i] % 2 === 0) {
    newArr.push(arr[i]);
}
console.log(newArr);
}

// While loop
let arr1 = [1, 2, 3, 4, 5, 6];
let newArr1 = [];
let i = 0;
while ( i < arr1.length) {
    if(arr1[i] % 2 === 0){
     newArr1.push(arr1[i]);
    }
    i++;
}
console.log(newArr1);

// Solution from AI using filter() method

let arrGpt = [1, 2, 3, 4, 5, 6];
let evenArr = arrGpt.filter(number => number % 2 === 0); // the arrow function returns true for even numbers 
//and false for odd numbers
console.log(evenArr);

