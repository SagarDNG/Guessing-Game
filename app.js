const maxNum = document.getElementById("number");
const button = document.getElementById("button");
const span = document.getElementById("span");
const guessDiv = document.getElementById("guessDiv");
const guess = document.getElementById("guess");
const guessButton = document.getElementById("guessButton");
const p = document.getElementById("p");
let targetNum = 0;
let attempts = 0;

button.addEventListener('click', demo);

function demo() {
    guessDiv.classList.add("show");
    targetNum = Math.floor(Math.random() * maxNum.value) + 1;
    span.innerText = `Now, a Random number, between 1 & ${maxNum.value} is generated, guess that number`
}

guessButton.addEventListener('click', check);

function check() {
    attempts++;
    if (guess.value == targetNum) {
        p.innerHTML = `CONGRATS YOU WON! It took you ${attempts} guesses`;
        guess.value = '';

    }
    else if (guess.value > targetNum) {
        p.innerText = 'Your guess is Too High!';
        guess.value = '';
    }
    else if (guess.value < targetNum) {
        p.innerText = 'Your guess is Too Low!';
        guess.value = '';
    }
}
