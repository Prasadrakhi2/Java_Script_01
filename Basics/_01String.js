//output
console.log(/*value*/ 12)

//variable
//1.var = The var keyword declares a variable globally or locally to an entire function, regardless of block scope.
//2.let = The let keyword declares a block-scoped variable, which means it is only accessible within the block or statement where it is defined.
//3.const = The const keyword declares a block-scoped variable that cannot be reassigned. It is a constant once assigned.

//Variables declared with let and var can be reassigned


//1.String = "", '', ``
var singleQuotedString = 'Hello, World!';
var doubleQuotedString = "JavaScript is fun!";
var backticksString = `You can use backticks too!`;

//2.convert into string
var x = 10;
var y = 12;
console.log(x.toString()+y.toString());
//or
console.log("" + x + y);


//3.finding length of the string
var txt = "NumeroTres";
console.log(txt.length);


//4.print the charecter of the string
var word = "Programming";
console.log(word.charAt(2));
console.log(word[4])

//5.replace the character in string - replace()  = replace only first occurence
var word = "Ocygen";
var newWord = word.replace('c','x');
console.log(newWord);


//6.String slice() = extracting a portion of the string
//1
var originalString = "Hello, World!";
var slicedString = originalString.slice(7, 12);
console.log(slicedString); // World

//2
let originalString = "Hello, World!";
let slicedString = originalString.slice(7);
console.log(slicedString); // World!

//3
let originalString = "Hello, World!";
let slicedString = originalString.slice(-6, -1);
console.log(slicedString); // World
