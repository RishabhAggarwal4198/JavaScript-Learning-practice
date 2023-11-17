
let score = "33";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score); // for Conversion of the "score" variable into numbers
console.log(typeof valueInNumber);

let score_2 = "44abc";

console.log(typeof score_2);

let valueInNumber_2 = Number (score_2);
console.log(typeof valueInNumber_2);
console.log(valueInNumber_2);  // it shows "NaN" i.e. NOT A NUMBER

// "33" => 33
// "33abc" => NaN
// true => 1;  false => 0;


