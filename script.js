
const choices = document.querySelectorAll('.gomb'); // Választási gombok
const resultText = document.getElementById('eredmeny-szoveg'); // Eredmény szöveg
const playerChoiceDisplay = document.getElementById('jatekos-valasztas'); // Játékos választása
const computerChoiceDisplay = document.getElementById('gep-valasztas'); // Számítógép választása
const playerScoreDisplay = document.getElementById('jatekos-pont'); // Játékos pontszám
const computerScoreDisplay = document.getElementById('gep-pont'); // Számítógép pontszám
const resetBtn = document.getElementById('ujrakezdes'); // Reset gomb

let playerScore = 0;
let computerScore = 0;


const options = ['rock', 'paper', 'scissors'];

/*emojik*/
const emojis = {
    rock: '🪨',
    paper: '📄',
    scissors: '✂️'
};


choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const playerChoice = choice.dataset.choice;
        const computerChoice = options[Math.floor(Math.random() * 3)];
        playRound(playerChoice, computerChoice);
    });
});


function playRound(playerChoice, computerChoice) {
    
    playerChoiceDisplay.textContent = emojis[playerChoice];
    computerChoiceDisplay.textContent = emojis[computerChoice];

    // Döntetlen eset
    if (playerChoice === computerChoice) {
        resultText.textContent = "Döntetlen!";
    }
    // Játékos nyerési
    else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultText.textContent = "Nyertél!";
        playerScore++; 
        playerScoreDisplay.textContent = playerScore; 
    }
   
    else {
        resultText.textContent = "Vesztettél!";
        computerScore++; 
        computerScoreDisplay.textContent = computerScore; 
    }
}

// Reset gomb 
resetBtn.addEventListener('click', () => {
    
    playerScore = 0;
    computerScore = 0;
    
    playerScoreDisplay.textContent = '0';
    computerScoreDisplay.textContent = '0';
   
    resultText.textContent = '';
    playerChoiceDisplay.textContent = '';
    computerChoiceDisplay.textContent = '';
});
