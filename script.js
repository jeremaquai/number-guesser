// Coded by Jeremaquai

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Generate a random number between 0 and 9
const generateTarget = () => {
    return Math.floor(Math.random() * 9)
};

// determine if the user or computer is closest to the secret number
const compareGuesses = (userGuess, computerGuess, target) => {
    let userDistance = Math.abs(target - userGuess);
    let computerDistance = Math.abs(target - computerGuess);
    if (userDistance <= computerDistance) {
        return true;
    } else {
        return false;
    }
};

// Update the score for the winner of the round
const updateScore = winner => {
    switch (winner) {
        case 'human':
            humanScore += 1;
            break;
        case 'computer':
            computerScore += 1;
            break;
    }
};

//
const advanceRound = () => {
    currentRoundNumber += 1;
};



// Test my functions
// updateScore('human')
// console.log(humanScore)
