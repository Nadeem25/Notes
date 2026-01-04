const promise1 = Promise.resolve(50)
const promise2 = 40
const promise3 = new Promise((resolve, reject) => {
    setTimeout(reject,  5000, "Promise has rejected")
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise has resolved")
    }, 2000)
})

Promise.all([promise1, promise2, promise4]).then((result) => {
    console.log(`All Promise result: ${result}`);
}).catch((error) => {
     console.log(`Error: ${error}`); 
})


Promise.allSettled([promise1, promise2, promise3]).then((result) => {
    console.log(`Promise.allSettled() result:`, result); 
})

Promise.race([promise4, promise3]).then((result) => {
    console.log(`Promise.race() result:`, result); 
}).catch((errorMessage) => {
    console.log(`Promise.race() error message:`, errorMessage);
})

