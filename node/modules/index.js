const math = require('./module-export-vs-export')
const { add, substract } = math
add(10, 30)
substract(30, 20)

const SuperHero = require('./module-cache')

const batman = new SuperHero("Bruce Wayne")
console.log(`Super hero name: ${batman.getname()}`);

const superman = new SuperHero("Superman")
console.log(`Super hero name: ${superman.getname()}`);