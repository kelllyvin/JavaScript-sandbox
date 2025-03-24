

// let bal = 3000



// function checkpin(enteredpin){
    
//     while(attempts > 0){
//         let enteredpin = parseint(prompt("Enter pin"));
//         if (enteredpin === pin){
//             alert("pin accepted. welcome!");
//             atmMenu();
//             return;


//             // attempts = 3
//             // // startAtm()
//             // alert("Start Atm")
//         } else{
//             attempts--;
//             alert(`incorrect pin,${attempts } attempts left`)
//         }
    
//     }
//     alert( "you have brrn locked out, please contact the bank";)
// }


// function checkbal() {
//   aleart( `your current balance is $${bal}`)
// }
// function withdraw (amount) {
//     let amount =
//     parseFloat(prompt("Enter amount to withdraw"));

//     if(isNaN(amount) || <= 0)
//         {
//         alert("invalid amount")
//     } else if(amount > balance){
//         alert("insufficient funds");
//     } else{
//         balance -= amount;
//         alert(withdrawal successful.
//             New balance:$${balance}
//         )
    
//     }
        
   
// }
// console.log(withdrawalamount(1000));

// function depositamount (amount) {
//         balance += amount
//         return "Deposit successful"
// }

// let pin = 1234

// write a simple atm js algo
// checkbalance
// withdrawal
// depositamount
// check pin validation

const pin = 1234;
let attempts = 3;
let balance = 5000;



function checkPin() {
  while (attempts > 0) {
    let enteredPin = parseInt(prompt("Enter your PIN:"));

    if (enteredPin === pin) {
      alert("PIN accepted. Welcome!");
      atmMenu();
      return;
    } else {
      attempts--;
      alert(`Incorrect PIN. You have ${attempts} attempts left.`);
    }
  }

  alert("You have been locked out. Please contact the bank.");
}

function checkBalance() {
  alert(`Your current balance is $${balance}`);
}

function withdraw() {
  let amount = parseFloat(prompt("Enter amount to withdraw:"));

  if (isNaN(amount) || amount <= 0) {
    alert("Invalid amount.");
  } else if (amount > balance) {
    alert("Insufficient funds.");
  } else {
    balance -= amount;
    alert(`Withdrawal successful. New balance: $${balance}`);
  }
}

function deposit() {
  let amount = parseFloat(prompt("Enter amount to deposit:"));

  if (isNaN(amount) || amount <= 0) {
    alert("Invalid amount.");
  } else {
    balance += amount;
    alert(`Deposit successful. New balance: $${balance}`);
  }
}

function atmMenu() {
  while (true) {
    let choice = prompt(
      "Choose an option:\n1. Check Balance\n2. Withdraw Money\n3. Deposit Money\n4. Exit"
    );

    if (choice === "1") {
      checkBalance();
    } else if (choice === "2") {
      withdraw();
    } else if (choice === "3") {
      deposit();
    } else if (choice === "4") {
      alert("Thank you for using the ATM.");
      return;
    } else {
      alert("Invalid option. Try again.");
    }
  }
}

// Start the ATM program
checkPin();