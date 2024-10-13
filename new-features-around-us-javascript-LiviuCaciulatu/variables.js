//The var statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value.
var x = 1;

if (x === 1) {
  var x = 2;

  console.log(x);
  // Expected output: 2
}

console.log(x);
// Expected output: 2


//The let declaration declares a block-scoped local variable, optionally initializing it to a value.
let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);
  // Expected output: 2
}

console.log(x);
// Expected output: 1

//The const declaration creates block-scoped constants, much like variables declared using the let keyword. 
//The value of a constant can't be changed through reassignment (i.e. by using the assignment operator), 
//and it can't be redeclared (i.e. through a variable declaration). 
//However, if a constant is an object or array its properties or items can be updated or removed.
const number = 42;

try {
  number = 99;
} catch (err) {
  console.log(err);
  // Expected output: TypeError: invalid assignment to const `number'
  // (Note: the exact output may be browser-dependent)
}

console.log(number);
// Expected output: 42

//A function creates a scope, so that (for example) a variable defined exclusively within the function cannot 
//be accessed from outside the function or within other functions. 
//For instance, the following is invalid:
function exampleFunction() {
    const x = "declared inside function"; // x can only be used in exampleFunction
    console.log("Inside function");
    console.log(x);
  }
  
  console.log(x); // Causes error

  //However, the following code is valid due to the variable being declared outside the function, making it global:
  const x = "declared outside function";

exampleFunction();

function exampleFunction() {
  console.log("Inside function");
  console.log(x);
}

console.log("Outside function");
console.log(x);

//Blocks only scope let and const declarations, but not var declarations.
{
    var x = 1;
  }
  console.log(x); // 1

{
    const x = 1;
  }
  console.log(x); // ReferenceError: x is not defined

  //A block statement is used to group zero or more statements. 
  //The block is delimited by a pair of braces ("curly brackets") and contains a list of zero or more statements and declarations.
  var x = 1;
  let y = 1;

if (true) {
  var x = 2;
  let y = 2;
}

console.log(x);
// Expected output: 2

console.log(y);
// Expected output: 1