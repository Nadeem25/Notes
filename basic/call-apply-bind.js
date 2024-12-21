// 1. Call:The Call() Method calls the function directly and sets this to the first argument passed to the call method 
// and if any other sequences of arguments preceding the first argument are passed to the call method then they are passed as an argument to the function.
function SetUsername(username) {
    this.username = username;
    console.log(`Username: ${this.username}`);
}

function CreateUser(username, email, password) {
    SetUsername.call(this, username);
    this.email = email;
    this.password = password
}
const user = new CreateUser('25nadeem', 'nadeem@gmail.com', 'pass@123')
console.log(`The user object:`, user);

const cat = {
    name: 'Cat',
    color: 'white',
    legs: 4,
    breed: 'Indian'
}
const dog = {
    name: 'Dog',
    color: 'black',
    legs: 4,
    breed: 'German shepard'
}
const printAnimalDetails = function(animal){
    console.log(`Animal is ${animal} which color is ${this.color} with legs: ${this.legs}`);
    
}
printAnimalDetails.call(cat, 'Cat')
printAnimalDetails.call(dog, 'Dog')
console.log(`------------------------------------------------------------------------`);



// 2. Apply: The Apply() Method calls the function directly and sets "this" to the first argument passed to the apply method 
// and if any other arguments is reuired then pass as an argument to the function

const nameObj = {
    name: 'Tony'
}
const printObj = {
    name: 'Steve',
    sayHello: function(age, city) {
        console.log(`My name is ${this.name} and age is ${age}, I live in ${city}`);
        
    }
}
printObj.sayHello(24, 'Pune') // My name is Steve and age is 24
printObj.sayHello.apply(nameObj, [34, 'Mumbai'])
console.log(`------------------------------------------------------------------------`);

// Bind: The Bind() Method creates a new function and when that new function is called it set "this" keyword to the first argument which is passed to the bind method, 
// and if any other sequences of arguments preceding the first argument are passed to the bind method then they are passed as an argument to the new function when the new function is called.
const car = {
    brand: 'Lamborghini',
};

// As of now, 'this' keyword refers to 'window' object.
const printDetail = function (model, topSpeed) {
    console.log(`${this.brand} ${model} has a top speed of ${topSpeed} mph`);
};

// Calling the function without using bind which means 'this' still refers to 'window' object so accessing this.brand will give undefined
printDetail('Diablo Coatl', 239); // output: undefined Diablo Coatl has a top speed of 239 mph

// Creating a new function based on printDetail with 'this' keyword referring to car object so accessing this.brand will give 'Lamborgini'
const lamboPrintDetail = printDetail.bind(car);
lamboPrintDetail('Diablo VTTT', 222);
// output: Lamborghini Diablo VTTT has a top speed of 222 mph

// Creating another function based on printDetail with it's arguments pre-configured and 'this' keyword referring to car object
const reventonPrintDetail = printDetail.bind(car, 'Reventon', 221);
reventonPrintDetail();
//output: Lamborghini Reventon has a top speed of 221 mph
