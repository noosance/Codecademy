const validateCred = (array) => {
  let cardInv = array.slice().reverse();
     for (let i = 0; i < cardInv.length; i++) {
         if (i % 2 != 0) {
             cardInv[i] = cardInv[i] * 2;
         }
 
         if (cardInv[i] > 9) {
             cardInv[i] -= 9;
         }
     }
 
     let sum = cardInv.reduce((a, b) => a + b, 0);
 
     return sum % 10 === 0;
 }
 
 const findInvalidCards = (nestedArr) => {
   let invalidCards = [];
   for (array of nestedArr){
     if (!validateCred(array)){
       invalidCards.push(array);
     } 
   }
   console.log(invalidCards);
   return invalidCards;
 }
 
 const idInvalidCardCompanies = (nestedArr) => {
   const invalidCardCos = [];
   for (array of nestedArr){
     if ((array[0] == 3) && (invalidCardCos.indexOf('Amex') === -1)){
       invalidCardCos.push('Amex')
     } else if ((array[0] == 4) && (invalidCardCos.indexOf('Visa') === -1)){
       invalidCardCos.push('Visa')
     } else if ((array[0] == 6) && (invalidCardCos.indexOf('Discover') === -1)){
       invalidCardCos.push('Discover')
     } else if ((array[0] == 5) && (invalidCardCos.indexOf('Mastercard') === -1)){
       invalidCardCos.push('Mastercard')
     } 
       console.log(invalidCardCos)
     }
   
 
 }
 
 const testBatch1 = findInvalidCards(batch);
 console.log(testBatch1);
 
 idInvalidCardCompanies(testBatch1)
 