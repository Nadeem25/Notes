const fs = require('node:fs')
fs.readFile(__filename, () => {
    console.log(`fs.readFile() 1`);
})
setTimeout(()=> { console.log(`This is setTimeout() 1`)}, 0)
process.nextTick(() => console.log(`process.nextTick() 1`))
Promise.resolve().then(() => console.log(`Promise.resolve 1`))
setImmediate(() => console.log(`setImmediate() 1`))

/* 
 -------- Expreriment 3 Inference -------------------
1. Callback in the "microtask queue" are executed before the callbacks in the "I/O queue".
2. When running setTimeout with 0ms and I/O asyn method, then the execution order does not gauranteed.
3. I/O queue callback are exectuted after the "microtask queue" and 'timer queue' callback.
*/

 /* Output 
process.nextTick() 1
Promise.resolve 1
This is setTimeout() 1
setImmediate() 1
fs.readFile() 1
*/

/* 
 -------- Expreriment 4 Inference -------------------
1. I/O events are polled and callback function are added to the "I/O Queue" only after the I/O operation is completed.
*/

fs.readFile(__filename, () => {
    console.log(`fs.readFile() 2`);
    setImmediate(() => console.log(`setImmediate() 2`))
})
setTimeout(()=> { console.log(`This is setTimeout() 2`)}, 0)
process.nextTick(() => console.log(`process.nextTick() 2`))
Promise.resolve().then(() => console.log(`Promise.resolve 2`))
/* Output 
process.nextTick() 2
Promise.resolve 2
This is setTimeout() 2
fs.readFile() 2
setImmediate() 2
*/

