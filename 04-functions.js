// Regular function
function greet(name){
    return 'Hello, ${name}!';
}
console.log(greet("Affu"));

//Function expression
const square = function(num){
    return num*num;
};

console.log("Square of 4:" , square(4));

//Arrow function 
const add = (a,b) => a+b;
console.log("Add 5+3" , add(5,3));

//Arrow fucntion with block body
const multiply = (a,b) => {
    const result = a*b;
    return result;
};

console.log("Multiply 2*3" , multiply(2,3));

//No parameter
const sayHi = () => "Hi there";
console.log(sayHi());