// const fs = require('node:fs')
// fs.readFile(__filename, () => {
//     console.log(`fs.readFile() 1`);
//     setImmediate(() => console.log(`Inner setImmediate() 1 inside fs.readFile() 1`))
//     process.nextTick(() => console.log(`Inner process.nextTick() 2 inside fs.readFile() 1`))
//     Promise.resolve().then(() => console.log(`Inner Promise.resolve() 2 inside fs.readFile() 1`)) 
// })
// setTimeout(() => { console.log(`This is setTimeout() 1`) }, 0)
// process.nextTick(() => console.log(`process.nextTick() 1`))
// Promise.resolve().then(() => console.log(`Promise.resolve 1`))

/* 
 -------- Expreriment 4 Inference -------------------
1. 'microtask queue' callback are executed after 'I/O callabacks' and before 'check queue' callbacks 
*/

setImmediate(() => console.log(`setImmediate() 1`))
setImmediate(() =>{
    console.log(`setImmediate() 2`)
    process.nextTick(() => console.log(`Inner process.nextTick() 1`))
    Promise.resolve().then(() => console.log(`Inner Promise.resolve() 2`))
})
setImmediate(() => console.log(`setImmediate() 3`))
/* 
 -------- Expreriment 5 Inference -------------------
1. 'microtask queue' callback are executed in between 'check queue' callbacks 
*/
