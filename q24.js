//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
var car = "subaru";
var age = 25;
var numbers = [1, 2, 3, 4];
//Test for equality and inequality with strings
//1. Equality (true)
console.log("Is car == 'subaru'? I predict true.");
console.log(car == 'subaru');
//2. Strict equality (true)
console.log("Is car === 'subaru' I predict true");
console.log(car === 'subaru');
//3. Inquality (false)
console.log("Is car != 'subaru' I predict false.");
console.log(car != 'subaru');
//4. Strict inequality (false)
console.log("Is car !== 'subaru' i predict false.");
console.log(car !== 'subaru');
// Lowercase function tests
//5. Lowercase conversion
console.log("Is car.toLowerCase() == 'subaru'? I predict true.");
console.log(car.toLowerCase() == 'subaru');
//6. Lowercase conversion
console.log("Is car === car.lowercse()? I predict false");
console.log(car === car.toLowerCase()); // humara output true arha h kyun k hum ny car ki value store hi lowercase me ki hai
// Numerical tests
//7, Equality (true)
console.log("Is age == 25? I predict true");
console.log(age == 25); // true
//8. Inquality (true)
console.log("Is age != 30? I predict true");
console.log(age != 30); // true
//9. Greater than (false)
console.log("Is age > 30? I predict false");
console.log(age > 30);
//9. Less than or equal to (false)
console.log("Is age <= 25? I predict false");
console.log(age <= 25);
// Logical operators
//11. AND (true)
console.log("Is age > 20 && Age < 30? I predict true");
console.log(age > 20 && age < 30); // true (both conditions set)
//12. OR (false)
console.log("Is age > 30 || age < 18? I predict false");
console.log(age > 30 || age < 18); //false (neither condition set)
// Array tests
//13. In array (true)
console.log("Is  3 in numbers? I predict true");
console.log(3 in numbers); //true (check for index existence)
//14. not in array (false)
console.log("Is 5 in numbers? I predict false");
console.log(5 in numbers); // false bcz 5 not in numbers
//---------------or-------------
console.log("Is 5 not in numbers? I predict true");
console.log(5, not in numbers); // true
