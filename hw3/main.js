//1
const getMaxDigit = (number) => {
    return Math.max ( ...number.toString().split('') );
}
 

//2
let determiningTheDegreeOfNumber = ( number, power ) => {
    let result = number;
    for ( let i = 1; i < power; i++ )
        result *= number ;
    return result;
}



//3
 let nameChange = (name) => { 
   return name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase();
     
}
 

//4  
let interestCalculation = (salary) => {
    return salary - (salary*(18+1.5)/100);
}



//5
let getRandomArbitrary = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}


//8
let generatePassword = (length=8) => {
  return Math.random().toString().slice(-length);;
}



//
console.log( "Фукнция №1 ", getMaxDigit(423) );
console.log ( "Фукнция №2 ", determiningTheDegreeOfNumber (2,5) );
console.log( "Фукнция №3 ", nameChange('mIsha') ) ;
console.log ( "Фукнция №4 ", interestCalculation(8000) );
console.log( "Фукнция №5 ", getRandomArbitrary(9,100) );
console.log( "Фукнция №6 ", generatePassword(5) );