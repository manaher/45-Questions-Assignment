// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
var guest = ["Emaan", "Nadia", "Rukhsana"];
guest.map(function (item) { return console.log(item, "you are invited to dinner at my place"); });
var canNotAttend = "Emaan";
console.log(canNotAttend, "can not make it for dinner");
var newGuest = "Rizwana";
guest[guest.indexOf(canNotAttend)] = newGuest;
console.log(guest);
guest.map(function (item) { return console.log(item, "you are invited to dinner at my place"); });
console.log("Welcome all! We have found a bigger dinner table");
guest.unshift("Farzana");
console.log(guest);
var middleGuest = "Saba";
var middleIndex = guest.length / 2;
guest.splice(middleIndex, 0, middleGuest);
guest.push("Areeba");
console.log(guest);
guest.map(function (item) { return console.log(item, "you are invited for a grand dinner"); });
// Q17 INFORMING ABOUT INVITING ONLY TWO
console.log("Sorry from my side to all of you the big table is not available so I can only invite two guests");
// REMOVING NAMES FROM ARRAY OF GUEST
while (guest.length > 2) {
    var removeGuest = guest.pop();
    console.log("\nSorry ".concat(removeGuest, " I can't invite you to dinner!"));
}
// PRINT MESSAGE TO REMAINING GUEST
guest.map(function (item) { return console.log("\n".concat(item, " you are still invited to dinner.")); });
// REMOVE ALL THE GUEST
while (guest.length > 0) {
    guest.pop();
    console.log(guest);
}
