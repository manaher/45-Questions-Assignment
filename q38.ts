// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

function describe_city(nameOfCity : string, country: string) {
    console.log(`${nameOfCity} is in ${country}.`)
}

let city1 = describe_city("Sydney", "Australia");
let city2 = describe_city("Lahore", "Pakistan");
let city3 = describe_city("Mumbai", "India");

// Ye sawal ka 1st part hai isme hum nay function k anadr nameOfCity and country store vkarwaya hai lekin neechy jakar 3 different cities ko value assign kar k print karwaya hai

function describe_cityy(nameOfCity : string, country: string = "Pakistan") {
    console.log(`${nameOfCity} is in ${country}.`)
}

let cityy1 = describe_cityy("Karachi");
let cityy2 = describe_cityy("Lahore");
let cityy3 = describe_cityy("Mumbai", "India");

//ye sawal ka 2nd part hainisme hum nay function k andar nameOfCity and country store kiya hai lekin country ko aik default value bhi assign ki hai or neechy 2 cities wo li hain jo default country me aati hain isliye un k sath country nahi likhi or baki cities wo li hai jo default country m nahi aati isliye us k sath uski country likhi hai