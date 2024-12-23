// Moudle: A module is encapsulated and reusable chunk of code that has it own context.
// In nodejs each file is treated as seperate module.

// ------------ Types of Module ---------------------------
// 1. Local Module: Modules that was created in our application
// 2. Build-in Module: Modules that provided by the NodeJs
// 3. Third-party Module: Provided by the other developer which we can use in our application


// Note : 1. we are requireing the two file which has same constant variable name, but we are not facing any confilicting
// 2. Before module code is executed, NodeJs will wrap it with function wrapper that provides module scope.
// 3. There is proper encapsulated and reusibility is unaffected
(function(){
//     module code actually live in here
})
// 4. Each loaded module in NodeJs is wrapped with an IIFE that provides private scoping of code
require('./batman')
require('./superman')