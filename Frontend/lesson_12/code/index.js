// ------------------Function hoisting
//1st example - call of the function add(Function declaration)
console.log(add(20,30));

//2nd example - call of the function divide(Function expression)
console.log(divide(10,5));


//create Function declaration
function add(a, b){
return a+b;
}

//create Function expression
const divide = function (x,y) {
return x / y;
};


//divide = 5;
// const age = 45;
//age = 20;

let result = divide(2,4);
console.log(result);

//-----------------Arrow functions

//let getNewNumber = num => num+10;
let getNewNumber = (num2=20) => {
    let result = 0 + num2;
    return result;
};

console.log(getNewNumber(10));

//call-back function



let performOperation =(num1, num2, operation) =>{
    let result = operation(num1, num2)
    return result;
};

let divideFunc = (a, b)=> a/b
console.log(performOperation(2, 1, divideFunc));
console.log(performOperation(4,5, (x,y)=>x * y));

// ----------------Oblast vidimosti
let age = 20;
let messageAccess = "OK";
if(age > 18){
let messageAccess = 'Access';
console.log(messageAccess);
console.log(age);


} else{
    var messageFailure = 'Failure';
    console.log(messageFailure);
}

console.log(messageAccess);

//example of creation of the variables inside of the function
var message = 'Hi'
const showMessage = () => {
    var message = "Hi, User";
    console.log(message);
};

showMessage();
console.log(message);


//---------------------hoisting of the variables
console.log(z);


let x = 23;
const y = 24;
var z = 25;

console.log(x, y, z);
