alert("Hello Welcome");

let user = prompt("WHO IS THERE");
if (user == null) {
  alert("cancelled");
} else if (user == "Dami") {
  alert("Hello Dami");
  let password = prompt(" please Provide password");
  if (password == "javascript") {
    let Email = prompt("provide Email");
    if (Email == "Dami123@gmail.com") {
      alert("Registration succesful");
      alert("welcome Dami");
    }
  } else if (password == null) {
    alert("Cancelled");
  } else {
    alert("wrong password");
  }
} else {
  alert(" i dont know you");
}
