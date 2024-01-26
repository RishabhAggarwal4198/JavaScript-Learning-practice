
// 💎✅💎LOOPs💎✅💎 (also called ITERATIONS)


// 💎✅💎 FOR - LOOP 👇👇

// basic- Syntax 👇

// for (let index = 0; index < array.length; index++) {
//     const element = array[index]; 
// }


for (let i = 0; i <= 5; i++){
	// console.log(`The value is : ${i}`);
}



//💎💎EXAMPLE - 1  (for - Loop) 👇    [✅how it gets executed watch @7:19:44]

// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     console.log(element);                         // 📍 Answer is  "0 1 2 3 4 5 6 7 8 9 10" 
// }

          // 🔽🔽

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);                        // 📍 Answer is  "0 1 2 3 4 5 6 7 8 9 10"
// }

// console.log(element);                            // 📍 Answer is  "ReferenceError: element is not defined"  
                                                    // ✅✅ bcoz variable element is defined uptill above scope only]







//💎💎 EXAMPLE - 2 (for - Loop)👇 [implementing IF-ELSE inside FOR-LOOP]

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is the best number");
    }

    // console.log(element);                      // 📍 Answer is  "0 1 2 3 4 5 is the best number 5 6 7 8 9 10"
}







// 💎💎 EXAMPLE - 3 👇  [implementing FOR-LOOP inside FOR-LOOP]   [watch @7:27:58]

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);                                        // 📍Run the loop for answer
    for (let j = 0; j <= 10; j++){
        // console.log(`Inner loop value is ${j} and Outer loop value is ${i}`);    // 📍Run the loop for answer
    }                                                
}       

                    // 🔽🔽 (Mathematical Calculation)
                

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);         // 📍Run the loop for answer
    for (let j = 0; j <= 10; j++){
        //  console.log(i + '*' + 'j' + '=' + i*j);
                    // 🔽OR (much easier syntax)
        //  console.log(`${i} * ${j} = ${i*j}`);        // 📍Run the loop for answer
    }                                               
}

 


 

//💎💎 EXAMPLE - 4 👇 [implementing FOR-LOOP on an ARRAY]   

let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);          // 📍Answer is "3" 

for (let index = 0; index < myArray.length; index++) {    //✅✅[we have used "index" lesser then "myArray.length" bcoz a LOOP always iterates on the INDEX-VALUE ]
    const element = myArray[index];                       //✅✅ [@7:32:14]
    // console.log(element);  
}








//💎✅💎 BREAK & CONTINUE 👇👇


//📍🍁📍 Break 👇 

for (let i = 1; i <= 20; i++)  {
    if (i == 5){ 
        // console.log(`Detected 5, not running further`);
        break;                             //✅  It will break the LOOP instantly over there only [ will not continue the loop after it]
    }
    // console.log(`Value of i is ${i}`);     //✅ Answer is "Value of i is 1
}                                           //              Value of i is 2
                                            //              Value of i is 3
                                            //              Value of i is 4
                                            //              Detected 5, not running further" 

    
//📍🍁📍 Continue 👇 

for (let i = 1; i <= 20; i++) {
    if (i == 5){
        // console.log(`Detected 5, running further`);
        continue;                                  // ✅ it will skip the condition for once  
    }
    // console.log(`Value of i is ${i}`);          // ✅ it will SKIP  that particular line [as mentioned in the condition] & will continue after that
}










//💎✅💎 WHILE - LOOP 👇👇  [watch @7:40:02] [it's an extended version of FOR-LOOP ]


let  index = 0

while(index <= 10) {
    // console.log(`Value of index is ${index}`);
    index = index + 2;                             // 📍 run the LOOP to see the result
}


// using WHILE-LOOP on an ARRAY 👇

let myArray1 = ['flash', "batman", "superman"]

let arr = 0

while (arr < myArray.length) {
        // console.log(`Value is ${myArray[arr]}`);
        arr = arr + 1                              // 📍 run the LOOP to see the result
}








//💎✅💎 DO - WHILE  LOOP 👇👇[it basically checks the CONDITION at the end]

let score1 = 1;
do{
    console.log(`Score is ${score1}`);          
    score1++
} while (score1 <= 10)                      // 📍 run the LOOP to see the result


    // 🔽🔽🔽( DO - WHILE  LOOP special case  [in this LOOP "print" command works first "condition" runs after that])


let score2 = 11;
do{
    // console.log(`Score is ${score2}`);   // 📍 Answer is "Score is 11" [bcoz in this case "console.log" got printed first but "condition" got checked later on]
    score2++
} while (score2 <= 10)  




