// SetTimeout() : It is function execute block of code once after specify time has elapsed
// setTimeout(function, time, param, param)
const timeoutId = setTimeout(greet, 2000, 'Nadeem')
function greet(name) {
    console.log(`Hello : ${name}`); 
}

//setInterval() : function repetedly execute the block of code again and again at particular interval time
//setInterval(function, time, param, param)

// setImmediate(()=> {})
// used to schedule a callback to run after the current event loop phase
//It runs the callback as soon as possible on the next cycle of the event loop, after I/O events