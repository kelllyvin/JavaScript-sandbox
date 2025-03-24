// Document object model (dom)
// select element on the document by either tagName, classNamme, ansd idName, lso by combination
// these re mostly process one would be able to select object in a document
// let headings =document .getElementsByTagName("h1")
// console.log(headings);
// let myHis = document.getElementsByClassName("heading")
// console.log(myHis);
// let textPara =document.getElementById("text")

// // one can also get object with querySelector also css model work on it

// let firstPara = document.querySelector("p")
// console.log(firstPara);

// let allparas = document.querySelectorAll("p")
// console.log(allparas);

// now we will be talikin about 
// intracting with  content on the doc
// by either textcontent, innertext, innerhtml

const heading = document.querySelector(".heading")
console.log(heading.textContent);
console.log(heading.innerText);
heading.textContent += "JS IS FUN"
// heading .innertext = "JS IS FUN";
  
let container = document.querySelector("div")
console.log(container.innerHTML);
container.innerHTML += "<a href='https://google.com'>visit google</a>"

const name = 'john Paul'
const initials = 'j.p'
const intro = document.querySelector("h2")
intro.textContent = `welcome ${name}`;
// welcome initilas

// interect with attributes

const mylink = document.querySelector(".mylink");

//facebook
mylink.textContent = "Facebook"
mylink.setAttribute("href", "https://facebook.com")
mylink.setAttribute("target", "_blank")

// interact with styles
mylink .style.color ="red";
mylink.style.textDecoration ="none"

const btn = document.querySelector('button')

// btn.className ="mybtn";
// uisng classlist to override classname
 btn.classList.add('mybtn')

 const section = document.createElement("section")
 section.innerHTML = "<h1> created from js </h1>"
 section.classList.add ('mysection')

 // when evere you create an element you have to append it on the body or 
 /// whereever its needed
  const body = document.querySelector("body")
  body.appendChild(section)

  // users interaction
  // we have differnt ways of interaction with users interaction
  // event and event handler

  const testbtn = document.querySelector(".testbtn");
   testbtn.addEventListener("click",() =>{
    console.log("user clicked");
    // body.style.backgroundColor = "red"
    section.style.backgroundColor = 'red'
   })

   // form handling
   // with form you can sumit or on click
   // alos each time a button is submitted it refreshes a page for one to be able to stop ir
   // you must preventdrefult on the event

   const form = document.querySelector('form')
   const fullname = document.querySelector('.fullname')
   const small = document.querySelector('form small')

   form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const fullNamevalue = fullname.value.trim()
    console.log("form submitted", fullNamevalue);

    if (fullNamevalue === "") {
          small.style.display = "block";
          small.textContent = "please provide a name";
    }
    
    // console.log("form submitted",fullnameValue);

    
   })