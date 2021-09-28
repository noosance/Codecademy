let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = value =>{
  return Math.floor(Math.random() *10);
}
let compareGuesses = (humanGuess, computerGuess,target)  =>{
 let humanGuessScore = Math.abs(humanGuess - target);
 let compGuessScore = Math.abs(computerGuess - target);

 if (compGuessScore < humanGuessScore){
   return false
 } if (humanGuessScore < compGuessScore){
   return true
 } if (compGuessScore === humanGuessScore){
   return true
 };
 }
const updateScore = winner =>{
 if (winner === 'human'){
   humanScore += 1
 } else if (winner ==='computer'){
   computerScore += 1
 }
 };


const advanceRound = value =>{
  return currentRoundNumber += 1
}

