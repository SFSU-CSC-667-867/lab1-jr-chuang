// Declaring with the function keyword
function hi() {
  console.log('Say Hello');
}

hi();

// arrow functions
const arrow = (test) => {
  console.log(test);
}

arrow('hi')

// for practice

// make an arrow function with no block body

const noBlock = (input) => input + 1;
console.log(noBlock(5));

// make a function that returns a function

const retFunc = (input) => (whatever) => whatever - 1;
const test = retFunc();
console.log(test(4));