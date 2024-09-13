
let heightInput = document.getElementById('height');
let genderSelect = document.getElementById('genderSelect');
let buttonCalculate = document.getElementById('buttonCalculate');
let resultDiv = document.getElementById('result');

let calculateIdealWeight = () => {
    let height = parseFloat(heightInput.value);
    let gender = genderSelect.value;


// we must check if  the height input is valid

if(!height || height <= 0){
resultDiv.textContent = "Please enter a valid height";
return;
}

let idealWeight = height - (100 + (height - 100) / (gender === 'female' ? 10:20));

resultDiv.textContent = `Your ideal weight: ${idealWeight.toFixed(2)} kg`;
};
// now we are adding event listener to the button

buttonCalculate.addEventListener('click', calculateIdealWeight);