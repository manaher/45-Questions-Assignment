// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!


//Storing and printing names
let animals : string[] = ['tiger', 'lion', 'cheetah']
for(let i = 0; i < animals.length; i++ ){
console.log(animals[i]);
}

//Printing statements
for(let i = 0; i < animals.length; i++ ){
console.log(`${animals[i]} is a very dangerous animal.`);
}

//Printing common character
console.log(`\nBoth the three animals are very dangerous and can cause harm to humans.`)