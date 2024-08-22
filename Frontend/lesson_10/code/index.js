let exampleArray = ['apple', 'grape', 'lime'];

console.log(exampleArray.length);
console.log(exampleArray[0]);
console.log(exampleArray[exampleArray.length - 1]);

let exampleNumbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = [];

for(let number of exampleNumbers){
    if(number % 2 === 0){
     evenNumbers.push(number);
    }
}
console.log(evenNumbers);

