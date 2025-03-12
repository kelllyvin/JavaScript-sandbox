//controlflow
// conditional statement
//if statement
//if(condition ){ 
// lines of code}
if(true){
    console.log("hello world"); 
}
//18+ // you are eligible to vote
const age = 23
if(age >= 18){
    console.log("you are eligible to vote");
    
}
const password = "kelvin2323"
// an of statement that logs password is strong to the 
// consloe if the password is 9 and above
if (password.length >=9){
    console.log("password is strong");
    
}
//if else statement
if(true){
    console.log("hello clas");
    
} else{
    console.log("goodbye class");
    
}
if(password.length >= 9){
    console.log("password is strong");
    
} else{
    console.log("password is weak");
    
}

    const amount = 10000;
    const balance = 7600;

    if(balance > amount){
        console.log("transaction sucessful");
        
    }else{
        console.log( "insufficent funds");
        
    }
    // decelear two variables user pin and enter pin

    const userpin = 1234
    const enterpin = 1234
// write a conditional statement that logs 
// pin cottect if the values are the same and incorrect pin if thet are not
if(userpin == enterpin){
    console.log( "pin correct");
    
}else{
    console.log("incorrect pin");
    
}

// decelare a variable calles email, 
// check if email is valid (@)
// if yes log vaid email else log invalied email

const email = "kelvin@456.com"
if(email.includes("@")){
    console.log("valid email");
    
}else{
    console.log("invalid email");
    
}
const score = 100
 if(score >= 50){
    console.log("you passed the exam");
    
 }else{
    console.log("you faild the exam");
    
 }
 const number = 50

 if(number > 0 ){
    console.log("positive");
    
 }else{
    console.log("negative");
    
 }
 const number1 = 40;
 const number2 = 20
 if(number1 > number2){
    console.log(`number1 ${number1} is greater than number2 ${number2}`);
    
 }else{
    console.log(`number2 ${number2} is greater than number1 ${number1}`);
    
 }
 const number4 = 74;
 if(number4 % 2 === 0){
    console.log(`${number4} is even`);
    
 }else{
    console.log(` ${number4} is odd`);
    
 }
 //write a program that checks 
 const discount =$100
 if(discount > $100){
      console.log("user eligible for discount");
    
      
 }else{
    console.log("user not eligible for discount");
    
 }
 // log a statement that looks like this
 // team a has an avarage score of 100
 const teamA = (54, +56, +78) / 3;
 const teamB = (67, +60, +82) / 3;

 // two teams teamA teamB competed in a sport
 // team a scored 54, 56,78
 // team b scored 67, 60 82

 
 
  console.log(`team A has an avarage score of $(teamA)` );
  console.log(`team B has an avarag3 score if $(teamB)`);

  // write  a program to dertermine the winner of the competition
  //if a wins log team a wins else team b wins
  if(teamA > teamB){
    console.log("teamA wins");
    
  }else{ "teamB wins"}
// write a program that tells if a statement should be in class
// or at home, the program uses a 24 clock 00-24
// the student should be in class between the hours of 10 and 16
  const time = 24
if(time < 10 && time < 16 ){
    console.log("you should be un class");
    
}else{
    console.log("Be at home");
    
}
// write a program that tells the charges on a account if  you spend more than 2500
// log 100 charge if its above 2500
// and 50 if charge is lower than 2500  


const transation = 5000
 if(transaction > 2500){
    console.log("charge of 100");

    
 }else{
    console.log("charge of 50");
    
 }
 const word= "kelvin"
 if( word.includes ('a')|| word.includes  ('e')){
    
 }else{
    console.log("the word is consonant");
    
 }
 //else if statement works if you have more than 2 choices

 let scoreA = 100
 let sxoreB = 100
 if( scoreA > scoreB){
    console.log(" A wins")
    
 } else if ("scoreB > scoreA" ){
    console.log("B wins");
    
 }else{
    console.log("it is a draw");
    
 }
 // write a program that rates movies
 // above 8 is excellent
 // above 6 is good
 // above 5 is average
 //else is bad

 let movierating = 7
 if(movierating >= 9){
    console.log("Excellent movie");
} else if( movierating >= 6){
    console.log("good movie");
    
 }else if ( movierating >= 5){
    console.log("average movie");
    
 } else{
    console.log("Bad movie");
    
 }
 // less than 18 = young club
 // 18-60 = adult club
 // above 60 - 80 adult club
  let userage = 45
   if( userage >60){
    console.log("old people club");
    
   } else if( userage < 18){
           console.log("adult club");
           
   }else if( userage > 60){
    console.log();
    
   }

   //nexted if
   // switch statement
   //  grading system
   
   let grade = "a"

   switch (grade) {
     case "A":
     case "a":
       console.log("excellent");
       break;

     case "A":
     case "a":
       console.log("excellent");
       break;

     case "B":
     case "b":
       console.log("very good");
       break;

     case "C":
     case "c":
       console.log("good");
       break;

     case "E":
     case "e":
       console.log("fair");
       break;

     case "F":
     case "f":
       console.log("fail");
       break;
default:
    console.log("invaild statement try again");
    
    
   }