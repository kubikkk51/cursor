const ukraine = { 
    tax: 0.195,
    middleSalary: 1789,
    vacancies: 11476 
};
const latvia = {
    tax: 0.25,
    middleSalary: 1586,
    vacancies: 3921 
};
const litva = {
    tax: 0.15,
    middleSalary: 1509,
    vacancies: 1114 
}

//1
function getMyTaxes(salary) {
    return this.tax * salary;
}

console.log( getMyTaxes.call( ukraine, 15000 ) );

//2
function getMiddleTaxes  (country) {
    return this.tax * this.middleSalary;
}
console.log( getMiddleTaxes.call(ukraine) );
//3
function getTotalTaxes  (country) {
  return this.tax * this.middleSalary * this.vacancies;
}
console.log( getTotalTaxes.call(ukraine) );
//4

function getMySalary (country) {
    const min = 1500;
    const max = 2000;
    const salary = Math.round( Math.random() * (max - min) + min) ;
    const taxes = Math.round( salary * this.tax) ;
    const profit = salary - taxes;
    return {
        salary: salary,
        taxes: taxes,
        profit: profit
    };
}
const result = setInterval(() => console.log( getMySalary.call(ukraine)), 10000 );
setTimeout(() => { clearInterval(result) }, 30000);