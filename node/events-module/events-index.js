const EventEmitter = require('node:events')
const events = new EventEmitter()

const PizzaShop = require('./pizza-shop')
const pizzaShop = new PizzaShop()

pizzaShop.on('order-pizza', (data) => {
    console.log(`Backing ${data[0] } pizza with topping ${data[1]}`);
})

function orderPizza(size) {
    console.log(`Order Recieved !`);  
}

pizzaShop.order('order-pizza', orderPizza, 'large', 'paneer')
pizzaShop.displayOrderNumber()


// Responde to event
// events.on('order-pizza', (size, topping) => {
//     console.log(`Pizza is backing with ${topping} which size is ${size}`);
// })

// Emit the event
//events.emit('order-pizza', 'large', 'paneer')
