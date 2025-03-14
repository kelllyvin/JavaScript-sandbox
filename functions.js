//FUNCTIONS AND HOW THEY WORK.
// FUNCTION DECLARATION
// TO WRITE A FUNCTION YOU WRITE
// FINCTION , FUNCTIONNAME AND(){}
// function DECELERATION
function logger() {
  console.log("hello world");
}
// you either call a function or invoke a function
logger();

logger();

// function welcomeuser (){
//     console.log("welcome user");

// }
// welcomeuser();
// function parameters. these are values or variables passed to the function to use
function welcomeuser(name) {
  console.log(`welcome${(name = "anon")}`);
}
welcomeuser("alex");
welcomeuser("paul");
welcomeuser("daniel");

// function to add two numbers
function addTwoNumbers(n1 = 0, n2 = 0) {
  const total = n1 + n2;
  console.log(total);
}
addTwoNumbers(34, 24);
addTwoNumbers(10, 23);
// write a function that computes the differnec between two numbers

function substractTwoNumbers(n1, n2) {
  console.log(n1 - n2);
}
substractTwoNumbers(23, 44);
substractTwoNumbers(55, 11);
/// write a function called wordconverter, that converts all alphabets
// to upppercase.

function wordconverter(word = "word") {
  console.log(word.toLocaleUpperCase());
}
wordconverter("cat");

// finction

function rePlaceAllE(word) {
  console.log(word.replaceall("e", "s"));
}
rePlaceAllE("elephant");

function rePlaceAllE(word) {
  console.log(word.toLowerCase().replaceAll("e", "*"));
}
rePlaceAllE("EYE");
// write a function called checklength, it returns the num of charthe function of

function checklength(word) {
  console.log(word.length);
}
checklength("save");
// write a func that returns the first char in the word provided

function char(word) {
  console.log(word.charAt(0));
}
char("difuse");
function name(firstname, lastname) {
  console.log(firstname.charAt(0) + lastname.charAt(0));
}
name("Ada", "peter");

// write a function that extract the first 5 letters provided

function letter(word) {
  console.log(word.substr(0, 5));
}
letter("donkey");

function num(number) {
  if (number > 0) {
    console.log("positive");
  } else {
    console.log("negative");
  }
}
num(number);

// function to a factory that provides a value

function sayhello() {
  return "say hello";
}
const val = sayhello();
console.log(val);

function multiplyTwoNumbers(n1, n2) {
  return n1 + n2;
}
console.log(multiplyTwoNumbers(19, 5));

// write a function that return the avarage of 3  numbers

function number (w1, w2, w3) {
  return (w1 + w2 + w3) / 3;
}
console.log(number(10,6,7));

// write a func that returns weeks to days

function weekSTo(weeks) {
  return weeks * 7;
}
/// func for hr to min

function hoursTomins(hours) {
  let mins = hours * 60;
  return`${hours} hours is equal to ${hours * 60} minutes`
}
console.log(hoursTomins(2));

// convart years to months and return a proper string
// two years is equal to months

function yerasToMonths(years){
    let months = years * 12
    return `${years} years is equal to ${ years * 12} months `
}
console.log(yerasToMonths(2));

function num5(){
       return 40
}
     

// FUNCTION EXPRESSION

const myName = function () {
    return "john"
}
console.log(myName());
const divideTwonums = function ( n1, n2){
    return n1 / n2;
}
console.log(divideTwonums(10, 34));

/// the difference between func deceleration and func expression is because of the 
// way it weas written.
// in functon expresion hosting cant happen because at the top
/// because its not decleared

removeella("email")
function removeella(word){
    console.log(word.replace("a", " "));
    
}
// arrow functions  let funcname = ()=>{}

    let myArrowfunc= () =>{
        console.log("Arrow Function");
    }
    myArrowfunc()


// write an arrow func that takes in two scores as a parameter
// your function should return differnt outcomes baseed on the score
// if score a is more than b return score a wins
  
let checkWinner = ( scoreA, scoreB) =>{
    if(scoreA > scoreB){
        return "scoreA wins"

    } else if( scoreA < scoreB){
        return "scoreB win"
    } else {
        return "it is a draw"
    }
}
console.log(checkWinner(345, 654));

// write a function called calculateBMI
// takes in body mass and height as a paramater
// the function should return the BMI index rounded to 2 decimal places
// weight divided by the square of height
// body = 70 h = 1.75

let calculateBMI = ( mass, height ) =>{
            let bmi = mass / height ** 2;
            return bmi.toFixed(2);
}
console.log(calculateBMI(70, 1.75));

// write a func using the result of the bmi calc above 
// to detarmin bmi category
// less than 18.5 is underweigght
// between 18.5 and 24.5 is normal weight
// between 25 and 29.9 is overweight
// anythin else is obese

let getBMIcategory = (bmi)=>{
    if(bmi < 18.5){
        return "underweight"
    } else if(bmi > 18.5  && bmi <= 24.5){
        return "normal weight"
    }else if(bmi >= 25 && bmi <= 29.9){
        return "overweight"
    }else {
        return "obese"
    }
    
}
 console.log( getBMIcategory (calculateBMI ( 70, 1.75)));


