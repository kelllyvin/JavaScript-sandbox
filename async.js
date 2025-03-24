//asynchronous code.js


let url = "https://dummyjson.com/products";

// make a fetch request this is called async await

let getproduct = async () =>{
    let respons = await fetch(url);
    let data = await respons.json();
    console.log(data);
    console.log(data.products);
    // display in broswer
    
    
    // console.log(respons);
    
}
getproduct()

// when eveer an api its called its promises - -  called containers for future value
// promise can be pending, fullfiled rejected

// another from of getting api

let getproduct2  = () => {
    fetch (url)
    .then((respons) =>{
        return respons .json();
    })
    .then((data) =>{
        console.log(data.products);
        
    })
}

getproduct2()