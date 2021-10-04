//1
const getMaxDigit = (number) => {
    return Math.max ( ...number.toString().split('') );
}
 

//2
let determiningTheDegreeOfNumber = ( number, stepen ) => {
    let result = number;
    for ( let i=1; i< stepen; i++ )
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
let pass = (lenth=8) => {
  return Math.random().toString().slice(-lenth);;
}



//
console.log( getMaxDigit(423) );
console.log ( determiningTheDegreeOfNumber (2,5) );
console.log( nameChange('mIsha') ) ;
console.log ( interestCalculation(8000) );
console.log( getRandomArbitrary(9,100) );
console.log( pass(5) );