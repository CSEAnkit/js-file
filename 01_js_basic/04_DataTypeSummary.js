//  primitive data type 
// 7 types : call by value work. 
// String , Number,Boolean, null, undefined, Symbol, BigInt.

// Non primitive or (reference) 
// Array , Objects,Functions

// JavaScript is a dynamictype of langauge.

let Id = Symbol('123')
let AnotherId = Symbol('123') 
// Both Symbols are not same 
console.log(Id === AnotherId)
console.log(Id)
console.log(AnotherId)

// Derived 

const heros = ["shaktiman", "nagraj","doga"];
let myObj = {
    name: "Ankit",
    Age:"20"
}

console.log(typeof myObj)
const myFunction = function(){
    console.log("Hello world")
}
console.log(typeof myFunction)

let BigInt= 2987975789475n
console.log(BigInt)