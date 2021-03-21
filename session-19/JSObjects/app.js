
let person = {
    fullName:"Kartik Mathur",
    name: "Kartik",
    age: 21,
    favColor: ['blue', 'green', 'red']
}

// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.favColor[1]);

// console.log(person["name"]);
// console.log(person["age"]);
// console.log(person["full" + "Name"]);


// Adding properties to the object
// person.isAdult = true;
// person.city = "New Delhi";
// console.log(person)


// deleting object properties
delete person.fullName;
// console.log(person);



const car = {
    name: "BMW",
    price: 1000000,
    startCar: function () {
        console.log("Starting a Car");
    }
}

console.log(car.name);
console.log(car.startCar);
car.startCar();