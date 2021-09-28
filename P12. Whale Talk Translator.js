//There are no consonants. Only vowels excluding “y”.
//The u‘s and e‘s are extra long, so we must double them in our program.

// ‘turpentine and turtles’ = ‘UUEEIEEAUUEE’ in whale talk


let input = 'turpentine and turtles';
let vowels = ['a', 'e', 'i', 'o', 'u']
let resultArray = [];

for (let i = 0; i < input.length; i++){
    for (let j = 0; j < vowels.length; j++){
    
      if (input[i] === vowels[j]){
      resultArray.push(vowels[j]);

      }
    }
    if (input[i] === 'e'){
    resultArray.push(input[i]);
    }
    if (input[i] === 'u'){
    resultArray.push(input[i]);
    }

}
console.log(resultArray.join('').toUpperCase());

//result: UUEEIEEAUUEE