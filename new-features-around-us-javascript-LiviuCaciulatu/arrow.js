//Arrow Functions expression is a compact alternative to a traditional function expresion with semantic differences and 
//deliberate limitations in usage

const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  console.log(materials.map(material => material.length));
  // Expected output: Array [8, 6, 7, 9]


  //Traditional function decomposed into arrow function
// Traditional anonymous function
(function (a) {
    return a + 100;
  });
  
  // 1. Remove the word "function" and place arrow between the argument and opening body bracket
  (a) => {
    return a + 100;
  };
  
  // 2. Remove the body braces and word "return" — the return is implied.
  (a) => a + 100;
  
  // 3. Remove the parameter parentheses
  a => a + 100;

  //Arrow functions can have either a concise body or the usual block body.
  const func = (x) => x * x;
// concise body syntax, implied "return"

const func2 = (x, y) => {
  return x + y;
};
// with block body, explicit "return" needed


//Arrow function expressions should only be used for non-method functions because they do not have their own this. 
//Let's see what happens when we try to use them as methods:

"use strict";

const obj1 = {
  i: 10,
  b: () => console.log(this.i, this),
  c() {
    console.log(this.i, this);
  },
};

obj1.b(); // logs undefined, Window { /* … */ } (or the global object)
obj1.c(); // logs 10, Object { /* … */ }

//Another example involving Object.defineProperty():
"use strict";

const obj = {
  a: 10,
};

Object.defineProperty(obj, "b", {
  get: () => {
    console.log(this.a, typeof this.a, this); // undefined 'undefined' Window { /* … */ } (or the global object)
    return this.a + 10; // represents global object 'Window', therefore 'this.a' returns 'undefined'
  },
});
//using arrow functions

// An empty arrow function returns undefined
const empty = () => {};

(() => "foobar")();
// Returns "foobar"
// (this is an Immediately Invoked Function Expression)

const simple = (a) => (a > 15 ? 15 : a);
simple(16); // 15
simple(10); // 10

const max = (a, b) => (a > b ? a : b);

// Easy array filtering, mapping, etc.
const arr = [5, 6, 13, 0, 1, 18, 23];

const sum = arr.reduce((a, b) => a + b);
// 66

const even = arr.filter((v) => v % 2 === 0);
// [6, 0, 18]

const double = arr.map((v) => v * 2);
// [10, 12, 26, 0, 2, 36, 46]

// More concise promise chains
promise
  .then((a) => {
    // …
  })
  .then((b) => {
    // …
  });

// Parameterless arrow functions that are visually easier to parse
setTimeout(() => {
  console.log("I happen sooner");
  setTimeout(() => {
    // deeper code
    console.log("I happen later");
  }, 1);
}, 1);
