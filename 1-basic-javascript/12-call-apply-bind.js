// 1. Call(): Calls a function immediately, with a specified this value and arguments provided individually. 
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



// 2. Apply: Works exactly like call(), except it takes arguments as an array.
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

// Bind: Returns a new function with the specified this value and optional arguments. It does not call the function immediately.
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

// Why Use Them?
// 1. To borrow methods from one object for another.

// 2. To set the this context explicitly.

// Problem Definition:
// You’re building a reusable logger utility. You want to log messages for different modules, and you want the logger to prefix logs with the module name.

function logMessage(message) {
    console.log(`[${this.moduleName}] ${message}`);
}
const authModeule = logMessage.bind({moduleName: "Authentication"})
authModeule("Logs from auth Module")

const paymentModul = logMessage.bind({moduleName: "Payment"})
paymentModul("Logs from Payment Module")