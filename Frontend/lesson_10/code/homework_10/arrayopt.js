// Optional Task 3
//Find the maximum and minimum values from the array [3, 7, 2, 9, 4] and display them in the console. ! 
//Do not use max and min math methods, only loops

let arrayNumbers = [3, 7, 2, 9, 4];

let max = arrayNumbers[0];
let min = arrayNumbers[0];

for(let number of arrayNumbers){
if(number > max){
    max = number;
}
if(number < min){
min = number;
}
}
console.log(`Max - ${max}`);
console.log(`Min - ${min}`);

