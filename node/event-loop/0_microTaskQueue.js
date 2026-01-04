/* ------ Event Loop -----------------
It is C program and part of libuv
A design pattern the is orchestrate or co-ordinates the execution of syncrhronous and asynchronous code in NodeJs
*/


/* ------ Event Loop - Execution Order -----------------
User written synchronous Javascript code takes priority over async code that the runtime would like to execute.
Only after the call stack is empty, the event loop comes into picture.

1. Any callback in the micro task queue are executed. First, task in the nextTick queue and only then task in the promise queue.
2. All callbacks within the Timer Queue are executed.
3. Callback in the Micro Task Queue if present are executed. Again, first task in the nextTick queue and only then task in the promise queue.
4. All callback within the I/O Queue are executed.
5. Callback in the Micro Task Queue if present are executed. Again, first task in the nextTick queue and only then task in the promise queue.
6. All callback within the Check Queue are executed.
7. Callback in the Micro Task Queue if present are executed. Again, first task in the nextTick queue and only then task in the promise queue.
8. All callback within the Close Queue are executed.
9. For one final time Callback in the Micro Task Queue if present are executed. Again, first task in the nextTick queue and only then task in the promise queue.

If there are more callbacks to be processed, then loop is kept alive for one more run and the same steps are repeated.
On the other hand, if all callbacks are executed then event loop is exits.
*/

process.nextTick(() => console.log(`This is process.nextTick() 1`))
process.nextTick(() => {
    console.log(`This is process.nextTick() 2`)
    process.nextTick(() => console.log(`This is the inner process.nextTick() 3 inside process.nextTick() 2`))
})
process.nextTick(() => console.log(`This is process.nextTick() 3`))

Promise.resolve().then(() => console.log(`Inside Promise.resolve 1`))
Promise.resolve().then(() => {
    console.log(`Inside Promise.resolve 2 `)
    Promise.resolve().then(() => console.log(`This is the inner Promise.resolve() 4 inside Promise.resolve 2`))
    process.nextTick(() => console.log(`This is the inner process.nextTick() 4 inside Promise.resolve 2`))
})
Promise.resolve().then(() => console.log(`Inside Promise.resolve 3`))


// This is process.nextTick() 1
// This is process.nextTick() 2
// This is process.nextTick() 3
// This is the inner process.nextTick() 3 inside process.nextTick() 2
// Inside Promise.resolve 1
// Inside Promise.resolve 2
// Inside Promise.resolve 3
// This is the inner Promise.resolve() 4 inside Promise.resolve 2
// This is the inner process.nextTick() 4 inside Promise.resolve 2