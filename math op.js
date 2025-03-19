// MATH OBJECT
// squrt, power, round, floor, trumc, random

console.log(Math.sqrt(25)); // squre root

console.log(Math.pow(10, 2)); // multiply thenum

console.log(Math.round(1.09)); // round up to the nearest integer
 console.log(Math.ceil(2.5)); // always round up to the neartes number

 console.log(Math.floor(4.9)); // alwyas round down to the number

 console.log(Math.trunc(11.99)); // it totally remove the decimal point 

 // math .random generates numbers btwn 0-1

 console.log(Math.random());
 console.log(Math.trunc(Math.random)*11); // round to 10 

 console.log(Math.floor(Math.random()*10 +1)); // add 1 to it if it rands to zero

 // raffle draw
 let customers =['alex','danny','paulin','dev']

 let randomwinner =()=>{
     let randomNumber = Math.floor(Math.random()* customers.length)
     return customers(randomNumber)
 }
 console.log(randomwinner);
 
 // otp generator

 //min and max this returns the vaalues of obj
 
 console.log(Math.min(34, 4, 56,6.7));
 console.log(Math.max(34, 4, 56, 6.7));
 
 

 
 
 
 
 



