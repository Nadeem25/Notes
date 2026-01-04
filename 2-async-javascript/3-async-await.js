

// ----------------- async keyword -------------------------
// 1. It is use to declare asyn function
// 2. async function always return promise
async function asyncFun() {
    return 'Nadeem'
}
console.log(`Value from async function:`, asyncFun()); // Promise { 'Nadeem' }

// ------------------ await keyword ------------------
// It can be put infront of any async based function to pause code until promise settled and return its result.
async function greet(name) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hello'), 2000)
    })
    const result = await promise
    console.log(result);
}
greet()
