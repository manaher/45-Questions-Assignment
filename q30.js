// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
var users = ['amna', 'sana', 'zara', 'rida', 'admin'];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello, ".concat(user, " thank you for logging in again"));
    }
}
//isme hum nay array me names store karwaye hain phir aik for loop banaya or kaha h k agar user admin hai to ye mag print karo or agar user admin k ilawa hai to dusra msg print karwayen
