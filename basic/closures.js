// Closures: It is a function that has access to its own scope, the outer function variables and global variables. 
// Even if the outer function finished the execution. This enable function to remember thier environment

function outer() {
    let outerVar = 'I am outer function variable'
    function inner() {
        console.log(outerVar);

    }
    return inner
}
const innerFun = outer()
innerFun()

// 2. Lexical Scope
// Closure are based on lexical scoping, meaning that function scope is determine by where it is define, not where its executed. 
// This allow inner function to access outer functions variable.

// 3. Private Variables
// Closures can encapsulate variables, making them private for specific function. This is commonly used in module pattern
function counter() {
    let count = 0;

    function increament() {
        count++
        return count
    }
    return increament
}
const increament = counter()
console.log(`Increament: ${increament()}`);
console.log(`Increament: ${increament()}`);

// 3. Closures and IIFE
// IIFE leverage closures to encapsulate private state or create module.
const valueCounter = (() => {
    let count = 0;
    return {
        increament: () => {
            count++
            console.log(`Increment by 1: ${count}`);

        },
        decreament: () => {
            count--
            console.log(`Decrement by 1: ${count}`);

        },
        reset: () => {
            count = 0
            console.log(`Reset: ${count}`);

        },
    }
})()
valueCounter.increament()
valueCounter.decreament()
valueCounter.reset()
console.log(`Count value: ${valueCounter.count}`);


// 4. Closures with setTimeout()

function createTimers() {
    for (let i = 1; i <= 3; i++) {
        setTimeout(function () {
            console.log(`Timer ${i}  Time: ${new Date().getMinutes() + new Date().getSeconds()}`);
        }, i * 1000);
    }
}
createTimers();

// Benefits of Closures
// Data Encapsulation: Closures enable data hiding and abstraction.
// State Management: Retain variables between function calls.
// Callbacks and Event Listeners: Simplify asynchronous code


// Common Pitfalls
// Memory Leaks: Excessive use of closures may retain unnecessary references to variables, causing memory issues.
// Performance Overhead: Overusing closures might lead to larger memory usage due to retained scopes.