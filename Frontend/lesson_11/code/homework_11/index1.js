let testArray = [2, 4, 6, 8, 10];

function doubleFunc(inputArr){
  for(let i =0; i<inputArr.length; i++){
    inputArr[i] *=2;
  }
}
doubleFunc(testArray);
console.log(testArray);

function getSubstring(inputStr, n){
    let newString = inputStr.substring(0, n);
    return newString;
}

const exampleStr = 'Hello, world';
let newSubstring1 = getSubstring(exampleStr, 1);
let newSubstring2 = getSubstring(exampleStr, 20);
let newSubstring3 = getSubstring(exampleStr);

console.log(`1st string - ${newSubstring1}; 2nd string - ${newSubstring2}; 3rd string - ${newSubstring3};`);


let exampleArr = [10, 15, 20, 25, 30];

function getArrayAvg(arr){
let sum = 0;
for(let num of arr){
  sum+=num;
}
let result = sum/arr.length;
return result;
}

console.log(getArrayAvg(exampleArr));
