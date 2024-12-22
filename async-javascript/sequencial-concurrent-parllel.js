function resolveHello() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hello'), 2000)
    })
}

function resolveWorld() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('World'), 1000)
    })
}

// ---------------- Sequencial Execution ---------------------------------------------
// async function sequencialExecution() {
//     const helloResult = await resolveHello()
//     console.log(`Sequencial Execution: Result from resolveHello()`, helloResult); // Logs after 2 second

//     const worldResult = await resolveWorld()
//     console.log(`Sequencial Execution: Result from resolveWorld()`, worldResult); // Logs after 2 + 1 second
// }
// sequencialExecution() // Total time :  3 second


// ----------------- Concurrent Execution -------------------------------------------
// async function concurrentExecution() {
//     const helloResult = resolveHello()
//     const worldResult = resolveWorld()
//     console.log(`Concurrent Execution: Result from resolveHello()`, await helloResult); // Logs after 2 second
//     console.log(`Concurrent Execution: Result from resolveWorld()`, await worldResult); // Logs after 2 second

// }
// concurrentExecution() // Total time :  3 second

// ----------------- Parllel Execution -------------------------------------------
async function parllelExection() {
    const helloPromise = resolveHello()
    const worldPromise = resolveWorld()
    async function printHello() {
        console.log(await resolveHello())
    }
    async function printWorld() {
        console.log(await resolveWorld())
    }
    //Promise.all([printHello(), printWorld()])
    Promise.all([
        (async() => console.log(`Parllel Execution:`, await resolveHello()))(), // Logs after 2 second
        (async() => console.log(`Parllel Execution:`, await resolveWorld()))(), // Logs after 1 second
    ])
}
parllelExection() // World Hello