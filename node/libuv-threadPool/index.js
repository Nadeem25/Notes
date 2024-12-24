const crypto = require('node:crypto')
const https = require('node:https')
//process.env.UV_THREADPOOL_SIZE = 10 // Increase size of thread pool

// const start = Date.now()
// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512')
// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512')
// crypto.pbkdf2Sync('password', 'salt', 100000, 512, 'sha512')
// console.log(`Hash: `, Date.now() - start);

/* Expreriment 1 Inference
Every method in NodeJs that has sync suffix always runs on main thread and is blocking 
*/

const start = Date.now()
const MAX_CALLS = 1
for (let index = 0; index < MAX_CALLS; index++) {
    crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () => {
        console.log(`Hash: ${index + 1}, Time:`, Date.now()- start);
        
    })
}

/* Expreriment 2 Inference
A few async method like fs.readFile() and crypto.pbkdf2() runs on seperate thread in libuv's thread pool.
They do run synchronously in their own thread but as far as the main thread is concerned, it appears as if the method is running asynchronously.
*/

/* Expreriment 3 Inference
Increase the thread pool size might help to improve performance but that is limited by the number of available CPU cores.
*/

const MAX_HTTP_CALLS = 20
for (let index = 0; index < MAX_HTTP_CALLS; index++) {
    https.request('https://www.google.com', (res) => {
        res.on('data', ()=>{});
        res.on('end', ()=>{
            console.log(`Request: ${index + 1}, Time: ${Date.now() - start}`);
        })
    }).end()
}

/* Expreriment 4 Inference
1. Although bothe crypto.pdkdf2() and https.request() are asynchronous, http.request() does not seems to use thread pool.
2. http.request() does not seems to be affected by the number of CPU cores either.
3. http.request() is network input/output operation not CPU bound operation.
4. http.request() does not use thread pool. However, libuv delegates the work to the operating system kernel.
*/


/* 
In NodeJs, async methods handle by two ways
1. Native async mechanism
2. Thread Pool  

Whenever possible libuv use Native async mechanism (Eg: https.request()) in the OS to avoid blocking to main block.
If there is no native async support and the task is file I/O or CPU intensive, libuc use the thread pool to avoid blocking the main thread.
*/