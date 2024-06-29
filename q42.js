// Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var magicians = ["Brad", "Rameez", "Ainak wala jin"];
function show_magicians(greet) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var item = magicians_1[_i];
        console.log(greet, item);
    }
}
;
show_magicians("The Great");
