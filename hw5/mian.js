// 1
const getRandomArray = (length, min, max) => {
    const aarOfRandomNumbers = [];
    for ( let i = 0; i < length; i++ ) {
        aarOfRandomNumbers.push ( Math.round( Math.random() * (max - min) + min) );
    }
    return aarOfRandomNumbers;
}


//3

const getAverage = (...numbers) => {
    let arrayOfIntegers = numbers.filter( number => Number.isInteger(number) );
    return arrayOfIntegers.reduce(( sum, number ) => ( sum + number )) / arrayOfIntegers.length ;
}


//4
const getMedian = (...numbers) => {
     let arrayOfIntegers = numbers.filter( number => Number.isInteger(number) );
     arrayOfIntegers.sort();
     let i = arrayOfIntegers.length / 2 ;
     
     if ( arrayOfIntegers.length % 2 === 0 ){
         
         return ( arrayOfIntegers[i] + arrayOfIntegers[ i - 1 ] ) / 2;
         
     } else {
     
         return arrayOfIntegers [ Math.floor(i) ];
      
     }
     
}
 
//5
const filterEvenNumbers = (...numbers) => {
   return numbers.filter( number => number % 2 !== 0 );
}


//6
const countPositiveNumbers = (...numbers) => {
    const arrayOfPositiveNumbers = numbers.filter( number => number > 0 );
    return arrayOfPositiveNumbers.length;
    
}

//7
const getDividedByFive = (...numbers) => {
    return numbers.filter( number => number % 5 === 0 );
}



//8
const replaceBadWords = (string) => {
    const badWords = [ 'fuck', 'shit'];
    let result = string;
    for (words of badWords){
        result = result.split(words).join('****');
    }
    return result;
    

}
console.log(getRandomArray(15, 1, 100));
console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log(getMedian(1, 2, 3, 4));
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));
console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));
console.log(getDividedByFive(6, 2, 55, 11,  78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log(replaceBadWords('Are you fucking kidding? Holy shit!'));

