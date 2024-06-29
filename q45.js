// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function createCar(manufacture, model, optional) {
    return __assign({ manufacture: manufacture, model: model }, optional);
}
createCar("Honda", "Civic", { Color: "white", Year: 2024 });
console.log(createCar);
//is question me hum nay type ki command isliye use ki hai kyun k hum car k features k baray me bata rahay hain jab bhi hum kisi chez k features bata rahay hon  to type ki command use hoti hai
//is sawal mein arbitrary number ka matlab optional features hai or optional features ko key mein consider kiya jata hai [key: string]; any; iska matlab ye hai k key se hum nay optional feature declare kiya phir string se uski datatype batai or phir nay ilsiye likha k koi bhi optional feature ho sakta hai
