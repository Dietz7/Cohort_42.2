/*Задача 1
У вас есть массив чисел [2, 4, 6, 8, 10]. Напишите функцию для удвоения каждого значения в массиве 
(массив нужно передать аргументом) и вывода результата в консоль. Вызовите функцию для демонстрации результата*/

// 1. Our function to double the values in the array
function multiplyArray(arr){    

// 2. Where we put and store our new doubled values? In our new array.
let doubled = [];

for(let number of arr) {
    doubled.push(number*2)
}
return doubled;
}

// let's  use our function;)
let array = [2, 4, 6, 8, 10];
result = multiplyArray(array);
console.log(result);

/*Задача 2
Напишите функцию, которая принимает строку и число n, а затем возвращает первые n символов строки. Для отображения результа 
работы функции, вызовите её три раза с различными параметрами, результат каждого вызова присвойте отдельной переменной 
и выведите переменные в консоль*/

function getFirstNsymbols(str, n) {
       let result = '' // where we store our result? In an empty string


let count = 0; //variable for tracking the number of the added symbols
for(const symbol of str){
    result += symbol;
    count++;
    if(count >=n) {
        break;
    }
}
return result;
}

let result1 = getFirstNsymbols("Coding is fun", 3);
let result2 = getFirstNsymbols("Java Script", 4);
let result3 = getFirstNsymbols("It is also challenging", 7);
console.log(result1);
console.log(result2);
console.log(result3);

/*Задача 3*
У вас есть массив чисел [10, 15, 20, 25, 30]. Напишите функцию для вычисления среднего значения элементов массива
(массив нужно передать аргументом) и вывода результата в консоль. Вызовите функцию для демонстрации результата*/

function avgNumInArray(arr1){
    let sum = 0;
    for(let number of arr1){
        sum+=number;
    }
    let res = sum/arr1.length
    return res;
}

let exampleArray = [10, 15, 20, 25, 30];
result = avgNumInArray(exampleArray);
console.log(result);

