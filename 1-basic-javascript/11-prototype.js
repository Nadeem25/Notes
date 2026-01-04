// Prototype: 
// In JavaScript, every object has an internal link to another object called its prototype. 
// When you try to access a property or method on an object, JavaScript will:
// 1. Look for it on the object itself.
// 2. If not found, look up the prototype chain until it finds it or reaches the end (null).
// This is known as prototypal inheritance

// Why We Need Prototypes

// 1. Memory Efficiency: Share methods across all instances without duplicating them.
// 2. Inheritance: Allow one object to inherit behavior from another.
// 3. Extensibility: Add features dynamically to all instances of a constructor.

// Function  -----------------|
//                            |
// Array  --------------------| ---------------- Inherited from ------------ Object 
//                            |
// String --------------------|

// 1. Prototype with function
function multiply(num) {
    return num * 5
}
multiply.power = 2

console.log(multiply.power); // output: 2
console.log(multiply(5)); // output: 25
console.log(multiply.prototype); // output: {}
console.log(`=============================================================`);


// 2. Add properties or method in function using prototype
function afe(beverageName, beveragePrice) {
    this.beverageName = beverageName
    this.beveragePrice = beveragePrice
    console.log(`Beverage Name: ${this.beverageName}`); 
}

cafe.prototype.increasPrice = function() {
    this.beveragePrice = this.beveragePrice + 120
}

cafe.prototype.printMe = function() {
    console.log(`The price of ${this.beverageName} is ${this.beveragePrice}`);
    
}

const chai = new cafe("chai", 10) // This will work becuase we are using new keywork
const coffe = cafe("coffee", 20) // This will give error
console.log(`=============================================================`);

/* 
What happened behind the scene when new keyword is used.

1. A new object is created: The new keykword initiate the creation of new Javascript object.

2. A prototype is linked: The newly created object gets linked to the prototype property of the constructor function.
This means that it has access to properties and method defines on the constructor prototype.
-- Jo object(chai using new keyword) create huwa hai, wo link ho jaata hai constructor function ki prototype property se.

-------------------------------------------------------------------------------------------------------------------
-- Overall: Take object inject prototype property and add methods like (printMe() and increasPrice()) in prototype
-------------------------------------------------------------------------------------------------------------------

*/

// 3. Problem: I want to add one function which work for every string
let name = "Hitesh  "
let channel = "ChaiAurCode  "
String.prototype.trueLength = function () {
    console.log(this);
    console.log(`True length of ${this} is ${this.trim().length}`);
    
}
name.trueLength()
channel.trueLength()
console.log(`=============================================================`);


// 4. Problem: I want to add one function which can be access from string, function and Array
const myHero = ['thor', 'spiderman']

const heroPower = {
    thor: 'Hammer',
    spiderman: 'Sling'
}
const heroName = 'Thor'

function printHeroName() {
    console.log(`Hero name is Thor`);
    
}

Object.prototype.funInall = function(param) {
    console.log(`Function called from ${param}`);
    
}
myHero.funInall('Array')
heroPower.funInall('Object')
heroName.funInall('String')
printHeroName.funInall('Function')


// Prototypal Inheritance
const animal = {
    color: 'while',
    type: 'Wild Animal'
}
const cat = {
    legs: 4,
    food: 'Milk',
    //__proto__: animal // 1st Way for prototypal inheritance
}
//cat.__proto__ = animal // 2nd Way for prototypal inheritance
Object.setPrototypeOf(cat, animal) // 3nd modern way for prototypal inheritance
console.log(`Cat is ${cat.type} which color is ${cat.color} with ${cat.legs} legs`);



