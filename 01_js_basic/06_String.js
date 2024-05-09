const name = "Ankit"
const repoCount = 2
// First way to concatinate 
console.log(name + repoCount ) // Outdated way to write the concatenation 

// Second way to concatinate 
// String intrepolation  use backticks
console.log(`Hello my name is ${name} and my repo count is ${repoCount }`);


// Another way to declare string 
const gameName = new String('AnkitBaba') // basically key value pair go on console and write the code and enter
console.log(gameName[0])
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase()); // print in Upper case 
console.log(gameName.charAt(2)); // print which character is at index 2
console.log(gameName.charOf('t')); // print character index

const newString = gameName.substring(0,4)// It will print the string at index 0 to 4  negative value dene per bhi 0 se hi  start karta hai
console.log(newString); 

const anotherString = gameName.slice(-8, 4) // can give negative index
console.log(anotherString)

