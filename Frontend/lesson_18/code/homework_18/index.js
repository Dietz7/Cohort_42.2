let timer = 60; // we initialize timer to 60 seconds
let intervalId;

const startButton = document.getElementById("startBtn");

const startTimer = () =>{
    if (intervalId) return; // if you click on the start button again while it is running, it will be still working as the one timer 
    intervalId = setInterval(renewTimer, 1000);
};

const renewTimer = () => {
    timer--;
    displayTime(timer);

    if(timer<=0){
        clearInterval(intervalId);
        intervalId = null;
    }
};

// Displaying the current time in our "display" element (please see html file ) 
const displayTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
    const formattedTime = minutes + '0:' + formattedSeconds;

    document.getElementById("display").textContent = formattedTime;
};

const startBtnClick = () => {
    startTimer();
};
    
startButton.addEventListener ('click', startBtnClick);
