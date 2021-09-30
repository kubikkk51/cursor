const eggsPrice = 15.678;
console.log ( "Яйца: " +  eggsPrice + " грн." );

const breadPrice = 123.965;
console.log ("Хлеб: " + breadPrice + " грн.");

const potatoPrice = 90.2345; 
console.log( "Картошка: " + potatoPrice + " грн." );

const maxNumber = Math.max( eggsPrice, breadPrice, potatoPrice );
console.log( "Максимальное число: "+ maxNumber );

const minNumber = Math.min ( eggsPrice, breadPrice, potatoPrice );
console.log( "Минимальное число: " + minNumber );

const sumOfProducts = ( eggsPrice + breadPrice + potatoPrice );
console.log( "Стоимость всех товаров: " + sumOfProducts + " грн." );

const roundingDown = ( Math.floor(eggsPrice) + Math.floor(breadPrice) + Math.floor(potatoPrice) ); 
console.log("Округленная стоимость товаров: " + roundingDown + " грн.");

const roundingToHundreds = ( Math.round(sumOfProducts/100) ) * 100;
console.log( "Округленная стоимость товаров до сотен: " + roundingToHundreds + " грн." );

const parityСheck = roundingDown % 2 === 0;
console.log( "Четное? " +parityСheck );

const totalAmountOfMoney = 500;
const remainder = totalAmountOfMoney - sumOfProducts;
console.log ( "Сдача с 500 грн: " + remainder + " грн." );

const averagePrice = (sumOfProducts/3).toFixed(2);
console.log ("Округленная до второго знака средняя цена: " + averagePrice + " грн.");

const discount = Math.round(Math.random ()*100);
console.log ( "Скидка " + discount );

const profit =   ( (sumOfProducts/2) - (discount*sumOfProducts/100) ).toFixed(2);
console.log ( "чистая прибіль " + profit + " грн." );




