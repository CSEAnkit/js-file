1   // array

const myArr = [0, 1, 2, 3, 6, 5] //JS KE array resizable hota hai
const myHeors = ["shaktiman", "naagraj"] // can be mix of data type 

const myArr2 = new Array(1, 2, 3, 4) // Another way to declare array
// console.log(myArr[1]); // zero based indexing
//shallow copy   -> actual reference banta  hai   and deep copy -> actual reference nhi banta hai copy banta hai


// Array methods

// myArr.push(6)   // Push the value which value we give
// myArr.push(7) 
// myArr.pop()  // removing the last element. 

// myArr.unshift(9) // Add at start position but  system over load  is increase because we want to shift all the element to the left side 

// myArr.shift() //Start wale element ko delete kar dega 

// console.log(myArr.includes(9));  // check weather 9 is in the array or not and it returns the true or false 
// console.log(myArr.indexOf(4));  // It checks at what index number is present and if not present then it will print -1

// const newArr = myArr.join()  // bind the array and convert it into string.

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // slice the array that means return some part of array in this include 1 and exclude 3 
// slice will not change the main array 
console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // It will change the main array  and  work as it is as a slice work but one thing that is different is it includes the range that means it also add 3 acording to this example.
console.log("C ", myArr);
console.log(myn2);
