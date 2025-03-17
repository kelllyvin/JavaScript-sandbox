


function calcSumOfNums() {
    const Num9 = prompt("Enter First Number: ");
    const Num10 = prompt ("Enter second NUmber: ");
    console.log(Number(Num9) + parseInt(Num10));
}
calcSumOfNums( );

/// type conversion
// numbers to string tostring. string
let Num6 = 98;
console.log(typeof Num6);
console.log(typeof Num6.toString());
console.log(typeof String(Num));

// convarting strings to a number 
// we use number parseint

let myStr = "40";
console.log(typeof myStr);
console.log(typeof Number(myStr));
console.log(typeof parseInt(myStr));
console.log(parseInt(myStr) * 2);


/// when ever a string is involved with + -----> string concatenation
// however a vaild number string "24" is involved with othert
// math operator - corced to behave as number e.g "50" - 4 = 45
//  a num valid number string e.g "ade" involved with maths operators
// execept + would result to NaN when used e.g "ade " - 5 = NaN
// TYPE COERCTION - FORCE
console.log("2"+4);// 24 concatenation
console.log("wale /4"); // NaN
console.log("50"-4); // 46 with any other maths operatoe except + it acts as a number


