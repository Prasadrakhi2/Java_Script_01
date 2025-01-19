// Main function
function greet(name, callback) {
  console.log("hello", name);
  
  // Calling back the callback function
  callback();
}

// Callback function
function sayGoodbye() {
  console.log('Goodbye!');
}

// Using the main function with a callback
greet('Alice', sayGoodbye);

/*
greet - is the main function.
sayGoodbye - is the callback function.
When greet is called with the name 'Alice' and sayGoodbye as the callback, it prints "Hello, Alice!" and then calls back the sayGoodbye function, which prints "Goodbye!".
*/