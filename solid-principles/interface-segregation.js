/* 
"A client should not be forced to depend on methods it does not use."

In simpler terms, interfaces should be designed in such a way that they are specific to the needs of the client. 
Large, generalized interfaces should be broken down into smaller, more focused ones.


# Key Concepts of ISP
Avoid Fat Interfaces: Interfaces should have only the methods that a particular client needs.
Separation of Concerns: Each interface should address a specific responsibility.
Flexibility: Makes the code more modular and easier to maintain.

*/


// Generalized Printer Interface
class Printer {
    printDocument() {}
    scanDocument() {}
    faxDocument() {}
}

// Implementing the interface
class BasicPrinter extends Printer {
    printDocument() {
        console.log("Printing document...");
    }

    scanDocument() {
        throw new Error("Scan feature not supported");
    }

    faxDocument() {
        throw new Error("Fax feature not supported");
    }
}

/*
Problems
Unused Methods: BasicPrinter is forced to implement scanDocument() and faxDocument() methods, which it doesn’t support.
*/


// Solution
// Step 1: Create Specific Interfaces
// Interfaces for specific functionalities
class Printable {
    printDocument() {}
}

class Scannable {
    scanDocument() {}
}

class Faxable {
    faxDocument() {}
}

// Step 2: Implement Only Required Interfaces

// Basic Printer: Implements only Printable
// Basic Printer: Implements only Printable
class BasicPrinter extends Printable {
    printDocument() {
        console.log("Printing document...");
    }
}

// Advanced Printer: Implements Printable and Scannable
class AdvancedPrinter extends Printable {
    printDocument() {
        console.log("Printing document...");
    }
}

// Scanner: Implements only Scannable
class Scanner extends Scannable {
    scanDocument() {
        console.log("Scanning document...");
    }
}

// Multi-functional Printer: Implements Printable, Scannable, and Faxable
class AllInOnePrinter extends Printable {
    printDocument() {
        console.log("Printing document...");
    }
}

class FaxMachine extends Faxable {
    faxDocument() {
        console.log("Faxing document...");
    }
}



// Using Basic Printer
const basicPrinter = new BasicPrinter();
basicPrinter.printDocument(); // Output: Printing document...

// Using Advanced Printer
const advancedPrinter = new AdvancedPrinter();
advancedPrinter.printDocument(); // Output: Printing document...

// Using Multi-functional Printer
const allInOnePrinter = new AllInOnePrinter();
allInOnePrinter.printDocument(); // Output: Printing document...

// Using Scanner
const scanner = new Scanner();
scanner.scanDocument(); // Output: Scanning document...

// Using Fax Machine
const faxMachine = new FaxMachine();
faxMachine.faxDocument(); // Output: Faxing document...

