

let numberN;
do {
  numberN = +prompt ("Введите первое число" );
}
  while (!Number.isInteger(numberN));
 console.log (numberN);


let numberM;
do {
  numberM = +prompt ("Введите второе число, ВТОРОЕ число больше чем ПЕРВОЕ" );
}
  while (!Number.isInteger(numberM) || numberN >= (numberM));
 console.log (numberM); 

const skipNumbers = confirm  ("Пропускать парные цифры ?");

let sum = 0;
for (let i = numberN; i <= numberM; i++) {
    if (skipNumbers && i % 2 === 0) {
        continue;
        }
    else{
        sum += i;
    }
}
alert (`Сумма: ${sum}`);