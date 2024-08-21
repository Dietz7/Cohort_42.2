//Задание 1.
//Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 100. 
//Найти максимальное и минимальное значение в массиве. Вывести в консоль.

let randomArr = [];

for(let i = 0; i<10; i++){
    randomArr.push(Math.round(Math.random()*100));
}

console.log(randomArr);
console.log(Math.max(...randomArr)); // 11, ....
console.log(Math.min(...randomArr));
//[...randomArr, ...arr] - joining of two arrays

//Задание 2.
//Объвить массив из 10 любых элементов, заполнить. 
//Вырезать первый элемент и добавить его в конец массива.
let randomArr2 = [];

for(let i = 0; i<10; i++){
    randomArr2.push(Math.round(Math.random()*100));
}
// shift, unshift, push, pop
console.log(randomArr2);
let firstEl = randomArr2.shift();
randomArr2.push(firstEl);
console.log(randomArr2);

console.log(randomArr2.unshift('q'));// unshift - add element to the begin of the array and return the new length
// of the array
console.log(randomArr2);

//Задание 3.
//Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 75. 
//Найти минимальное и максимальное значение в массиве. Вывести в консоль их сумму.
let randomArr3 = [];

for(let i = 0; i<10; i++){
    randomArr3.push(Math.round(Math.random()*75));
}
let max3 = Math.max(...randomArr3);
let min3 = Math.min(...randomArr3);
console.log(randomArr3);

console.log(max3 + min3);


//Задание 4.
//Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 50. Найти сумму всех элементов 
//массива. Вывести в консоль.

let randomArr4 = [];

for(let i = 0; i<10; i++){
    randomArr4.push(Math.round(Math.random()*50));
}
let sum = 0;
for(let i = 0; i<10; i++){
//7sum = sum + randomArr4[i] 
sum += randomArr4[i]
}
console.log(randomArr4);
console.log(sum);

//Задание 6.
//Разбить строку
//Итак, самое длинное научное название: метилпропенилендигидроксициннаменилакрилическая кислота.
//на слова и вывести в консоль по одному слову в строке.

let exampleStr = 'Итак, самое длинное научное название: метилпропенилендигидроксициннаменилакрилическая кислота'
let words = exampleStr.split(' ');
console.log(words);
for(let i = 0; i<words.length; i++){
    console.log(words[i]); 
}
