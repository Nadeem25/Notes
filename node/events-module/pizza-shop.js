const EventEmitter = require('node:events')
class PizzaShop extends EventEmitter {
    constructor() {
        super()
        this.ordernumber = 0
    }
    order(eventName, orderPizza, ...data) {
        orderPizza()
        this.ordernumber++
        this.emit(eventName, data)
    }
    displayOrderNumber() {
        console.log(`Current order number is:${this.ordernumber}`);
        
    }
}

module.exports = PizzaShop