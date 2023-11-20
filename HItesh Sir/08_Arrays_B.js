const marvel_heros = ["thor", "Ironman", "spiderman" ];

const dc_heros = [ "superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // 📍 it gonna push the whole ARRAY (dc_heros) to the last part of it

// console.log(marvel_heros) //📍 Answer is "[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]"

// console.log(marvel_heros[3] [2]) // 📍 (Answer is "batman" ) If we wanted to accces the 2nd value of the 3rd element




// const allHeros = marvel_heros.concat(dc_heros); // 📍 it adds thw whole ARRAY at the last of an existing ARRAY properly

// console.log(allHeros);   // 📍 (Answer is "[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]")




// MUCH MORE PREFFERED METHOD FOR ADDING TWO "STRINGS" 👇👇

// const all_new_heros = [...dc_heros, ...marvel_heros]; // 📍 it ADDS multiple  ARRAYS  just by etering dots in front of them

// console.log(all_new_heros);  // 📍 Answer is "[ 'superman', 'flash', 'batman', 'thor', 'Ironman', 'spiderman' ]"






