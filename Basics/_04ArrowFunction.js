// Main function with an arrow function as a callback
function doSomething(callback) {
    console.log('Doing something...');
    
    // Calling back the arrow function
    callback();
  }
  
  // Using the main function with an arrow function as a callback
  doSomething(() => {
    console.log('Callback function called!');
  });
  /*
  doSomething is the main function.
  The arrow function () => { console.log('Callback function called!'); } is used as the callback.
  When doSomething is called with the arrow function as the callback, it logs "Doing something..." and then calls back the arrow function, which logs "Callback function called!".
  */