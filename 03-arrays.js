// Javascript Arrays

//Creating an array

let fruits = ["apple", "banana", "mango"];
console.log("Original fruits:", fruits);

//Adding a fruit
fruits.push("kiwi"); //adds to end
console.log("After push:" , fruits);


fruits.pop(); //removes kiwi
console.log("After pop:" , fruits);

//Looping through fruits
fruits.forEach((fruit, index) => {
    console.log(index,fruit);
});

//Mapping : male all fruits to uppercase
let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log("Uppercase fruits:" , upperFruits);

//Filtering: only fruits with length<=5
let shortFruits = fruits.filter(fruit => fruit.length <= 5);
console.log("Short fruits:" , shortFruits);