// arrays are mostly denotaed by squar bracket
// arrays usually contain the same datatype

// empty arrays are mostly falsy values
let students = ["Davis","Danny","Dandy","Drugs","paulin","Louis","johnpaul"];
// array properies = length
console.log(students);
console.log(students.length);

// getting elements from an array position

console.log(students[0]);
console.log(students[2]);

// one can aslo change element in a array position
students[0] = "paul"
console.log(students);
students[3] = "Rufus"
console.log(students);
students[students.length - 1] ="Peter"
console.log(students);
// array methods
//methods to add and remove element from an array
//arrays are mostly called structured datatype
// to add or remove an array you can only  start from the front or from the back.
// to add you use Push and unshift [add or remove]
// push mostly adds element at the back
// while unshift add elements at the front

students.push("Louis");
students.push("Flora");
students.unshift("Emeka")
console.log(students);
students.push("danny","impulse", "obey" )

//pop removes the last element
// shift removes the element from the front

students.pop()
students.shift()

console.log(students);

//includes  this shows if an element is involved in an element
console.log(students.includes("Louis"));
// Last indexof Lastindedxof first or last occurance
console.log(students);

console.log(students.indexOf("Dandy"));
console.log(students.lastIndexOf("LouisDanny"));
console.log(students.at(2));

// EXTRACTING PORTIONS OF AN ARRAY
// USING SLICE(START AND END ( non-inclusive))
console.log(students.slice(0, 3));
console.log(students.slice(4, 5));

// METHODS TO CONVART ARRAYS TO STRINGS
// WE HAVE TWO METHOD//1 JOIN METHOD AND TOSTRING

console.log(students.join()); // you can specify a sperator
console.log(students.toString()); // will always be a comma

/// iterator  methods
// higher orderr metholds(functions)-
// it needs another paremter to work( callback fun)
// forEach, map, find, filter, some, every, reduce
// forEach - Executes a function for every element in an arrey
students.forEach((student) => {
    console.log(student.toUpperCase);
    
})
// give me the first letter for evewr student in the array

students.forEach((student) =>{
    console.log(student.charAt(0));
    
}) 

// map creeats a new array with the results of a function
let smallCasesStudent = students.map((student)=>{
    return student.toLowerCase()

})
console.log(smallCasesStudent);

// Filter - creats a new array with element that pass a search condition or a text

let myNums =[23,44,22,35,14,68,26,88]
 // get num that are > 30

 let greaterThan30 =myNums.filter((num) => {
    return num > 30
 })
 console.log(greaterThan30);
 
let numequal= myNums.filter((num )=>{
    return num >= 30
})
console.log(numequal);

 let evenNum = myNums.filter((num) =>{
    return num % 2 === 0
 })
 console.log(evenNum);
 let oddNum =myNums.filter((num)=>{
    return num %2 != 0
 })
 console.log(oddNum);
 
 let lengthgreaterthan6 = students.filter((student)=>{
    return student.length > 6
 })
 console.log(lengthgreaterthan6);
 let lengthgreaterthan = students.filter((student)=> student.length>6)
  console.log(lengthgreaterthan);
  console.log(students);
  
 
 // find returns the first element that passesa text or search condition
 let findgreaterthan30 = myNums.find((num)=> num > 30)
 console.log(greaterThan30);

 let findcharact = students.find((student)=> student .length === 5)
 console.log(findcharact);

 // some it returns true if at least one of every elemrnt passes a text 
 let ifsomeGreater30 = myNums.some((num)=> num > 30)
 console.log(ifsomeGreater30);
 
 //  and every - returns true if all element passes a text
 let ifeveryGreater30 = myNums.every((num)=> num > 30)
 console.log(ifeveryGreater30);
 
 
 // reverse
 let carBrands = ["Toyota","Rollsroyce","Ferrari","Tesla","BMW"]
 console.log(carBrands);
//  console.log(carBrands.reverse());
console.log(carBrands.sort());// a-z
console.log(carBrands.sort().reverse());

// sorting numbers 0 up up -0
let prices =[200,4000.3000,2300,1000]
console.log(prices.sort((a,b)=> a - b));// smallest to largest
console.log(prices.sort((a,b) => b - a)); /// Largest to smallest

// reduce = reduce every element in an anrray to a single value
// reduce takes in two values, callback function and a start point
let totalprice = prices.reduce((acc, curr)=> {
    return acc + curr;
}, 0)
console.log(totalprice);


/// concat
let africancountries =["Togo", "Mauritius"]
let asianCountries = ["Singapore", "Japan", "South Korea"]


let holidayLocation = africancountries.concat (asianCountries)
console.log(holidayLocation);

let Fruits = "Banana"
// split method on a string
console.log(Fruits.split(""));
console.log(Fruits.split("a"));

// fill() this fill an array with a given value


let value1 =(students)
console.log(students.fill("mattew", 2, 5));



// write a function that revarse a letter in a word

// cat --- tac

let reversword = (word)=>{
    return word.split("").reverse().join("")
}
console.log(reversword("cat"));
console.log(reversword("gel"));

function ispalindrome (word) {
    // defult everything to lowercase or uppercase
    return word.toLowerCase() === word.split("").reverse().join("").toLowerCase()
}
console.log(ispalindrome("Madam"));

// set - gives us a unique value in an array

const users = ["john","Dave","Nate","john","Dave","sam","Nate"];
console.log(new Set (users));












 
 
 

 
 
 














