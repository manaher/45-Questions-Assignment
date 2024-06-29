// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.


// TEST 1 EQUALITY COMPARISON (True)
let car: string = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru') // true

// double is equal to (==) check karnay keliye lagatay hain k statement true hai ya false

// DATATYPE
// string, bullean, number, any

//TEST 1 EQUALITY COMPARISON (True)
console.log("Is car == 'subaru'? I predict true.")

// TEST 2 STRTICT EQUALITY COMPARISON (True)
console.log ("Is car === 'subaru'? I predict true");
console.log(car==='subaru'); //true

// TEST 3 INEQUALITY COMPARISON (False)
console.log("Is car != 'subaru' I predict false."); //(!=) is ka matlab hai is not equat to
console.log(car !='subaru'); //false

// TEST 4 STRTICT INEQUALITY COMPARISON (False)
console.log("Is car !== 'subaru' I predict false.");
console.log(car !=='subaru'); //false

// TEST 5 LESS THAN COMPARISON (False)
console.log("Is car < 'subaru' I predict false.");
console.log(car <'subaru'); //false

// TEST 6 GREATER THAN COMPARISON (False)
console.log("Is car > 'subaru' I predict false.");
console.log(car >'subaru'); //false

// TEST 7 LESS THAN OR EQUAL COMPARISON (True)
console.log("Is car <= 'subaru' I predict true.");
console.log(car <= 'subaru'); //true

// TEST 8 GREATER THAN OR EQUAL COMPARISON (True)
console.log("Is car >= 'subaru' I predict tree.");
console.log(car >= 'subaru'); //true

//TEST 9 CHECKING TRUTHNESS (True)
console.log("Is car? I predict true");
console.log(car); //true (non-empty string is truthy)