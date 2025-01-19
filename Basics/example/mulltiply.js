// One of the possible solutions. 
// Can you do it in a better way?

process.stdin.setEncoding('utf8');
process.stdin.on('data', function(input) {
  var n = parseInt(input.trim()); 
  console.log(n, "x 1 =", n*1);
  console.log(n, "x 2 =", n*2);
  console.log(n, "x 3 =", n*3);
  console.log(n, "x 4 =", n*4);
  console.log(n, "x 5 =", n*5);
  console.log(n, "x 6 =", n*6);
  console.log(n, "x 7 =", n*7);
  console.log(n, "x 8 =", n*8);
  console.log(n, "x 9 =", n*9);
  console.log(n, "x 10 =", n*10);
});
