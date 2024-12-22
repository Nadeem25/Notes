// Problem
let nameObj = {
    name: 'Harry'
}
let userObj = nameObj
userObj.name = 'Harish';
console.log(`Value has changed to ${nameObj.name} by user object`);
console.log(`------------------------------------------------------------`);


// -------------------- Shallow Copy ----------------------------------
// When we copy the objects to new variable, then only the top level properties are copied, 
// while nested objects or array still reference the original memrory location.
// Which means if you change the nested properties in copied object, those changes will reflect in original object because they sahare same memeory reference.

let user = {
    name: 'John Cena',
    age: 45,
    address: {
        city: 'mumbai'
    }
}
let userCopyByAssign = Object.assign({}, user)  // 1st Way
let userCopyBySpred = {...user} // 2nd Way
userCopyByAssign.name = 'Thor'
userCopyBySpred.name = 'Spiderman'
console.log(`user name from user object:`, user.name);
console.log(`user name from userCopyByAssign object:`, userCopyByAssign.name);
console.log(`user name from userCopyBySpred object:`, userCopyBySpred.name);

// If we change the nested properties in copied object, those changes will reflect in original object
userCopyByAssign.address.city = 'Pune'
console.log(`user city from user object:`, user.address.city);
console.log(`user city from userCopyByAssign object:`, userCopyByAssign.address.city);
console.log(`--------------------------------------------------------------------------------`);



// --------------------- Deep Copy -----------------------------------------------------
// A deep copy creates a completely independent copy of the object, including all nested objects or arrays.
// This ensures that changes made to one object do not affect the other. 
// Each object is stored in a separate memory location, making them entirely independent.
let employee = {
    eid: "E102",
    ename: "John Cena",
    eaddress: "New York",
    salary: 50000
}
console.log("=========Deep Copy========");
let newEmployee = JSON.parse(JSON.stringify(employee));
console.log("Original Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
console.log("---------After modification---------");
newEmployee.ename = "Beck";
newEmployee.salary = 70000;
console.log("Original Employee=> ", employee);
console.log("New Employee=> ", newEmployee);


// -------- Limitations of JSON.parse() and JSON.stringify() ------------------------
// 1. Non-Serializable Properties: Functions, undefined, and certain other non-serializable values are lost when using JSON.stringify().
// 2. Circular References: Objects with circular references will cause JSON.stringify() to throw an error.
// 3. Date Objects: Dates are converted to strings during the process, losing their original type.

//--------- Solution -------------------------
const lodash = require('loadash')
let originalEmployee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000,
    details: function () {
        return "Employee Name: " 
            + this.ename + "-->Salary: " 
            + this.salary;
    }
}

let deepCopyEmployee = lodash.cloneDeep(employee);
console.log("Original Employee Object");
console.log(originalEmployee);
console.log("Deep Copied Employee Object");
console.log(deepCopyEmployee);
deepCopy.eid = "E103";
deepCopy.ename = "Beck";
deepCopy.details = function () {
    return "Employee ID: " + this.eid 
        + "-->Salary: " + this.salary;
}
console.log("----------After Modification----------");
console.log("Original Employee Object");
console.log(originalEmployee);
console.log("Deep Copied Employee Object");
console.log(deepCopyEmployee);
console.log(originalEmployee.details());
console.log(deepCopyEmployee.details());






