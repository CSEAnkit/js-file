//  primitive data type 
// 7 types : call by value work. 
// String , Number,Boolean, null, undefined, Symbol, BigInt.

// Non primitive or (reference) 
// Array , Objects,Functions

// JavaScript is a dynamic type of langauge.

let Id = Symbol('123')
let AnotherId = Symbol('123') 
// Both Symbols are not same 
console.log(Id === AnotherId) // It will print false.
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

 //********************************************************* */
 // Stack(Primitive) jo bhi variable define karenge uska copy hokar value milega 

 let myName = "Ankit"
 let myName1 = myName
 myName1 = "babaji"// It can not change the value of myName
 console.table([myName, myName1])


//   Heap(Non-primitive) original variable ka refrence milega 

let user1 = {
    email: "user@google.com",
    upid:"user@ybl"
}
let user2 = user1
user2.upid= "abc@ybl"  // It will change upid in user1 also bcz it store in heap memory and the actual refrence is given
console.log(user1)
console.log(user2)
let array1 =[2,345,5,65,4,65,4 ]
let array2= array1
array2[2]=54 // it will also change the value 
console.table([array1,array2])
