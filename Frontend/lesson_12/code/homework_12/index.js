/*Одним из преимуществ помещения в память объявлений функций до выполнения кода является возможность использовать 
функцию до её объявления. Например:*/
function catName(name){
    console.log("The name of my cat is " + name)
    }
    catName("Tiger");

    
    //когда мы вызываем функцию в коде до её объявления:

catName("Tom");

function catName(name){
 console.log("The name of my cat is " + name);
    
}
//Даже если мы вызываем функцию до её объявления, код работает. Это происходит благодаря тому, как работает 
//контекст выполнения в JavaScript.

// Hoisting хорошо работает и с другими типами данных и переменными. Переменные могут быть инициализированы и использованы 
//до их объявления. Однако, они не могут быть использованы без инициализации.

num = 6;
num + 7;
var num;
console.log(num);

var x = 1; //Инициализируем x
console.log(x + " " + y); // '1 undefined'
var y = 2;

var x = 1;
var y;
console.log(x + " " + y);
var y = 2;

//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/function
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/var

// https://www.youtube.com/watch?v=i2SPq-nb3NQ 

