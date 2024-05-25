const name = "rakhi"
const value = 32

//concatination
console.log("my name is " + name + " and my value is " + value)

//but we use String interpolation ${} and backtrick ` `
console.log(`hello my name is ${name} and my value is ${value}`) 

const gameName = new String('rakhipr')  //it is like the array and give the indexing values also
console.log(gameName[1])   //give the 1st index value = a

console.log(gameName.__proto__)      //use 2 underscone and the function name for axis the function

console.log(gameName.toUpperCase())

console.log(gameName.length)

console.log(gameName.indexOf('p'))

console.log(gameName.substring(0,3))  //Output  -> rak

console.log(gameName.slice(-6,3))

const s1 = "   rakhi  "
console.log(s1);
console.log(s1.trim())   // trim()  -> this function remove the spaces

const url = "https://hitesh.com/hitesh%20coudhary"
console.log(url)
console.log(url.replace('%20', '-'))

console.log(url.includes('hitesh'))  // 1. true  -> if present  2.False -> if not present

const s3 = "rakhi-prasad-singh"
console.log(s3.split('-'))   // divide in parts Output-> 'rakhi' 'prasad' 'singh'
console.log(s3.lastIndexOf('a'))
