// SetTimeout() : It is function execute block of code once after specify time has elapsed
// setTimeout(function, time, param, param)
const timeoutId = setTimeout(greet, 2000, 'Nadeem')
function greet(name) {
    console.log(`Hello : ${name}`); 
}

// setInterval() : function repetedly execute the block of code again and again at particular interval time
//setInterval(function, time, param, param)