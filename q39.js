// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return { city: city, country: country };
}
var pair1 = city_country("London", "UK");
var pair2 = city_country("Istanbul", "Turkey");
var pair3 = city_country("Dhaka", "Bangladesh");
console.log(pair1);
console.log(pair2);
console.log(pair3);
//------------------------or----------------------------
// function city_countryy(city : string, country: string) {
//     console.log(`${city}, ${country}`)
// }
// let pairr1 = city_country("London","UK")
// let pairr2 = city_country("Istanbul","Turkey")
// let pairr3 = city_country("Dhaka", "Bangladesh")
