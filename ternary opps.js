// Ternary operators
// if else
// condition ? firdt action : second action

let myNumber = -50
myNumber > 0 ? console.log('positive') : console.log('negative');

// use a ternary to check if a number is odd or evevn

let myNumber2 = 49

 myNumber2 % 2 === 0 ? console.log("even") : console.log("odd");

 // Mr Mario has a car
 // mr mario does not have a car

 let hasAcar = true
 
 let sentence = `Mr Mario ${hasAcar ? "has" : "does not have"} a car`

 console.log(sentence);
 // Decelare avariable called isuserloggedin set to either true or falew
  
 let isuserloggedin = true
 
  isuserloggedin  ? console.log("welcome user") : console.log("user is looged out");
 
 // declare two variables bal and loanamount set to any value

   let balance = 30000
   let loanAamount = 4500

   // using a teneray operator to tell a user if they are eligible foe a loan or not
   // ths loan eligiblity criterian is that the amount of loan is 
   // twice the bal or not

loanAamount <= balance * 2
? console.log("eligible for loan")
: console.log( "Not eligeble");

// decelare savings and transca amount

let savings = 20000
 let transactionAmount = -9000

 // wriyte a to operator if trans is t or f

 transactionAmount > savings ? console.log("insufficient funds") : console.log("transaction sussceful");
 // if credit add it to the savings else substract
   transactionAmount > 0 ? (`credit alert of ${transactionAmount}`)
      : console.log(`debit alert of ${transactionAmount  }`);
      
 
 

 

