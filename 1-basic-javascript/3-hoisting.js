// ================ Hositing =======================
// JavaScript Hoisting is the behavior where the interpreter moves function and variable declarations to the top of their respective scope before executing the code.
// This allows variables to be accessed before declaration

// =================== 1. var code (global) =======================
console.log(name); // undefined
var name = 'Mukul Latiyan';
// output: undefine

// ================= 2. let example(global)==============================
console.log(name);
let name = 'Mukul Latiyan'; // ReferenceError: name is not defined


// Note: 
// 0. Time since when the "let" variable was hoisted and till the intitialization of of "let" variable value
// 1."Var" Initialized during hoisting with undefine value.But "let" also hoisted but does not intialize with any value (Because it has block scope). This creates something called Temporal Dead Zone (TDZ)
// 2. Var value store in Global scope and Let and scope store in Script section (seperate memeory space)

// ===================3. JavaScript hoisting with function ======================
fun(); // Calling before declaration

function fun() { // Declaring
  console.log("Function is hoisted");
}
// output: "Function is hoisted"


// ============= 4. Javascript hoisting with function expression (let) =======================
funExpression() // output: ReferenceError: Cannot access 'funExpression' before initialization

let funExpression = () =>{ // Declaring
    let name = 'Mukul Latiyan';
    console.log(name);
}
funExpression() // output: Mukul Latiyan

//  ======== 5. Javascript hoisting with function expression (var) =================
fun() // Calling the expression

var fun = () =>{ // Declaring
    let name = 'Mukul Latiyan';
    console.log(name);
}
// output: TypeError: fun is not a function
