// Integrated Methods for interaction with the User
//Method alert
//let message = "Hello, User";
//let alertResult = alert(message);
//console.log(alertResult);

// Method prompt
// After pressing the key OK method prompt returns you - complete!
//let resultPrompt = prompt('Input your age', 100);
//console.log(resultPrompt);

// Method confirm
//let resultConfirm = confirm('Are you admin?')
//console.log(resultConfirm);

// Functions. Basics
let message = 'Hello';

function showMessage(){
    //let message = 'Hello, User'
    console.log(message);  
}
showMessage ()
console.log(message);

// Functions with parameters
function newShowMessage(name = "John", age = 20){
    //if(age === undefined){
  //console.log("Age is absent");
   // } else {
       // let message = `Hello, ${name}. Age ${age}`
        //console.log(message);
        
    //}
    let message = `Hello, ${name}. Age ${age}`;
    console.log(message);
}

newShowMessage("Mary", 32);
newShowMessage("Tom", 30);
newShowMessage("Anna");
newShowMessage(undefined, 24);

// return 
function getFullName(){
    let name = "Bob";
    let surname = "Smith"
    let userName = `${name} ${surname}`;
    return userName
}
let fullName = getFullName();
console.log(fullName);
