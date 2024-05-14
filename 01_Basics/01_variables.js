//1
const accountId = 1234
//accountId = 456  //const can't be change
console.log(accountId)

//2
var name = "rakhi"
name = "prasad"    // var  can change
console.log(name)

//3
let emailId = "rakhi@gmail.com"
emailId = "prasad@gamil.com"  //can change
console.log(emailId)


/* 1. let = use within the scope (localy)
   2. var = use outside the scope (globaly)
   use let
*/


account = "rakhi"   //can be define like this nut wrong way

let city;  /*if we do not assing any value than it give the output as undefined*/


// for display all or the multiple outputs in the tabuler form
console.table([accountId,name,emailId,account, city])