// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let names:string[] = ["iqra","laveezah","mahnoor"];

let msg:string = "you are invited to dinner at my home"

console.log (`${names[0]} ${msg}`); 

// ----------------OR----------------

console.log (names[1] + " " + msg);
console.log (names[2] + " " + msg);

// Is sawal ko karnay k 2 tareeqay hain jis me 1st tareqa ye hai k hum names ko variable me array ki surat me store karwayen phir msg ko variable me store karwayen is k nad console me `` laga k ${name [index]} call karen phir ${msg} call KeyboardEvent

// Is k ilawa 2nd tareeqa ye hai k console me () k andar name[index] call kar k "space" plus karwayen phir msg vraibale plus karwayen dono ka output same hi hoga