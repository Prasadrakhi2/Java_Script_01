
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (input) {
   console.log(input);
});


/*
*process.stdin.setEncoding('utf8'): This line sets the encoding for the standard input to UTF-8. It ensures that the input is treated as a UTF-8 encoded string, which is a common character encoding.

*process.stdin.on('data', function (input) {: This line sets up an event listener for the 'data' event on the standard input stream. The provided callback function will be executed whenever data is received on the standard input.


*/

/*
This JavaScript code listens for input on the standard input stream (stdin). When the user enters multiple lines of text, the 'data' event is triggered once for the input, and the provided callback function logs the complete input to the console.

*/




//2. trim
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(input) {
    const nums = input.trim().split('\n');
    let x = parseInt(nums[0]);
    let y = parseInt(nums[1]);
    // Complete the code
});

/*trim() to remove any leading or trailing whitespace. Then, it is split into an array using split('\n') (another string method in JavaScript).
The resulting array, nums, will contain two elements, where nums[0] is the first entered value, and nums[1] is the second entered value.

 */