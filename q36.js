// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, message) {
    if (size === void 0) { size = "medium"; }
    if (message === void 0) { message = "You make my heart smile"; }
    console.log("We can make ".concat(size, " t-shirt with a ").concat(message, " written on it."));
}
make_shirt();
// make_shirt("medium","You make my heart smile");
//is ques k output me error arha hai
