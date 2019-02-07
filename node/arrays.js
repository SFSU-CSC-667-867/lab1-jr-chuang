// Arrays in js

// arrays can be delared explicitly
const array = [9, 3, 4];

// or with new keyword
const anotherArray = new Array(5);

// access array elements
console.log(array[0]);

// change elements
array[1] = 'hello';

// for practice

// use forEach

array.forEach( (a) => console.log(a) );

// use map

const whatever = array.map((a) => a + 1)
console.log(whatever);

// use pop

whatever.pop();
console.log(whatever);

// use push

whatever.push(77);
console.log(whatever);

// use shift

console.log(whatever.shift());
console.log(whatever);

// use unshift

console.log(whatever.unshift(3));
console.log(whatever);

// use filter

console.log(whatever.filter(a => a > 2));
console.log(whatever);
