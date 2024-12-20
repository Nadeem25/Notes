//A JavaScript immediately Invoked Function Expression is a function defined as an expression and executed immediately after creation.
// Syntax:

// (function(){
//     // Function Body goes here
// })();


// 1. To make variables private:
const User = (() => { 
  
    let userName = "Geek"; 
    let userSecret = "Likes using IIFE"; 
    return { 
        getName: () => userName, 
        getSecret: () => userSecret 
    } 
})(); 
  
console.log(User.getName()); // returns "Geek" 
console.log(User.getSecret()); // returns "Likes using IIFE" 
console.log(User.userName); // returns undefined