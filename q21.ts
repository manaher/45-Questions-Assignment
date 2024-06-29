// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.


// Declaring the datatype of name and price so that we don't have to declare again nad again
interface item {
    name: string
    price: number
}

// Creating 2 objects
let book: item ={
    name: "Who moved my cheese?",
    price: 1000
}

let pen: item ={
    name: "Parker",
    price: 500
}

console.log(`Book name: ${book.name}, Book price: ${book.price}`);
console.log(`Pen name: ${pen.name}, Pen price: ${pen.price}`);

// This program defines an interface called item with two properties name (string) and price (number) then it creates two objects book na pen that implement the item interface and then it accesses and prints the values of the object properties.