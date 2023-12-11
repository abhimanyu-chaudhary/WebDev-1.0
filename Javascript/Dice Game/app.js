function roll(){
    let dice = document.getElementById('dice');
    let random = Math.floor(Math.random()*6);
    dice.classList.add('animate-dice');
    dice.innerText = '';
    
    let diceaudio = document.getElementById('diceaudio');
    diceaudio.play();

    setTimeout(() => {
        dice.classList.remove('animate-dice');
        dice.innerText = random + 1;
    }, 1000);
}