const marvel_heros = ["thor", "Ironman", "spiderman"] //type of object is object 
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // it will add array as a data that means it will add  dc_heros arrary as a element in the array 

// console.log(marvel_heros);
// console.log( typeof marvel_heros);
// console.log( typeof dc_heros);


// console.log(marvel_heros[3][1]); // This is because of that because of nested arrar in the array  

// concat returns the new array while push perform on same array
// const allHeros = marvel_heros.concat(dc_heros) // it will contatinate the dc_heros
// console.log(allHeros);

// Soread operator 
// const all_new_heros = [...marvel_heros, ...dc_heros] // now all the element of the array is individual not an array

// // console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity) // Returns a new array wieh all sub array elements concatenated into it  recursively up to the specified depth
// flat ke andar actual depdth dena chahiye means number not infinity
// console.log(real_another_array);



// console.log(Array.isArray("Hitesh")) // checks array are not and returns boolean 
// console.log(Array.from("Hitesh")) // convert into the array  
// console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // Returns a new array from the set of elements.