const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'cyan', 'lime', 'magenta'];

let correctColor;

function startGame() {
    correctColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('color-display').style.backgroundColor = correctColor;
    document.getElementById('result').textContent = "";
    generateButtons();
}

function generateButtons() {
    const buttonsContainer = document.getElementById('buttons-container');
    buttonsContainer.innerHTML = '';
    
    colors.forEach(color => {
        const button = document.createElement('button');
        button.textContent = color;
        button.style.backgroundColor = color;
        button.addEventListener('click', () => checkGuess(color));
        buttonsContainer.appendChild(button);
    });
}

function checkGuess(guess) {
    const result = document.getElementById('result');
    if (guess === correctColor) {
        result.textContent = "თქვენი პასუხი სწორია! 🎉";
    } else {
        result.textContent = "თქვენ შეცდით! გთხოვთ  სცადეთ კიდევ ერთხელ!";
    }
}

document.getElementById('new-game-button').addEventListener('click', startGame);

startGame();
