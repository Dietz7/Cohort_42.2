const getJokesButton = document.querySelector("#get-joke");
const jokesBlock = document.querySelector(".data-container");

const getJoke = async () => {
jokesBlock.classList.remove("error");
jokesBlock.textContent = "";

try{
const response = await fetch("https://official-joke-api.appspot.com/random_joke");

const jokeData = await response.json();
//console.log(jokeData);

if (response.ok) {
    jokesBlock.textContent = `Joke: ${jokeData.setup}\n${jokeData.punchline}`;
}else{
    throw Object.assign(new Error ("Some error"), {
        responseError: jokeData,
    });
}
} catch (error) {
    console.log(error.responseError);
    jokesBlock.classList.add("error");
    if(error.responseError) {
    jokesBlock.textContent = `${error.responseError.code} ${error.responseError.message}`;
} else {
    jokesBlock.textContent = "Error: Internet is disconnected.";
}
}
};
// setInterval(getJoke, 50);

getJokesButton.addEventListener("click", getJoke);