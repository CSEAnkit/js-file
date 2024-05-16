// Object can be declared as a constructer and a literals 
// singleton  // jab bhi constuctor ki tarah banega to singleton banta hai

// Object.create // it is constuctor method 

// object literals

// object me key value pair ki tarah 
const mySym = Symbol("key1")


const JsUser = {
    name: "Ankit",
    "full name": "Ankit kumar pandey ",
    [mySym]: "mykey1", //way of using  symbol data type 
    age: 18,
    location: "Jaipur",
    email: "ankit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// Method to access the object element 

// console.log(JsUser.email)

// Another method to access the object key

// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])


JsUser.email = "hitesh@chatgpt.com" // can change 
// Object.freeze(JsUser) // now no one can change the object value 
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // same eobject ko reference karne ke liye
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());