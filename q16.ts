// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

// OLD LIST OF GUESTS

let guest:string[] = ["Emaan", "Nadia", "Rukhsana"];
guest.map ((item)=> console.log(item, "you are invited to dinner at my place"));

// PRINTING STATEMENT FOR THE PERSON THAT IS NOT COMING

let canNotAttend: string = "Emaan"
console.log (canNotAttend, "can not make it for dinner");

// MODIFYING LIST

let newGuest: string = "Rizwana";
guest[guest.indexOf(canNotAttend)]=newGuest;
console.log(guest);
guest.map ((item)=> console.log(item, "you are invited to dinner at my place"));

// Q16 INFORMING ABOUT BIGGER DINNER TABLE
console.log("Welcome all! We have found a bigger dinner table");

// ADDING NEW GUEST AT BEGINNING OF ARRAY
guest.unshift("Farzana");
console .log(guest);

// ADDING NEW GUEST IN MIDDLE
let middleGuest: string = "Saba";
let middleIndex = guest.length/2;
guest.splice(middleIndex,0,middleGuest)
// splice() k andar 1st jagah pe ye batana hota hai k new name enter kahan krna hai 2nd place pe us word ka index bataty hain jo delete karna ho agar kuch na delete karn aho tom 0 likhtay hain, is k ilawa 3rd jagah pe wo naam likhtay hain jo enter krna ho naam ko variable me store bhi karwa saktay hain or "" me direct bhi likh saktay hain

console.log (guest);

// ---------OR------------
// let middleIndex = guest.length/2;
// guest.splice(middleIndex,0,"Saba")
// console.log (guest); agar hum new person k name ko variable me store nahi karwayen to hum direct bhi "" me likh k print karwa saktay hain

// ADDING NEW GUEST IN LAST
guest.push("Areeba");
console.log(guest);

// PRINTING MESSAGE TO EACH
guest.map((item)=> console.log( item,"you are invited for a grand dinner"));