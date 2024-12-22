// 2. Primitive (Non-Reference Date Type)
// Number, String, boolean, null, undefined, Symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id, anotherId);
console.log(`Type of null is:`, typeof null);
console.log(`Type of undefined is:`, typeof undefined);

// Point 1: Primitive Data Type gets store in Stack Memory


// 1. Non-Primitive (Reference Data Type)
// Array, Objects, Functions
const fun = function() {
    console.log(`Type of function is : ${typeof fun}`); 
}
fun()
// Point 2: Non Primitive data type gets store in Heap Memory

const nameOne = "Nadeem"
const nameTwo = new String("Nadeem") 
console.log(`Type of nameOne value is : ${typeof nameOne}`);
console.log(`Type of nameTwo value is : ${typeof nameTwo}`);
console.log(`nameOne or nameTwo is same: ${nameOne === nameTwo}`);



