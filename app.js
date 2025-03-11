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