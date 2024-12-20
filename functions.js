statement() // Output: Function Statement
functionExpression()  // Error: "functionExpression" is not function

// 1. Function statement or Declaration
function statement() {
    console.log(`Function Statement`);
}

// 2. Function Expression
var functionExpression = function () {
    console.log(`Function Expression`); 
}

/* 
Note: 
1. If we are creating function using Function Statement then we can call function before creating it.
2. IF we are creting function using Function Expression then we cannot call function before creating it

*/

// 3. Anonymous Function : Function without name but store in value.
var anonymousFunction = function() {}


// 4. Named Function Expression
var namedFunctionExpression = function funName() {
    console.log(`Inside named function expression`);
}
namedFunctionExpression() // Output: Inside named function expression
funName() // Error

// 5. First Class Function
function firstClassFunction(funParam) {
    return funParam
}
firstClassFunction(function() {})
// We can pass function  to another function as an argument and return a function from function


// 6. Arrow Function


