// Data types example

//Primitive types

let myName = "Affu"; //string
let age = 20;  // number
let isHappy = true;  //boolean
let something = null; //null(intentional absence)
let somethingElse;   //undefined(not assigned)
let symbol = Symbol("id");   //unique identifier
let bigInt =1234567891223445699607n;  //big integer

console.log(typeof myName);
console.log(typeof age);          // number
console.log(typeof isHappy);      // boolean
console.log(typeof something);    // object (weird JS behavior)
console.log(typeof somethingElse); // undefined
console.log(typeof symbol);       // symbol
console.log(typeof bigInt);       //bigint