// Callback: In javascript function are first class function
// function can be pass as an argument to function and return from function

function greet(name) {
    console.log(`Welcome: ${name}`); 
}
function greetUser(name, greetFun) {
    console.log(`Inside greetUser`);
    greetFun(name)
}
greetUser('Nadeem', (name)=> { console.log(`Hello: ${name}`)})


// 1. Synchronous Callback: A callback which is executed immidiately is call synchronous callback
let number = [1,2,3,4]
number.sort((a, b) => a-b)
number.filter((numb) => numb * 2)

// 2. Asynchronous: A callback function that is often used to continue or resume code execution after an asynchronous operation has completed.
setTimeout(greet, 2000, 'Nadeem')

//  ---------------------- Problem with callback ---------------------
// Callback Hell: If you have multiple callback function where each level depends on the result obtain from previous level.
// As a result, creates nesting of function callled callback hell


fetchCurrentUser('/api/user', (result) => {
    fetchFollowerByUserId('/api/follower/${id:userId}', (result) => {
        fetchFollowerInterest('/api/follower/interest/${result.interestId}', (result) => {})
    })
})
