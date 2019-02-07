// there are 3 basic ways to declare variables in js

// Var, but don't use this one anymore
var test =  3;

// let, is like var, but block scoped, and not allowed to re-declare
let hello = 'world'; // Notice strings use single quotes
hello = 5; // changing the type of variable is okay, in this case string to number.

// const is a constant
const iAmAConstant = 9;

// objects
// variables can also be objects
const obj = {};

// objects can dynamically add and remove properties
obj.a = 9;

// For Practice

// declare an object with an object as a property
const obj2 = { whatever: obj, whatever2: { a: 'ok' } };
console.log(obj2);

// delete a property
delete obj2.whatever;
obj2.x = 'a brand new one';
console.log(obj2);

// change a property
obj.a = 'ok';
console.log(obj);