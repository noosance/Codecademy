const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];
for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i])
  if (rapperArray[i] === "Notorious B.I.G."){
    break;
  }
}
console.log("And if you don't know, now you know.")



//write cleaner code with loops. You now know:

//Loops perform repetitive actions so we don’t have to code that process manually every time.
//How to write for loops with an iterator variable that increments or decrements
//How to use a for loop to iterate through an array
//A nested for loop is a loop inside another loop
//while loops allow for different types of stopping conditions
//Stopping conditions are crucial for avoiding infinite loops.
//do...while loops run code at least once— only checking the stopping condition after the first execution
//The break keyword allows programs to leave a loop during the execution of its block


const animal = 'cat';
 
for (let i = 0; i < animal.length; i++) {
  console.log(animal[i]);
  for (let j = 1; j < 4; j++) {
    console.log(j);
  }
}

//Result
//c 1 2 3 a 1 2 3 t 1 2 3