let buttonResult = document.querySelector("#cread-button");
let form = document.querySelector("#form");
let cardContainer = document.querySelector(".card-container");
let resultName = document.querySelector(".result-name");
let resultSurname = document.querySelector(".result-surname");
let resultAge = document.querySelector(".result-age");
let resultJob = document.querySelector(".result-job");

let addCardFunction = () => {
  console.log("Card container should be visible now");
  cardContainer.classList.add("visible");
};

let hideCardFunction = () => {
  console.log("Card container should be hidden now");
  
    cardContainer.classList.remove("visible");
};

let getDate = (event) => {
  let check = true;

  event.preventDefault();
  
  let userNameValue = form.userName.value;
  resultName.textContent = userNameValue;
  let userSurnameValue = form.userSurname.value;
  resultSurname.textContent = userSurnameValue;
  let userAgeValue = form.userAge.value;
  resultAge.textContent = userAgeValue;
  let userJob = form.userJob.value;
  resultJob.textContent = userJob;
  console.log("Form Values:", { userNameValue, userSurnameValue, userAgeValue, userJob });
  

  if (userNameValue.length === 0) {
    console.log("Name is missing");
    alert("Вы не ввели Имя!");
    check = false;
  }
  if (userSurnameValue.length === 0) {
    console.log("Surname is missing");
    alert("Вы не ввели Фамилию!");
    check = false;
  }
  if (userAgeValue.length === 0) {
    
    alert("Вы не ввели возраст!");
    console.log("Age is missing");
    check = false;
  }
  if (check) {
    addCardFunction();
    console.log("Form submitted successfully");
    
  }else{
    hideCardFunction();
    console.log("Form submission failed");
    
  }

  form.reset();
  console.log("Form reset");
  
};

buttonResult.addEventListener("click", getDate);
