// Event handling for the button
let infoCard = document.querySelector(".info-card");
let addButton = document.querySelector(".add-button");
let hideButton = document.querySelector(".hide-button");

// button logic
let addCardFunction = () =>{
    //console.log("Add");
    // Izmenenije vidimosto kartochki
    // 1st variant
    //infoCard.style.display = "flex";
    //infoCard.style.capacity = "1";

    //2nd variant - adding class through setAttribute
    //infoCard.removeAttribute("class");

    //3rd variant  - adding of the additional class 
    infoCard.classList.remove("hide");

};

let hideCardFunction = () =>{
    //console.log("Hide");
    //infoCard.style.display = 'none';
    //infoCard.style.capacity = "0";
    
    // 2nd variant - removing of the class through setAttribute

    //infoCard.setAttribute("class", "hide");

    //3rd variant  - adding of the additional class
    infoCard.classList.add("hide");

};

// binding of handlers to buttons
addButton.addEventListener("click", addCardFunction);
hideButton.addEventListener("click", hideCardFunction);

let searchField = document.querySelector('#search-input');

let changeInput =()=>{
    onsole.log(event.target.value);
};

//searchField.addEventListener("change", (event)=>{
//console.log(event.target.value);
//});

searchField.addEventListener("change", changeInput);

// change of the behaviour by default
let link = document.querySelector("#link");

let showAlert = (event)=>{
event.preventDefault()
alert("move cancellation")
};

link.addEventListener("click", showAlert);

// receiving data from the form

//1st variant - click
let sendButton = document.querySelector('.send-button');
let mainForm = document.querySelector('#main-form');
let resultBlock = document.querySelector('.result');

let getData = ()=>{
//1 st way - with the help of the form and attributes
let userNameValue = mainForm.userName.value
console.log(userNameValue);

//2nd way -  value for the element
let userSurnameValue = document.querySelector('#surname').value
console.log(userSurnameValue);

// 3rd way - through elements of the form
let userAgeValue = mainForm.elements['age'].value;
console.log(userAgeValue);
resultBlock.textContent = `User data - ${userNameValue}, ${userSurnameValue}, ${userAgeValue}`

};

sendButton.addEventListener("click", getData);

// 1st variant - submit