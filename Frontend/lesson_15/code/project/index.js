let form = document.querySelector('#form');
let cardContainer = document.querySelector('.card-container');
let resultName = document.querySelector('#resultName');
let resultSurname = document.querySelector('#resultSurname');
let resultAge = document.querySelector('#resultAge');
let resultJob = document.querySelector('#resultJob');

cardContainer.style.display = 'none';

let hideCardFunction = () => {
    cardContainer.style.display = 'none';
  };

form.addEventListener('submit', (event) => {
event.preventDefault();

let userName = form.userName.value;
let userSurname = form.userSurname.value;
let userAge = form.userAge.value;
let userJob = form.userJob.value;

let errorMessage = "Please fill in all required fields:"
let isMissingFields = false;
    if (userName === '') {
        errorMessage += " Name";
        isMissingFields = true;
    }

    if (userSurname === '') {
        errorMessage += (errorMessage === "Please fill in all required fields:" ? " Surname" : ", Surname");
        isMissingFields = true;
    }
    
    if (userAge === '') {
        errorMessage += (errorMessage === "Please fill in all required fields:" ? " Age" : ", Age");
        isMissingFields = true;
    }

    // If there are missing fields, alert the user and hide the card
    if (isMissingFields) {
        alert(errorMessage + ".");
        hideCardFunction();  
        return;  
    }

resultName.textContent = userName;
resultSurname.textContent = userSurname;
resultAge.textContent = userAge;
resultJob.textContent = userJob !== '' ? userJob : "Job position is not provided";

form.reset();

cardContainer.style.display = 'flex';
});