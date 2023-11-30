

let myDate =  new Date ();

// console.log(myDate.toString());          // 📍 Answer is "Wed Nov 29 2023 13:35:17 GMT+0530 (India Standard Time)"  
// console.log(myDate.toDateString()); 
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);            // 📍 Answer is "object" 

let myCreatedDate = new Date (2023, 0, 23); 
// console.log(myCreatedDate.toDateString());  //📍 Answer is "Mon Jan 23 2023"


let myCreatedDate2 = new Date (2024, 3, 25, 5, 3);
// console.log(myCreatedDate2.toLocaleString());  //📍Answer is "25/4/2024, 5:03:00 am"


let myCreatedDate3 = new Date ("01-14-2023");   //📍 [MM-DD-YYYY  format]
// console.log(myCreatedDate3.toLocaleString());   //📍 Answer is "14/1/2023, 12:00:00 am"



// When u want values between two NUMBERS only 👇 

let myTimeStamp = Date.now();

// console.log(myTimeStamp);       // 📍 Answer is "1701247039259" [its the millisecond value from 1st January 1970 uptill now]
// console.log(myCreatedDate.getTime());    // 📍 Answer is "1674412200000" [its the millisecond value from 01-14-2023 uptill now]



// console.log(Date.now());        // 📍 Answer is "1701247516567"

// console.log(Math.floor(Date.now()/10000000000)); // 📍 Answer will be "170" seconds




let newDate = new Date (2023, 2 , 22);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay()); 

// console.log(`${newDate.getDay()} is the time`);  

newDate.toLocaleString('default', {
    weekday: "long"
})



