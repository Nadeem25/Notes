statement() // Output: Function Statement
//functionExpression()  // Error: "functionExpression" is not function

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
//funName() // Error

// 5. First Class Function
function firstClassFunction(funParam) {
    return funParam
}
firstClassFunction(function() {})
console.log(`================================================================`);
// We can pass function  to another function as an argument and return a function from function


// 6. Arrow Function
console.log(`Value of this in global context:`, this);
const user = {
    name: 'Hitesh',
    channelName: 'ChaiAurCode',
    printThisValue: function() {
        let name = 'Nadeem'
        console.log(`Value of this in object user context:`, this);
    }
}
user.printThisValue()
console.log(`================================================================`);

function chai() {
    const username = 'ChaiAurCode'
    console.log(this.username); // output: undefined :- Becuase this work in object not in function
    console.log(this); // output: objects with properties 
}
chai()
console.log(`================================================================`);


const arraowWithThis = () => {
    console.log(this); // output: {}
}
arraowWithThis()




