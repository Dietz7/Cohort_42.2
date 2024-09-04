let viewEpisodeButton = document.querySelector('#view-episode-button');
console.log(viewEpisodeButton);

let episodePicture = document.querySelector('.episode-picture-container > img');
console.log(episodePicture);

let episodeCard = document.querySelector('.episode-card');



let changePicture = ()=>{

    episodePicture.setAttribute("src", "./images/simpsons.png");
     // Method 4 how to change several styles thanks to .className
     // in CSS we must create one more class and add there new s
    episodeCard.className = 'episode-card episode-card_mod';
}

viewEpisodeButton.addEventListener('click', changePicture);
