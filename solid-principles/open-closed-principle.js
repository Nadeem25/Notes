/* 
"Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification."

This means:
1. You should be able to add new functionality to an existing class/module without modifying its existing code.
2. Achieved through abstraction and polymorphism, ensuring the original code remains untouched and unaffected.
*/


/* 
# Key Benefits of OCP
1. Reduced Risk of Bugs: Existing code remains unchanged, reducing the likelihood of introducing errors.
2. Maintainability: New features can be added easily without impacting the existing system.
3. Scalability: Supports adding new behaviors or functionality without modifying the core logic.

# Problems When OCP Is Violated
1. Frequent Modifications: Adding new functionality requires changes to existing code, which might: 
    1.1. Introduce bugs.
    1.2. Break dependent modules.
2. Tightly Coupled Code: The existing code and new functionality become entangled, reducing modularity.
3. Decreased Maintainability: Every change requires retesting and reviewing the modified code.
4. Higher Development Time: More time is spent on regression testing and debugging.
*/

// ----------------- Scenario without OCP --------------------------------
class PaymentGateway {
    processPayment(amount, method) {
        if (method === "PayPal") {
            console.log(`Processing payment of $${amount} via PayPal.`);
        } else if (method === "Stripe") {
            console.log(`Processing payment of $${amount} via Stripe.`);
        } else if (method === "Razorpay") {
            console.log(`Processing payment of $${amount} via Razorpay.`);
        } else {
            throw new Error("Unsupported payment method");
        }
    }
}

// Usage
const gateway = new PaymentGateway();
gateway.processPayment(100, "PayPal"); // Output: Processing payment of $100 via PayPal.
gateway.processPayment(200, "Stripe"); // Output: Processing payment of $200 via Stripe.



// -------------- Scenario with OCP -------------------------------

// Step 1: Define a Base Class/Interface
// Base Class for Payment Processors
class PaymentProcessor {
    processPayment(amount) {
        throw new Error("processPayment() must be implemented");
    }
}

// Step 2: Create Separate Classes for Each Payment Method
// PayPal Payment Processor
class PayPalProcessor extends PaymentProcessor {
    processPayment(amount) {
        console.log(`Processing payment of $${amount} via PayPal.`);
    }
}

// Stripe Payment Processor
class StripeProcessor extends PaymentProcessor {
    processPayment(amount) {
        console.log(`Processing payment of $${amount} via Stripe.`);
    }
}

// Razorpay Payment Processor
class RazorpayProcessor extends PaymentProcessor {
    processPayment(amount) {
        console.log(`Processing payment of $${amount} via Razorpay.`);
    }
}

// Step 3: Update the Payment Gateway to Use Abstraction
// Payment Gateway
class PaymentGateway {
    constructor(processor) {
        this.processor = processor;
    }

    makePayment(amount) {
        this.processor.processPayment(amount);
    }
}

// Usage
const paypalPayment = new PaymentGateway(new PayPalProcessor());
paypalPayment.makePayment(100); // Output: Processing payment of $100 via PayPal.

const stripePayment = new PaymentGateway(new StripeProcessor());
stripePayment.makePayment(200); // Output: Processing payment of $200 via Stripe.

const razorpayPayment = new PaymentGateway(new RazorpayProcessor());
razorpayPayment.makePayment(300); // Output: Processing payment of $300 via Razorpay.

