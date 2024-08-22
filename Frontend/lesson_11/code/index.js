// destrukturirujescheje prisvajevanije
let colorsConfig = ['dark', 'light'];
// 1 variant - no destrucutrisation
//let theme = colorsConfig[0];
//let secondTheme = colorsConfig[1];

//console.log(theme, secondTheme);


//2nd way - with destructurisation
let [theme, secondTheme, size='20px'] = colorsConfig; // we create a variable not a new array
console.log(theme, secondTheme, size);

// Объявить массив из 5 элементов и заполнить его любыми числами. Присвоить 5 переменным значения из массива с помощью 
//деструктуризации.
let exampleNum = [10, 4, 20, 11, 3];
let [x, y, z, a, b] = exampleNum;

console.log(`x - ${x}`);
console.log(`x - ${y}`);
console.log(`z - ${z}`);
console.log(`a - ${a}`);
console.log(`b - ${b}`);