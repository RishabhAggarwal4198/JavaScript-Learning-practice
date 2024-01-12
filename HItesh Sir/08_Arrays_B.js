const marvel_heros = ["thor", "Ironman", "spiderman" ];

const dc_heros = [ "superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // ❌📍❌ it not gonna merge both array but will push the whole ARRAY (dc_heros) to the last part of it
// console.log(marvel_heros) //📍 Answer is "[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]"

// console.log(marvel_heros[3] [2]) // 📍❌Answer is "batman" [ As 3rd element is an array in itself so If we want to accces the 2nd value of the 3rd element we have to write like that only]






//💎✅💎CONCAT-METHOD 👇👇 [for merging two ARRAYs]

// const allHeros = marvel_heros.concat(dc_heros); // ✅  it combines the whole two ARRAYs at the last of an existing ARRAY properly [without pushing it onto the last part]
                                                   // ✅   This method returns a whole NEW ARRAY [after combining them]
// console.log(allHeros);   // 📍 Answer is "[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]"






//💎✅💎SPREAD METHOD 👇👇 [ much PREFFERED & easy method for merging two "STRINGS"] (easier than "concat") 👇👇

const all_new_heros = [...dc_heros, ...marvel_heros]; // 📍 it ADDS multiple  ARRAYS  just by etering dots in front of them
// console.log(all_new_heros);  // 📍 Answer is "[ 'superman', 'flash', 'batman', 'thor', 'Ironman', 'spiderman' ]"

                                               // 🔽🔽 [We could also merge more than 2 ARRAYs using "SPREAD" method] 

let colorss = ["red", "green", "blue", "orange", "yellow"] 
const all_new_heros_1 = [...dc_heros, ...marvel_heros,...colorss]; // 📍 it ADDS multiple  ARRAYS  just by etering dots in front of them
// console.log(all_new_heros_1);  // 📍 Answer is "[ 'superman', 'flash', 'batman', 'thor', 'Ironman', 'spiderman', 'red', 'green',  'blue', 'orange',  'yellow']"                                             

 





//💎✅💎FLAT-METHOD 👇👇 [for making an exceptional case of an ARRAY (ARRAY INSIDE AN ARRAY) completely merged & flat]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]], "Raman", "Shyam"]  

const real_another_array = another_array.flat(1)         // ✅✅ it gonna spread the whole ARRAY upto a degree of 1 bracket deep [Here "1" represents the depth upto which we have to solve that]
// console.log(real_another_array);                         // 📍 Answer is " [1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5],'Raman','Shyam']"

                                                    // 🔽🔽

const real_another_array1 =  another_array.flat(Infinity)   // ✅✅ it gonna combine or spread  the whole ARRAY evenly upto the level of INFINITE deep [i.e. each & every level]
// console.log(real_another_array1);                        // 📍 Answer is " [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5,'Raman','Shyam']"





 
//💎✅💎  ASKING IF THE GIVEN VALUE IS ARRAY 👇👇
// console.log(Array.isArray("Rishabh"));  // 📍 Answer is "false"




// /💎✅💎 TO CONVERT & SPREAD A STRING TO AN "ARRAY" 👇👇
// console.log(Array.from("Rishabh")); // 📍 Answer is "['R', 'i', 's','h', 'a', 'b','h']"




// [ 🍁🍁💎🍁💎🍁🍁 IMPORTANT - CASE for Interviews 🍁🍁💎🍁💎🍁🍁]  👇👇
console.log(Array.from({name : "Rishabh"}));     // 📍  Answer is "[]" bcoz we havn't defined whether we have to make ARRAY from keys or values 





let score1 = 100
let score2 = 200
let score3 = 300

let combined = Array.of(score1, score2, score3);  // 📍 It gonna convert all three VARIABLES into one ARRAY
// console.log(combined);   // 📍 Answer is "[ 100, 200, 300 ]"




/*  📍 📍 📍 📍 📍 📍

 STUDY MORE ABOUT :-

 + Array.isArray
 + Array.from
 + Array.of

  📍 📍 📍 📍 📍 📍 */ 


