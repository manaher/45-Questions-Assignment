// Alien Colors #3: Turn your if-else chain from Exercise 25-26 into an if-else chain.
//VERSION 1
// • If the alien is green, print a message that the player earned 5 points.
var alien_color = "green";
if (alien_color == "green") {
    console.log("the player earned 5 points.");
}
// • If the alien is yellow, print a message that the player earned 10 points.
else if (alien_color == "yellow") {
    console.log("the player earned 10 points.");
}
// • If the alien is red, print a message that the player earned 15 points.
else if (alien_color == "red") {
    console.log("the player earned 15 points");
}
else {
    console.log("please select the right color.");
}
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
//VERSION 2
var alien_color1 = "yellow";
if (alien_color1 == "green") {
    console.log("the player earned 5 points.");
}
else if (alien_color1 == "yellow") {
    console.log("the player earned 10 points.");
}
else if (alien_color1 == "red") {
    console.log("the player earned 15 points");
}
else {
    console.log("please select the right color.");
}
//VERSION 3
var alien_color2 = "pink";
if (alien_color2 == "green") {
    console.log("the player earned 5 points.");
}
else if (alien_color2 == "yellow") {
    console.log("the player earned 10 points.");
}
else if (alien_color2 == "red") {
    console.log("the player earned 15 points");
}
else {
    console.log("please select the right color.");
}
