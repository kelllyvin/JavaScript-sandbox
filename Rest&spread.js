// REST AND SPREAD OPERATOR 
// ... THATS HOW ITS DENOTED

// rest operator

let user = {
    name: "john carter",
    age: 90,
    gender: "male"

}
// unstructured data type
let {... prop} = user
console.log(prop);

 // structured data type
let arr =[3,4,6,8] = user
let [... others] = user
console.log(others);

let countries =["togo","Cameroon","Gabon","Ghana", "Guinea"]; 
 let [x,... rest] = countries


 let product ={
    title: "Micheal Kors",
    price: 300,
    Image : "image"
 };
 let { price, ... property} = product;

// sperad operator 
// normally used to pick out values in an array

let detailedproduct ={
    stock: 6,
    color: "Red",
    weight: 13,
    category: "bags",
    ... product
}

console.log(detailedproduct);

let onlinestudent = ["ifeoma", "Buchi","Danny", "Evans"]

let physicalstudent = ["Terry","Harry","voldemont"]

let allstudents = [...onlinestudent, ...physicalstudent, "Ruud", "Seyi"]

