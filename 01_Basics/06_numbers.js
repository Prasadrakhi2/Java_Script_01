const num1 = 400
console.log(num1)

const num2 = new Number(200)
console.log(num2)

console.log(num2.toString())
console.log(num2.toString().length)
console.log(num2.toFixed(2))       // fixed the numbers Output->200.00
console.log(num2.toExponential())

const num4 = 123.586
console.log(num4.toPrecision(3))  //124
console.log(num4.toPrecision(4))  //123.6
console.log(num4.toPrecision(2))  //1.2e+2

const num5 = 1000000
console.log(num5.toLocaleString())      //output => 1,000,000 as per the amarican standard
console.log(num5.toLocaleString('en-IN'))    //output => 10,00,000 as per the indian standard


//  ++++++++++++  Math  +++++++++++
console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(5.2))     // Output-> 5
console.log(Math.round(5.7))     //Output->6
console.log(Math.ceil(5.2))      //Output -> 6  always give the upper limit
console.log(Math.floor(6.9))     //OUtput -> 6 give the lower value
console.log(Math.sqrt(25))
console.log(Math.min(4,8,6,2,5))
console.log(Math.max(4,8,6,2,5))

console.log(Math.random())   // always give the diffrent values    0.somthing
console.log((Math.random()*10) +1)   // to give the value always More the 1 

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min)) + min)   // to give the value always between min and max
console.log(Math.ceil(Math.random() * (max-min)) + min)


