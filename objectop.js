// objects describe a variable{key: value, key2: value2}

let person ={
    firstName:"john",
    lastName:"Doe",
    age: 45,
    isMarried: true,
    friends:["jane","Peter","Mark"],
    job:"Teacher",
    location:{
       street:"vinyard",
       area:"Lekki",
       City:"Lagos",
       zip: 10011,
       geolocation:{
        lat: 23.46,
        lng: 45.78
       }
    }
}
// getting properties from an object

// to get an object you can use dot notation and  objname.propertyName and bracket notation [properties.]

console.log(person.age);
console.log(person.firstName);
console.log(person.lastName.toUpperCase);

// bracket notation

console.log(person["age"]);
console.log(person["friends"]);
// templetrals i live at vinyard estate lekki lagos

console.log(`i live at ${person.location.street} estate${person.location.area}${person.location.city}`);

console.log(
    `i live at ${person.location.street} estate,${person.location.area}${person.location.city}`
);
// adding a new property to an object
// workplace

person.workplace ="Appolo Schools"
console.log(person);

// add a new property to the location object in the person object called landMark set to 
//city Mall

person.location.landmark ="cityMall"
console.log(person);

// removing property from an object
delete person.job

const user ={
    userName: "ade001",
    email:"ade@google.com",
    profilPic:"image",
    age: 25,
    isloggedin:false,
    isVerified:true,
    posts:["Nigeria just get as e be", "i love Food"],
     welcomeUser: function () {
  return this.isloggedin ? `welcome ${this.userName}`:"Log in to Continue";
},
verifyUser: function(){
    return this.isVerified ?`Verification successful`:`please verify to continue` 
}
}

/// object methods - devs write the function byself.

// when writhing an obj method we use a function decelareation 
// THIS is used to refare to an object

// write a function that welcomes a user or log in to continue

console.log(user.verifyUser);


let book = {
    title: "the subtle art of not giving a fuck",
    author:"Mark mason",
    yearPublish: 2020,
    rating: 5,
    similarAuthors:["bossman", "Kellyjarner", "Alex gustuf"],
    price: 500,
    genre: "selfimprovement",
    discription: function (){
       return `the book titled ${this.title} cost ${this.price} and it is a ${this.genre}`
    },
    recomendBook: function (){
        return this.rating > 3.5 ? `this book is recomended`:`Not recomended`
    }
}
console.log( book.discription());
console.log (book.recomendBook());



// obj.keys
// obj.values
// obj.entries

let transaction ={
    amount: 4000,
    date:"16/03/2025",
    charges: 25,
    refNum: "tranx- 13244567543",
    
}
console.log(Object.keys(transaction));
console.log(Object.values(transaction));
console.log(Object.entries(transaction));

let march ={
    teamA: "Wolfsburg",
    teamB: "Lecce",
    teamAScore: 3,
    teamBScore: 2,
    duration:96,
    corners:12,
    numofSubsUsed: 7,
    fouls: 14,
    stadium: "wembley",
    weather: "snowy",
 
winnerofmatch: function (){
    if( this.teamAScore > this.teamBScore){
          return `${this.teamA} won with the score of ${this.teamAScore}`
    }
      
    else if(this.teamBScore > this.teamAScore){
         return`${this.teamB} won with the match of ${this.teamAScore}`
    }
       else {
        return ` its draw`
       }
    },
    
overview: function() {
    return `the match between ${this.teamA} and ${this.teamB} was played at${this.stadium} in a${this.weather} condition`
}
}

console.log(march.winnerofmatch());
console.log(march.overview());

/// obj destructuring - we are getting properties from an object
// let { teamA, fouls, stadium, corners } = match;
// console.log(fouls, stadium, corners);
const property = {
    name: 'Exquisite Villa',
    rent: '2.3M/year',
    bedrooms:7,
    bathroom: 10,
    coutionfee: 5000,
    facilities: ["pool", "sauna","theaters", "gym"],
    location: {
    area: "gbagada",
    city: "lagos",
    num: 45,
    street: "charlyboy",
    geo:{
        lat: 100.27,
        lng: 45.78,
    }

    }
}
let {
    name,rent, location:{street, city, geo:{lng}},
} = property


const product ={
    price: 9.99,
    discount: 7.17

}
const {price, discount} = product;
let newprice = price -( discount / 100)* price;
 console.log(newprice.toFixed(2));
 