const _ = {
  clamp(number, lower, upper){
    if (number < lower){
      number = lower;
      return number;
    } else if (number > upper){
      number = upper;
      return number;
    } else {
      return number;
    }
  }
};
// 1 - _.clamp() is defined - Passed!
// 2 - Returns in-range values unclamped - Passed!
// 3 - Clamps values by lower bound - Passed!
// 4 - Clamps values by upper bound - Passed!

const _ = {
  clamp(number, lower, upper){
   let lowerClampedValue = Math.max(number, lower);
   let clampedValue = Math.min(lowerClampedValue, upper);
   return clampedValue;    
 },
 inRange(number, start, end){
   if (end === undefined){
     temp = start;
     start = 0;
     end = temp;
   }
   if (start > end){
     temp = end;
     end = start;
     start = temp;
   }
   const isInRange = start <= number && number < end;
   return isInRange
 },
 words(string){
    const words = string.split(' ');
    return words;
  
  },
 pad(string, length){
   if (length <= string.length){
     return string;}         
   var startPaddingLength = Math.floor((length - string.length)/2);
   var endPaddingLength = length - startPaddingLength - string.length;
   const padding = ' ';
   var paddedString = padding.repeat(startPaddingLength) + string + padding.repeat(endPaddingLength);
     return paddedString
    },
 has(object, key){
    if (object[key] === undefined){
      return false;
    } else {return true}
   },
 invert(object){
   const invertedObject = {};
    for (let key in object){
      const originalValue = object[key];
      invertedObject[originalValue] = key;
    } 
    return invertedObject;

  },
  findKey(object, predicate){
    for (let key in object){
      let value = object[key];
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue === true){
        return key;
        break; 
      } 

    }
  },
  drop(array, n){
    if (n === undefined){
      n = 1;
    }
    let newArr = array.slice(n);
    return newArr;
  },
  dropWhile(array, predicate){
    const cb = (element, index) => {
     return !predicate(element, index, array);
          }
    let dropNumber = array.findIndex(cb);
    let droppedArray = this.drop(array,dropNumber);
    return droppedArray;
          
 },
  chunk(array, size=1){
     let arrayChunks = [];
     for (let i=0; i< array.length; i+= size){
       let arrayChunk = array.slice(i, i+size);
       arrayChunks.push(arrayChunk);
     }
     return arrayChunks
  
  },
}
        
  
  
        

    
