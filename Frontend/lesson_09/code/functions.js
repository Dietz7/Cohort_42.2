// Function Declaration

function sum(a,b) {
    return a + b;
}
// call
let result = sum(50, 30);
console.log(result);

// Объявления функций поднимаются вверх контекста исполнения
 // (например, блока или функции).
 // Это означает, что вы можете вызвать функцию до
 // ее фактического объявления в коде.


greet(); //call
function greet(){
    console.log("Hello ");
} // declaration

// Function expression
// must be declared before using

const divide = function(a,b) {
return a/b;
}
console.log(divide(10, 2));

//console.log(substract(5, 3));
//const substract = function(x,y){
    //return x-y;
//};

// Ошибка: JavaScript бросает ошибку
 // ReferenceError: Cannot access 'subtract' before initialization,
 // потому что вы пытаетесь вызвать функцию до того, как переменная
 // subtract была инициализирована.


const substract = function(x,y){
    return x-y;
};
console.log(substract(5, 3));

// Основные различия:
// Хоистинг:
// Function Declaration поднимаются вверх, поэтому их можно вызывать до объявления.
// Function Expression не поднимается, поэтому ее нужно объявить перед использованием.
// Использование имен:
// Function Declaration всегда имеют имя.
// Function Expression могут быть анонимными или именованными.