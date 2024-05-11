const score  = 400
const balance = new Number(100)
console.log(score)
console.log(balance)

console.log(balance.toString()) // Now it is converted into string  
console.log(balance.toString().length) // when it is converted into string then we can use all the string property

console.log(balance.toFixed(3))// Now maximum pricision value is 3 that means decimal ke baad kitna digit tak hoga .


const otherNumber = 123.9855
// use when you are clear that your maximum value prision digit is 3 
console.log(otherNumber.toPrecision(3))// that means total 3 digit ka hi pricision dega 


const hundred = 100000
console.log(hundred.toLocaleString())// now it will print comma seprated zero acording to usa standared 
console.log(hundred.toLocaleString('en-IN'))// now it will print comma seprated zero acording to indian standared 


/***************Maths ****************** */
// It is defalt libarary in the javaScript 
console.log(Math)
console.log(Math.abs(-4))// It woll print absolute value 
console.log(Math.round(5.7))
console.log(Math.ceil(9.8))
console.log(Math.floor(3.4))
// console.log(Math.sin(30))

console.log(Math.max(9,45,6,54,4))
console.log(Math.min(3, 4,5,2,2,22,34,444))

// imp 
console.log(Math.random());
console.log((Math.random()*10)+1)
const min = 10
const max =20
console.log(Math.floor(Math.random()*(max-min+1)) +min)


