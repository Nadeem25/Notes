// Promise: It is an object. It has one the three state
// State 1. Pending, which is initial state neither fullfill or rejected
// State 2. fulfilled: Success
// State 3. Rejected: Failed

// Promises helps us to deal with asynchronous operation in a far better than callback.
const promise = new Promise((resolve, reject) => {
    setTimeout((value) => {
        if (value === true) {
            resolve('Success')
        } else {
            reject('Failed')
        }
    }, 2000)
})
promise.then((data) => { }).catch(error => { })


// ------------------- Chainging of promise -----------------------------------
// const promiseChain = fetchUser('/api/user')
// promiseChain
//     .then(result => fetchUserFollower(`/api/follower/${result.followerId}`))
//     .then(result => fetchFollowerInterest(`/api/follower/interest`))
//     .then(result => () => { })


// ---------------- Promise Static Function -------------------------
const promise1 = Promise.resolve(20)
const promise2 = 30;
const promise3 = new Promise((resolve, reject) => {
    //setTimeout(resolve, 5000, 'Promise3')
    setTimeout(reject, 3000, 'Error from promise')
})
const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'Promise4')
})

// ---------------------------  Promise.all() -------------------------------
// 1. Promise.all() takes iterable promise as input and return single promise that is an array of the result of the input promises.
// 2. Return promise will resolve when all the input promises have resolved.
// 3. It rejects immidiately if any of the input promise gets reject or non promise throw an error, and will reject with the first rejection error.

Promise.all([promise1, promise2, promise3]).then((result) => {
    console.log(`Promise.all() result:`, result); 
}).catch((errorMessage) => {
    console.log(`Promise.all() error message:`, errorMessage);
})


// ------------------------- Promise.allSettled() -------------------------------------------- 
// It waits for all the inputs promises to complete regardless of wheather any one of them is rejected.
// It return single promise with value and reason or status from that input promises
// It does not go into catch() block
Promise.allSettled([promise1, promise2, promise3]).then((result) => {
    console.log(`Promise.allSettled() result:`, result); 
})


// ------------------------- Promise.race() -------------------------------------------------------
// This methods return a promise that fulfills or reject as soon as one of the inputs promises get resolve or reject.
Promise.race([promise3, promise4]).then((result) => {
    console.log(`Promise.race() result:`, result); 
}).catch((errorMessage) => {
    console.log(`Promise.race() error message:`, errorMessage);
})

