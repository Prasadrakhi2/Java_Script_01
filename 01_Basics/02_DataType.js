"use strict";  //use all the new version js code

//alert(4+5)  //only use in the browsers

let name = "rakhi"  //only strings are writen in ""
console.log(typeof name)

let age = 18
console.log(typeof age)

// console.table([name,age])

// typeOf  => use to find the type of any variables

console.log(typeof null)  // type of null => object





/*Symbolls*/
const id = Symbol('124')
const anotherId = Symbol('124')
console.log(id == anotherId)   // Output = false  (Symbol take every values as a diffrent type)




/* ***** Arrays  ***** */
const arr = ["rakhi", "prasad"];
console.log(arr);



/* ***** Object ****** */
let object={
    name : "rakhi",
    class : 12,
}
console.log(object)


/* ****** Functions ***** */
const myFunctions = function(){
    console.log("hello world")
}
console.log(myFunctions)
