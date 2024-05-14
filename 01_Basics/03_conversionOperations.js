let score="44"
console.log(typeof score)

let valueInNo = Number(score)   //convert the string in number
console.log(typeof valueInNo)
console.log(valueInNo)    // output = 44


let score1 = "44gf"
let valueInNo1 = Number(score1)
console.log(typeof valueInNo1)
console.log(valueInNo1)  // output => NaN (not a number)


let score2 = 44
let valueInString = String(score2)
console.log(typeof valueInString)  //output => String
console.log(valueInString)         // output =>  44   


let score3 = "rakhi"
let valueInNo3 = Number(score3)
console.log(typeof valueInNo3)      //Output => Number
console.log(valueInNo3)             //Output =>Nan

console.table([score, valueInNo, score1, valueInNo1, score2, valueInString, score3, valueInNo3])


let boolean = 1
let isBoolean = Boolean(boolean)
console.log(isBoolean)

/* output of the boolean conversion
  1 => true   ,  0 => false
  "" => false  , "value" => true
*/


/* ***************Opertations************* */

let value = 3
let negValue = -value
console.log(negValue)

console.log(2**3)  //2^3

console.log("1" + 2 +2)  //Output = 122  becouse it take the 1 input data type so it take string
console.log(1+2+"2")      //Output =32

console.log(+true)        //Output = 1  here type conversion occure