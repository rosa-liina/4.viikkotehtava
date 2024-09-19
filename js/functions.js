
const getRandomIntNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


function rollDice() {
    const randomNumber = getRandomIntNumberInRange(1, 6);
    const diceImage = document.querySelector('#dice img');
    diceImage.src = `./img/noppa_${randomNumber}.png`;

}

// kuuntelija
document.getElementById('dice').addEventListener('click', rollDice);