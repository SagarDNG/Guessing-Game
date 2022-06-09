const maxNum = document.getElementById("number");
const button = document.getElementById("button");
const guess = document.getElementById("guess");
const p = document.getElementById("p");

button.addEventListener('click', demo);

function demo() {
    guess.classList.add("show");
    const targetNum = Math.floor(Math.random() * maxNum.value) + 1;
    let attempts = 1;

    while (guess.value !== targetNum) {
        if (guess.value === 0) break;
        attempts++;
        if (guess.value > targetNum) {
            p.innerText = 'Your guess is Too high!'
        } else {
            p.innerText = 'Your guess is Too Low!'
        }
    }

    if (guess === 0) {
        p.innerText = "OK, YOU QUIT!";
    } else {
        p.innerText = "CONGRATS YOU WIN!";
        p.innerText = `You got it! It took you ${attempts} guesses`;
    }
}