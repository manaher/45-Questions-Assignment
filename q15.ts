// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.


// OLD LIST OF GUESTS

let guest:string[] = ["Emaan", "Nadia", "Rukhsana"];
guest.map ((item)=> console.log(item, "you are invited to dinner at my place"));

// PRINTING STATEMENT FOR THE PERSON THAT IS NOT COMING

let canNotAttend: string = "Emaan"
console.log (canNotAttend, "can not make it for dinner")

// MODIFYING LIST

let newGuest: string = "Rizwana";
guest[guest.indexOf(canNotAttend)]=newGuest;
console.log(guest) 
// ye step karnay se list me emaan ki jagah rizwana ka naam replace hojayega

// PRINTING MESSAGE TO NEW LIST OF GUEST

guest.map ((item)=> console.log(item, "you are invited to dinner at my place"));
