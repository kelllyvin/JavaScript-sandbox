// map does for individual element
// complex destructing

// let customers =["Ade", "Ngozi"]

// customers.map ((customers)=>{
//     console.log(customer.charAt(0));
    
// })
// obj1 obj2
// name, age, gender, location, phonenumber

let mycustomers = [
    { name:"Kung Lao", age: 25, gender: "M", location: "ibadan" ,purchase:6000},
     { name:"Johnny Cage", age: 30, gender: "M", location: "Lagos",purchase:8000},
      { name:"Liu Kang", age: 22, gender: "M", location: "ibdan",purchase:4300},
       { name:"sonya Blade", age: 20, gender: "F", location: "Lagos",purchase:7400},
        { name:"Kitana", age: 32, gender: "F", location: "Ondo",purchase:6200},
]
mycustomers[1].name;
let {name} = mycustomers[1]
mycustomers[1] ["name"]

mycustomers.map((customer)=>{
    console.log(customer.name);
    
})

// get customers that are 25 and above

let oldercustomer = mycustomers.filter((customer) => customer.age >= 25)
 console.log(oldercustomer);
 
let youngercustomers = mycustomers.filter((customer) => customer.age < 25)
console.log(youngercustomers);

let customermale = mycustomers.filter((customer)=> customer.gender.toUpperCase() === 'm'.toUpperCase() )
console.log(customermale);


let customergender =mycustomers.filter((customer)=> customer.gender ==='F')
console.log(customergender);

// number of customers in lagos

let customresinLag =mycustomers.filter((customer)=> customer.location ==="Lagos") 

console.log(customresinLag);
// arrange the customres according to age

let customerage = mycustomers.sort((a,b) => a.age - b.age)
console.log(customerage);

// get the avarag age of the customer

let totalage = mycustomers .reduce( (acc, customer) => acc + customer.age, 0)
let avaragage = totalage / mycustomers.length
console.log(avaragage);

// customer at ibadan

let customeriban = mycustomers. find((customer) => customer.location ==="ibadan")
console.log(customeriban);

// get  a new array contaning all the purchase of all customers

let newarray = mycustomers.map((customers)=> customers.purchase)
console.log(newarray);

   
    

// get all customers with a minimum of 6000 pruchase amount
 let minpur = mycustomers.filter((customer)=> customer.purchase === 6000)
 console.log(minpur);
 

// get the total purchase amount of all customers 

let puramt = mycustomers.reduce((acc,customer)=> acc+customer.purchase, 0)
console.log(puramt);

// get the avarage purchase for the last three customers
 let lastpur = mycustomers.slice(2).reduce((acc,customer) => acc +customer.purchase,0)
console.log(lastpur);

// get the total purchase amount of all customers in ibadan

let ibadantotalpurchase = mycustomers .filter((customer)=> customer.location === "ibadan")
let ibadantotalpurchases = mycustomers .reduce((acc,customer)=> acc + customer.purchase,0)

console.log(ibadantotalpurchase);
console.log(ibadantotalpurchases);

let shoopingcart = [
  { title: "jean", price: 100, qty: 2 },
  { title: "hat", price: 50, qty: 4 },
  { title: "cream", price: 20, qty: 1 },
  { title: "Duffet Bag", price: 150, qty: 5 },
  { title: "Balaclave", price: 70, qty: 3 },
];

// jean cost $ 100

shoopingcart.map((item)=>{
    console.log`${item.title} cost $${item.price}`;
    
})

// iteam more than 70 dollars
let moretan70 = shoopingcart.
filter((item) => item.price > 70)

// get the total amount spent on each iteam
shoopingcart.map((item)=>{
console.log`${item.title} jeans will cost$${item.price *item.qty}`;
})

//get the totalcost of all items in a cart

let totalcost=shoopingcart.reduce((acc,item) => acc + item.price*item.qty,0 )
console.log("total cost is"+ totalcost);
