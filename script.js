// DOM elemek kiválasztása
const choices = document.querySelectorAll('.gomb'); // Választási gombok
const resultText = document.getElementById('eredmeny-szoveg'); // Eredmény szöveg
const playerChoiceDisplay = document.getElementById('jatekos-valasztas'); // Játékos választása
const computerChoiceDisplay = document.getElementById('gep-valasztas'); // Számítógép választása
const playerScoreDisplay = document.getElementById('jatekos-pont'); // Játékos pontszám
const computerScoreDisplay = document.getElementById('gep-pont'); // Számítógép pontszám
const resetBtn = document.getElementById('ujrakezdes'); // Reset gomb

// Pontszámok kezdőértékei
let playerScore = 0;
let computerScore = 0;

// Lehetséges választások tömbje
const options = ['rock', 'paper', 'scissors'];

// Emoji társítás a választásokhoz
const emojis = {
    rock: '🪨',
    paper: '📄',
    scissors: '✂️'
};

// Eseménykezelő minden választási gombra
choices.forEach(choice => {
    choice.addEventListener('click', () => {
        // Játékos választásának lekérése a gomb attribútumából
        const playerChoice = choice.dataset.choice;
        // Számítógép véletlenszerű választása
        const computerChoice = options[Math.floor(Math.random() * 3)];
        // Kör lejátszása
        playRound(playerChoice, computerChoice);
    });
});

// Egy kör logikája
function playRound(playerChoice, computerChoice) {
    // Játékos és számítógép választásának megjelenítése emojival
    playerChoiceDisplay.textContent = emojis[playerChoice];
    computerChoiceDisplay.textContent = emojis[computerChoice];

    // Döntetlen eset
    if (playerChoice === computerChoice) {
        resultText.textContent = "Döntetlen!";
    }
    // Játékos nyerési feltételei
    else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultText.textContent = "Nyertél!";
        playerScore++; // Játékos pontszám növelése
        playerScoreDisplay.textContent = playerScore; // Frissítés a képernyőn
    }
    // Számítógép nyer
    else {
        resultText.textContent = "Vesztettél!";
        computerScore++; // Számítógép pontszám növelése
        computerScoreDisplay.textContent = computerScore; // Frissítés a képernyőn
    }
}

// Reset gomb eseménykezelője
resetBtn.addEventListener('click', () => {
    // Pontszámok nullázása
    playerScore = 0;
    computerScore = 0;
    // Kijelzők frissítése
    playerScoreDisplay.textContent = '0';
    computerScoreDisplay.textContent = '0';
    // Eredmény és választások törlése
    resultText.textContent = '';
    playerChoiceDisplay.textContent = '';
    computerChoiceDisplay.textContent = '';
});