// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love Typescript"; }
    console.log("We can make ".concat(size, " t-shirt with message ").concat(message, " written on it."));
}
make_shirt(); //default
make_shirt("medium"); //customize size
make_shirt("X-large", "I want to be a programmar"); // customize both size and msg
