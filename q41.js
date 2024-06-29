// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
var magicians = ["Brad", "Rameez", "Ainak wala jin"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
show_magicians(magicians);
//Is sawal k output me function array k andar store huay names ko list ki tarhan print karwaye ga
