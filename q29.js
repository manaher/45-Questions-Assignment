// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
var favorite_fruit = ['apple', 'mango', 'orange'];
if (favorite_fruit.includes('apple')) {
    console.log("I really like apples");
}
if (favorite_fruit.includes('mango')) {
    console.log("I really like mangoes");
}
if (favorite_fruit.includes('orange')) {
    console.log("I really like oranges");
}
if (favorite_fruit.includes('grapes')) {
    console.log("I really like grapes");
}
if (favorite_fruit.includes('banana')) {
    console.log("I really like banana");
}
//.includes ka kya ye k hai ye check karwata hai k () k andar jo particular fruit likha hai wo array me mojood hai ya nahi
