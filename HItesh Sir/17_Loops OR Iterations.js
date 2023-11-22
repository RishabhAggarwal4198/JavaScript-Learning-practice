// FOR - LOOP 👇👇

// Syntax 👇

// for (let index = 0; index < array.length; index++) {
//     const element = array[index]; 
// }




// EXAMPLE - 1 👇

// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     console.log(element);                         // 📍 Answer is  "0 1 2 3 4 5 6 7 8 9 10"
    
// }



// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);                        // 📍 Answer is  "0 1 2 3 4 5 6 7 8 9 10"
// }

// console.log(element);                            // 📍 Answer is  "ReferenceError: element is not defined"  [bcoz variable element is defined uptill above scope only]





// EXAMPLE - 2 👇

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element ==5){
        // console.log("5 is the best number");
    }

    // console.log(element);                          // 📍 Answer is  "0 1 2 3 4 5 is the best number 5 6 7 8 9 10"
}








// EXAMPLE - 3 👇

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++){
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
    }                                                // 📍Run the loop for answer
}



// EXAMPLE - 4 👇

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++){
        //  console.log(i + '*' + 'j' + '=' + i*j);
                        // OR
        //  console.log(`${i} * ${j} = ${i*j}`);        // 📍Run the loop for answer
    }                                               
}





// EXAMPLE - 5 👇

let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);          // 📍Answer is "3" 

for (let index = 0; index <= myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}











// BREAK & CONTINUE 👇👇

// Break 👇 

for (let i = 1; i <= 20; i++)  {
    if (i == 5){
        // console.log(`Detected 5, not running further`);
        break;
    }
    // console.log(`Value of i is ${i}`);   //📍Answer is "Value of i is 1
}                                           //              Value of i is 2
                                            //              Value of i is 3
                                            //              Value of i is 4
                                            //              Detected 5, not running further" 






// Continue 👇 

for (let i = 1; i <= 20; i++) {
    if (i == 5){
        console.log(`Detected 5, running further`);
        continue;
    }
    console.log(`Value of i is ${i}`);
}