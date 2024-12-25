const http = require('node:http')
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('Home Page')
    } else if (req.url === '/slow-page') {
        for (let index = 0; index < 6000000000; index++) { }
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('Slow Page')
    }
})
server.listen(8000, () => console.log(`Server is runnning at port: 8000`))