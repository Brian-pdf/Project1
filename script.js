let wins = 0;
let ties = 0;
let losses = 0;


function playGame() {
    
    let roundsInput = prompt("How many rounds do you want to play?");
    let rounds = parseInt(roundsInput);

    
    if (isNaN(rounds) || rounds <= 0) {
        alert("Please enter a valid number of rounds.");
        return;
    }

    
    for (let i = 0; i < rounds; i++) {
        
        let userChoice = prompt("Enter 'r' for Rock, 'p' for Paper, or 's' for Scissors").toLowerCase();

        
        if (userChoice !== 'r' && userChoice !== 'p' && userChoice !== 's') {
            alert("Invalid choice! Please enter 'r', 'p', or 's'.");
            i--; 
            continue;
        }

        
        let computerChoice = Math.floor(Math.random() * 3);

        
        let result = "";
        if (
            (userChoice === 'r' && computerChoice === 2) ||
            (userChoice === 'p' && computerChoice === 0) ||
            (userChoice === 's' && computerChoice === 1)
        ) {
            wins++;
            result = "You win!";
        } else if (
            (userChoice === 'r' && computerChoice === 1) ||
            (userChoice === 'p' && computerChoice === 2) ||
            (userChoice === 's' && computerChoice === 0)
        ) {
            losses++;
            result = "You lose!";
        } else {
            ties++;
            result = "It's a tie!";
        }

        
        alert(result);
    }

    
    alert("Game over!\nWins: " + wins + "\nTies: " + ties + "\nLosses: " + losses);
}


playGame();