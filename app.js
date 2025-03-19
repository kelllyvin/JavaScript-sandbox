let cars = [
    {name:"Lamborghini huracan", rentprice: 100, category: "sport"},
    {name:"Range Rover", rentprice: 70, category: "suv"},
    {name:"Audi no", rentprice: 120, category: "sport"},
    {name:"Mustang", rentprice: 80, category: "vintage"},
    {name:"porche 911", rentprice: 120, category: "sport"},
    {name:"Chevrolet Camero 1976", rentprice: 80, category: "vintage"},
    {name:"Rolls Royce", rentprice: 70, category: "sport"},
    {name:"Tesla Model x", rentprice: 120, category: "sport"},
    {name:"Bmw x5", rentprice: 40, category: "suv"},
    {name:"Volkswagen beetle 19", rentprice: 100, category: "spoprt"},
]

cars[1];
cars[0].name;

const vintageCars = cars.filter((car) => car.category === "vintage");
console.log(vintageCars);

let totalrentPrice = cars.reduce((acc, car) => acc + car.rentprice, 0);

const carsMorethan100 = cars.every((c) => c.rentprice > 100);

let myName = "Kelvin";
// == ===

let data = {
  success: true,
  message: "Product in Stock",
  products: ["Glasses", "Lipssticks", "Shoes"],
};

console.log(data.products[2]);

const { products } = data;
products[2];

const meals = [
  {
    meal: {
      name: "Sushi",
      price: 45,
      category: "Side",
    },
  },
];

console.log(meals[0].meal.name);
const airline = {
  types: [
    {
      name: {
        brand: "Air Peace",
        brand2: "Green Africa",
        brand3: "Max Air",
        brand4: "Emirates",
      },
    },
  ],
};
console.log(airline.types[0].name.brand3);

