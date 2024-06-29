// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let brand:string[] =["Honda","Toyota","Nissan","Mitsubishi","Ferrari"]
let message:string = "i would like to own a"

console.log (`I would like to own a ${brand[0]} car`)

// ------------------OR---------------------

console .log ("I would like to own a"+" "+brand[0])

// Isay bhi hum dono methods se print karwa saktay hain

console.log (message + " "+ brand[1])
console.log (message + " "+ brand[2])
console.log (message + " "+ brand[3])
console.log (message + " "+ brand[4])

// Yahan upar hum nay message ko bhi variable me store karwaya hai phir " " add kiya phir brnad[index]
// add ki

// MAP METHOD

brand.map((item)=> console.log("I would like to own a",item));

// Is method ko use karnay ka humain ye faida hai upar walay method se humain alag alag kar k sab brands ka code likhna paray ga lekin is method se aik bar code likhnay se sab print hojayega