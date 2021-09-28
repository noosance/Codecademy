const getUserChoice = userChoice => {
  userChoice = userChoice.toLowerCase();
  if (userChoice === 'rock' || userChoice === 'paper' ||  userChoice === 'scissors' || userChoice === 'bomb') {
    return userChoice;
  }else {
    console.log('Error! Invalid selection.')
  }
}
const getComputerChoice = computerChoice => {
  computerChoice = Math.floor(Math.random() *3);
  switch (computerChoice){
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
  return 'The game is a tie!';
  } 
 if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
    return 'The computer won!';
  }else{
    return 'You won!';
    }
 }
 if (userChoice === 'paper') {
   if (computerChoice === 'scissors') {
    return 'The computer won!';
  }else{
    return 'You won!';
  }
}
 if (userChoice === 'scissors') {
   if (computerChoice === 'rock') {
    return 'The computer won!';
  }else{
    return 'You won!';
  }
}
 if (userChoice === 'bomb') {
    return 'You won!';
  }
} ;
const playGame = () => {
  const userChoice = 
    getUserChoice('rock');
  const computerChoice = 
    getComputerChoice();
  console.log(`You threw: ${userChoice}`);
  console.log(`The computer threw: ${computerChoice}`);

  console.log(determineWinner(userChoice, computerChoice));
};
playGame();












