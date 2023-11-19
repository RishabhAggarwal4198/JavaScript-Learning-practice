
let myDate =  new Date ();

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate = new Date (2023, 0, 23); 
// console.log(myCreatedDate.toDateString());  // Answer is "Mon Jan 23 2023"


let myCreatedDate2 = new Date (2024, 3, 25, 5, 3);
// console.log(myCreatedDate2.toLocaleString()); // Answer is "25/4/2024, 5:03:00 am"


let myCreatedDate3 = new Date ("01-14-2023");
// console.log(myCreatedDate3.toLocaleString()); // Answer is "14/1/2023, 12:00:00 am"


let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Date.now());










