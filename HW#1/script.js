
  const eggs = 15.678;
  console.log("Яйца: " +  eggs +" грн.");

  const bread = 123.965;
  console.log("Хлеб: " + bread +" грн.")
  
  const potato = 90.2345; 
  console.log ("Картошка: "+ potato +" грн.");


  const maxNumber = Math.max( eggs, bread, potato);
  console.log ("Максимальное число: "+ maxNumber);

  const minNumber = Math.min( eggs, bread, potato);
  console.log("Минимальное число: "+minNumber);


  const together = (eggs + bread + potato);
  console.log("Стоимость всех товаров: "+together+" грн.");

  
  const roundingDown = (Math.floor( eggs ) + Math.floor(bread) + Math.floor(potato)); 
  console.log("Округленная стоимость товаров: " + roundingDown+ " грн.");


  const roundingToHundreds = (Math.round(together/100))*100;
  console.log("Округленная стоимость товаров до сотен: " +roundingToHundreds + " грн.");
 
  
  const parityСheck = roundingDown % 2 === 0;
  console.log("Четное? " +parityСheck);


  const remainder = 500 - together;
  console.log ("Сдача с 500 грн: "+ remainder + " грн.");


  const averagePrice = (together/3).toFixed(2);
  console.log ("Округленная до второго знака средняя цена: " + averagePrice + " грн.");

    const discount = Math.round(Math.random ()*100);
    console.log ("Скидка " + discount );
    
    const profit =   ((together/2)-(discount*together/100)).toFixed(2);
    console.log ( "чистая прибіль "+ profit + " грн.");




