var userName = 'Jorgito';
userName ? console.log(`Hello, ${userName}!`) :  console.log('Hello!');
var userQuestion = 'Am I gonna pass Sekiro?';
userName ? console.log(`${userName} asks, "${userQuestion}"`) : console.log(`You ask the eightball, "${userQuestion}:`);
var randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
switch (randomNumber) {
  case 0:
    eightBall = 'Thats a fact';
    break;
  case 1:
    eightBall = 'The universe demands it be so';
    break;
  case 2:
    eightBall = 'Too high...ask later';
    break;
  case 3:
    eightBall = 'Your guess is as good as mine';
    break;
  case 4:
    eightBall = 'Yeah, no';
    break;
  case 5:
    eightBall = 'Negative';
    break;
  case 6:
    eightBall = 'Outlook isnt great, bud';
    break;
  case 7:
    eightBall = 'Lucky you! Thats a yes';
    break;}

console.log(eightBall)

//this comment is a test

const testing123 = a+b;
