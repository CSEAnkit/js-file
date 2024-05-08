// Note :> be focous on the type of number and what is stored in that and what happen after the conversion

// conversion into number 
let var1 = "232a"
let var2 ="23"
let var3 = null
let var4 =undefined
let var5 = true 
let var6 = "Ankit"

console.log(typeof(var1))
let var1InNumber = Number(var1) // way of converting into a number 

console.log(typeof(var1InNumber))
console.log(var1InNumber) // Here it is not na number bcz in var1 the value is 232a

let var2InNumber = Number(var2) 
console.log(var2InNumber) // Here it is  number bcz in var2 the value is 23 so the number is 23

let var3InNumber = Number(var3) 
console.log(var3InNumber)   // it will print 0

let var4InNumber = Number(var4) 
console.log(var4InNumber) // it will print NaN

let var5InNumber = Number(var5) 
console.log(var5InNumber) // it will print 1

let var6InNumber = Number(var6) 
console.log(var6InNumber) // it will print NaN

// To convert into the boolean just use Boolean at the place of Number 
// At the time of boolean when empty then it will print false
// 1=>true; 0=>false 
// "" => false
// "Ankit" => true


// To convert into the string just use String at the place of Number 

let str1= "@12"
console.log(typeof str1)
let strInString = String(str1)
console.log(strInString) 
console.log( typeof strInString) 
 


     /********************operation  **********/
     //+ 
    //  -
    //  *
    //  /
    //  ** for power calculation

    console.log(1+2)
    console.log("1"+2)
    console.log(1+"2")
    console.log(1+2+"2") // first added then append on the back side  (It will print 32)
    console.log("1"+2+2) // If string first then all treet as the string 
    
    console.log(+true)
    // console.log(true+)  gives error
    console.log(+"") // it will print 0
    console.log(+"ANKIT") // it will print NaN

    // console.log( type(+"ANKIT")) //  gives error type is not defined
    
    // about post  and pre fix 