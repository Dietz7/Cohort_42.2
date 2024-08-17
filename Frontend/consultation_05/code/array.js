//Задание 1
//Создайте массив, содержащий три различных фрукта, и выведите его в консоль.

const fruits = ['mango', 'banana', 'orange']
console.log(fruits);

//Задание 2
//Добавьте число 4 в конец массива [1, 2, 3].
const numbers = [1, 2, 3]
// spread
const numbersCopy = [...numbers]
numbersCopy [3] = 4;
console.log(numbersCopy);

//Задание 3
//Удалите последний элемент из массива ["Red", "Green", "Blue"] и сохраните его в отдельной переменной.
const colors = ['Red', 'Green', 'Blue']
const lastColor = colors.pop();
console.log(colors);

//Задание 4
//Добавьте элемент "Elephant" в начало массива ["Cat", "Dog"].

const animals = ['Cat', 'Dog']
animals.unshift('Elephant');
console.log(animals);

//Задание 5
//Удалите первый элемент из массива ["Paris", "London", "New York"] и сохраните его в переменной.

const cities = ['Paris', 'London', 'New York'];
const[firstCity, ...cities1] = cities;
console.log(cities1);
console.log(firstCity);

//Задание 6
//Получите и выведите второй элемент из массива ["Toyota", "BMW", "Tesla"].
const cars = ["Toyota", "BMW", "Tesla"];
const secondCar = cars[1];
console.log(secondCar);
console.log();

/*Задание 7
Найдите индекс элемента 30 в массиве [10, 20, 30, 40].

Задание 8
Проверьте, содержится ли элемент "Banana" в массиве ["Apple", "Banana", "Orange"].

Задание 9
Объедините два массива [1, 2, 3] и [4, 5, 6] в один.*/

//Задание 10
//Выведите все элементы массива ["JavaScript", "Python", "Java"] с помощью цикла for.
let langs = ["JavaScript", "Python", "Java"];
for (let i = 0; i < langs.length; i++) {
    console.log(langs[i]);  
}

/*Задание 11
Переберите массив ["USA", "Canada", "Mexico"] и выведите каждый элемент с помощью метода forEach.

Задание 12
Создайте новый массив, состоящий из удвоенных значений элементов массива [1, 2, 3, 4].

Задание 13
Отфильтруйте массив [18, 21, 16, 25], оставив только элементы больше или равные 18.

Задание 14
Отсортируйте массив ["John", "Anna", "Chris"] в алфавитном порядке.

Задание 15
Объедините элементы массива ["Fire", "Air", "Water"] в строку, разделив их запятыми и пробелами.*/

