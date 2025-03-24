//Mainly used for snnipet of code
try{
    console.log(age);
    
} catch(error) {
    // gandle the error
    // error message
    console.log(error.message);
    
}

// opetional chaining

let person ={
    name: "bob",
    age: 76,

}
console.log(person?.job); // will  not break code
console.log(person.job); 

let error ={};

error?.firstName?.message

// nullish coalescence

 let image = "car"
let whatsappAvater = Image ?? "Avater image"

console.log(whatsappAvaterh);
