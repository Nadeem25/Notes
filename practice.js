async function printHello() {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> resolve("Inside printHello()"), 5000)
    })
}

async function printWorld() {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> resolve(`Inside printWorld()`), 2000)
    })
}

// async function sequencialExecution() {
//     const helloResult = await printHello()
//     console.log(`Sequencial Execution: Result from resolveHello()`, helloResult);

//     const worldResult = await printWorld()
//     console.log(`Sequencial Execution: Result from resolveWorld()`, worldResult);
// }
// sequencialExecution()

// async function concurrentExecution() {
//     const helloResult = printHello()
//     const worldResult = printWorld()
//      console.log(`Concurrent Execution: Result from resolveHello()`, await helloResult);
//     console.log(`Concurrent Execution: Result from resolveWorld()`, await worldResult);
// }


// concurrentExecution()

Promise.all([(async ()=> {console.log('From print hello', await printHello())})(), 
    (async ()=> {console.log('From print hello', await printWorld())})()
])