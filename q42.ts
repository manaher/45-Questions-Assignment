// Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magicians: string[] = ["Brad", "Rameez", "Ainak wala jin"]

function show_magicians(greet: string) {
    for (let item of magicians) {
        console.log(greet,item);
    }
};

show_magicians ("The Great");

// ---------or-------------

// function make_great(magicians: string[]): void {
//     for (let i = 0; 1 < magicians.length; i++) {
//         magicians[i] = magicians[i] + ' The Great'
//     }
// }

// let magicians: string[] = ["Brad", "Rameez", "Ainak wala jin"]
// make_great(magicians)