/*  --------- Cluster ---------------------------------
1. Node is single threaded.
2. No matter how many cores you have, Node only use single core of CPU.
3. This is fine for IO operation but if the code has long running and CPU intensive operation, your application might struggle from performance POV.
4. The cluster module enables the creation of child processes(also called workers) that runs simultaneously.
5. All created workers share the same server port.


1. Master is only charge of  the workers.
2. Workers are in charge of handling incoming request, reading file etc.
3. Each workers get its own event loop, and v8 instance.
*/

const http = require('node:http')
const cluster = require('node:cluster')
const os = require('node:os')
console.log(`OS CPU Core: ${os.cpus().length}`);

if (cluster.isMaster) {
    console.log(`Master process: ${process.pid} is running`);
    cluster.fork()
    cluster.fork()
} else {
    console.log(`Worker process: ${process.pid} is running`);
    const server = http.createServer((req, res) => {
        if (req.url === '/') {
            console.log(`Worker process id: ${process.pid} for /home page`);
            res.writeHead(200, { 'Content-Type': 'text/plain' })
            res.end('Home Page')
        } else if (req.url === '/slow-page') {
            console.log(`Worker process id: ${process.pid} for /slow-page`);
            for (let index = 0; index < 6000000000; index++) { }
            res.writeHead(200, { 'Content-Type': 'text/plain' })
            res.end('Slow Page')
        }
    })
    server.listen(7000, () => console.log(`Server is runnning at port: 7000`))
}


