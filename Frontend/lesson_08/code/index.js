console.log("Hello JS");
let dog = "Sharik";
dog = "Tuzik";
console.log(dog);

const cat = "Barsik"
console.log(cat);

// Primitive dannyje
// 1 string

let str1 = "it is allowed in  doppel";
let str2 = 'it is also allowed';
let str3 = "13"; // this is a line
let str4 = str1 + " " + str2;
console.log(str4);

console.log(str1.toUpperCase()); 

let num1 = 9;
let num2 = 9.6;

// 3 bigInt
let num3 = 1239n;

// bigint — низкий поклон в сторону крипро- валют, токенов, контрактов.
// Они оперируют большими числами, и там этот тип данных очень пригождается.
// Скорее всего, не пригодится в вашем обычном фронтенде.

// Boolean
let isDrunk = true;

if(isDrunk){
    console.log("You are drunk")
}
const result = isDrunk ? "You are drunk" : "You are sober";
console.log(result);

// undefined
let str5;
str5 = 12;
console.log(str5);

// 6 null
// null - no data

let empty = null;
console.log(empty);

let s1 = Symbol("something");

let str7 = '' + 9 // "9"
console.log(typeof str7);

const num4 = 10;
let str8 = String(num4); 
console.log(typeof str8);

const res = 9 + 12 + "5"; //215
const res2 = "5" + 9 + 12; // "5912"

const num5 = + "6" // it wil be a digit
const res3 = +"9" + + "10";
console.log(res3);

const num6 = Number("117"); // 117
const num7 = Number("129*#") // nan - not a number
console.log(typeof num7);

const res4 = Boolean(9); // True
const res5 = Boolean(0) // False
const test5 = Boolean (-1) // True

const res6 = Boolean("");
console.log(res6); // False
const res7 = Boolean(" ") // True
const res8 = Boolean(null); // false
const res9 = Boolean(undefined) // false

// Равенство строгое и нестрогое
// === строгое равенство
// == нестрогое равенство
// = prisvojenije

console.log( 9 === "9"); // false
console.log( 9 == "9"); // true preobrazovanije v string

console.log(('b' + 'a' + + 'a' + 'a').toLowerCase());

let age = 18;
if (age < 18){
    console.log("You are not minor")
} else if(age>= 18 && age < 65) {
    console.log("You are an adult")
} else {
    console.log("You are a pensioner");
}

//let day = 3;
//let dayName;
//switch(day) {
   // case 1:
      //  dayName = "Monday"
        //break;

        //case 2:
//     dayName = "Вторник";
//     break;
//   case 3:
//     dayName = "Среда";
//     break;
//   case 4:
//     dayName = "Четверг";
//     break;
//   case 5:
//     dayName = "Пятница";
//     break;
//   case 6:
//     dayName = "Суббота";
//     break;
//   case 7:
//     dayName = "Воскресенье";
//     break;
//   default:
//     dayName = "Некорректный номер дня";
// }

// console.log(dayName);

const firstName = "Mykhail";
const lastName = "Ivanov";
const age1 = 30;
const city = "London";

const greeting = `Привет, меня зовут ${firstName} ${lastName}.  Мне ${age1} лет,я живу в городе ${city}. `;
console.log(greeting);

// array is dynamic
// length is not fixed;
// ways of creation;

const arr1 = []; // one way
const arr2 = new Array() // 2nd way

// how to add by index

const fruits = [];
fruits[0] = "Banana"
fruits[1] = "Apple";
console.log(fruits);

console.log(fruits[0]);
console.log(fruits.length);

const cars = ["Lada", "Mercedes", "Opel", "Audi", "VW", "Tesla"];

const students = [];
students.push("John") // adding element right
console.log(students);
students.push("Tom")// right
console.log(students);
students.unshift("Alex");
console.log(students);
// pop - deleting of the element at the end
const vik = students.pop();
console.log(students);
// shift - deletes the element left (at the beginning)
students.shift();
console.log(students);






























