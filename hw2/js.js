

let numberN;
do {
  numberN = +prompt ("Введите первое число" );
}
  while (numberN%1 !== 0 || isNaN(numberN));
 console.log (numberN);


let numberM;
do {
  numberM = +prompt ("Введите второе число" );
}
  while (numberM%1 !== 0 || isNaN(numberM));
 console.log (numberM);

const skipNumbers = confirm  ("Пропускать парные цифры ?");

let sum = 0;
for (let i = numberN; i <= numberM; i++) {
    if (skipNumbers && i%2 === 0) {
        continue;
        }
    else{
        sum += i;
    }
}
alert (`Сумма: ${sum}`);