// STRINGS = are 
const firstName = "John"
const lastName = "Doe"

console.log( firstName.length)
console.log( lastName.length);
const myPassword = "iowiuuUE"
console.log(myPassword);
console.log(myPassword.length);

/// contatenation

const fulName = firstName + "" + lastName
console.log(fulName.length);

// string method - built in function that can be built on strings
const email = "dcsbbd@.co.uk"
//toUppercase and tolowercase
console.log(email.toUpperCase());
console.log(email.toLowerCase());

// indexOf, lastIndexof, charAt
console.log( email.charAt(1));
console.log(email. indexOf("o"));
console.log( email. lastIndexOf("o"));
// startswith true or false endsWith, includes
console.log(email.startsWith("J"));
console.log(email.endsWith("uk"));
console.log(email.includes("Doe". toLocaleLowerCase));
console.log(email.includes("doe"));
console.log(email.toUpperCase().includes(",co"));

// trim, trimstart and trimEnd ( remove white spaces)


const username = "   ade001   "
console.log(username.trim());
console.log(username.trimEnd());
console.log(username.trimStart());

///replace replaceAll
// 01*******98
const myName ="jane doe"
console.log(myName.replace("e", "*"));
console.log(myName.replaceAll("e", "*"));

// extracting portion on a string slice substring ( start, end) subsstr
console.log(myName.slice(0,3));// ane
console.log(myName.substring (0,3)); //ane

// substrstart, number of character
console.log(myName.substr(0, 5));

const accountNumber ="1234567890"
console.log(accountNumber.replace(accountNumber.substr(2, 6), "******"));

console.log(accountNumber.replace(accountNumber.slice(1, 7),"******" ));
const userName = "johnpaul"
console.log("welcome" +""+ userName.toUpperCase);

//concatenation
 const author = "jax Draxx"
 const book = "The Ghost"
 // jax Draxx wrote the book the ghost
 const sentence = author + "wrote the book" + book
 console.log(sentence);

 // template literals used to format inside of a string
 //``
 const sentence2 = `${author} wrote the book ${book.toLowerCase()}`


 const person = "Adam Sandler"
 const movie = "Romance Scam"

  const sentence3 =`${person.toUpperCase()} featured in the movie ${movie}`
  console.log(sentence3);

  const country = "china"
  console.log(country.length);
  console.log(country.toUpperCase());
  console.log(country.slice(0, 5));
  console.log(country.startsWith("e"));
  console.log(country.includes("h"));
  
const sentence4 = (`i live in ${country.toUpperCase}`)
  

  
  
  
  
  
  
 
 

























