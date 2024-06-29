// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

type car = {
    manufacture : string
    model: string
    [key: string]: any;
}

function createCar (manufacture: string, model: string, optional: Record<string, any>): car{
    return{
        manufacture,
        model,
        ...optional
    }
}

const myCar: car= createCar("Honda", "Civic", {Color: "white", Year: 2024})// color and year ko {}x me isliye likhai hai kyun k ye optional feactures thay or inhain array me batana tha

console.log(myCar)

//is question me hum nay type ki command isliye use ki hai kyun k hum car k features k baray me bata rahay hain jab bhi hum kisi chez k features bata rahay hon  to type ki command use hoti hai

//is sawal mein arbitrary number ka matlab optional features hai or optional features ko key mein consider kiya jata hai [key: string]; any; iska matlab ye hai k key se hum nay optional feature declare kiya phir string se uski datatype batai or phir nay ilsiye likha k koi bhi optional feature ho sakta hai
 
// optional: Record<string, any me record use kiya hai or ye tab use kiya jata hai jab hum ny recordbale string ko consider karna ho isky bad any isliye likha hai k optional feature kuch bhi ho skata hai

//iskay ad void kin jagah car ko declare isliye kiya hai kyun k hum nay is task me car hi lekar chalna tha car k ilawa koi or chez nahi thi
