// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0); // iss type se comparison nhi krna hai  bcz kabhi kabhi ye   zero aur  kabhi NaN
console.log(null == 0);
console.log(null >= 0);



 // why they give different result 
// equality check and comparision work diffrently
// comparision convert null to number and treating it as 0
// that's why null > o is false and null >= 0 is true

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === it is  strict check datatypes it will check data type as well as value 

console.log("2" === 2);