setTimeout(()=> { console.log(`This is setTimeout() 1`)}, 0)
setTimeout(()=> { 
    console.log(`This is setTimeout() 2`)
    process.nextTick(() => console.log(`This is process.nextTick() 5 inside setTimeout() 2`))
}, 0)
setTimeout(()=> { console.log(`This is setTimeout() 3 \n`)}, 0)

process.nextTick(() => console.log(`This is process.nextTick() 1`))
process.nextTick(() => {
    console.log(`This is process.nextTick() 2`)
    process.nextTick(() => console.log(`This is the inner process.nextTick() 3 inside process.nextTick() 2 \n`))
})
process.nextTick(() => console.log(`This is process.nextTick() 3`))

Promise.resolve().then(() => console.log(`Inside Promise.resolve 1`))
Promise.resolve().then(() => {
    console.log(`Inside Promise.resolve 2 `)
    Promise.resolve().then(() => console.log(`This is the inner Promise.resolve() 4 inside Promise.resolve 2`))
    process.nextTick(() => console.log(`This is the inner process.nextTick() 4 inside Promise.resolve 2 \n`))
})
Promise.resolve().then(() => console.log(`Inside Promise.resolve 3`))


/* 
 -------- Expreriment 1 Inference -------------------
Callback in the "microtask queue" are executed before the callbacks in the "timer queue"
*/

/* 
 -------- Expreriment 2 Inference -------------------
Callback in the "microtask queue" are executed  in between the execution of callbacks in the "timer queue"
*/