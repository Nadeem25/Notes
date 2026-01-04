//A JavaScript immediately Invoked Function Expression is a function defined as an expression and executed immediately after creation.
// Syntax:

// Advantage: 
// 1. Avoid polluting global namespace. 
// 2. Immediate function
// 3. IIFE is used to create private and public variables and methods.

// (function(){
//     // Function Body goes here
// })();


// 1. To make variables private:
var c = 70
const User = (() => { 
    var c = 90
    let userName = "Geek"; 
    let userSecret = "Likes using IIFE"; 
    return { 
        getName: () => userName, 
        getSecret: () => userSecret,
        printValue: function() {
            console.log(`The value of C: ${c}`);
            
        }
    } 
})(); 
  
console.log(User.getName()); // returns "Geek" 
console.log(User.getSecret()); // returns "Likes using IIFE" 
console.log(User.userName); // returns undefined
User.printValue()