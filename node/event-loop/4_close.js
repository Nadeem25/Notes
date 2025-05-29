const fs = require('node:fs')
fs.readFile(__filename, () => {
    console.log(`fs.readFile() 1`);
})
const readablestream = fs.createReadStream(__filename)
readablestream.close()
readablestream.on('close' , () =>  console.log(`close callback 1`))
setTimeout(()=> { console.log(`setTimeout() 1`)}, 0)
process.nextTick(() => console.log(`process.nextTick() 1`))
Promise.resolve().then(() => console.log(`Promise.resolve 1`))

/* 
 ---------------- Expriment 6 Inference ------------------------
 Close queue are callbacks are executed after all other queue callbacks in a given iteration of the event loop
*/