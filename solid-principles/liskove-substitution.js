// "If a class Parent has a subclass Child, you should be able to replace Parent with Child without breaking the program."

/* 
# Violation of LSP
1. Scenario
We have a Bird class and a Penguin class that extends it. According to the LSP, we should be able to replace Bird objects with Penguin objects without breaking the code.
However, penguins can’t fly, so extending Bird to include a fly() method for penguins violates LSP.
*/

class Bird {
    fly() {
        console.log("I can fly!");
    }
}

class Penguin extends Bird {
    fly() {
        throw new Error("I can't fly!");
    }
}

// Usage
function makeBirdFly(bird) {
    bird.fly(); // This assumes all birds can fly
}

const sparrow1 = new Bird();
makeBirdFly(sparrow); // Output: I can fly!

const penguin1 = new Penguin();
makeBirdFly(penguin); // Error: I can't fly!

// # Problem
// The program assumes that all birds can fly, but penguins can’t. This violates LSP because Penguin cannot fully substitute Bird.


// # Fixing the Violation
// Instead of making Penguin a subclass of Bird with a fly() method, we can refactor to separate flying birds and non-flying birds into different classes.

class Bird {
    eat() {
        console.log("I can eat!");
    }
}

class FlyingBird extends Bird {
    fly() {
        console.log("I can fly!");
    }
}

class NonFlyingBird extends Bird {
    walk() {
        console.log("I can walk!");
    }
}

// Usage
function makeFlyingBirdFly(bird) {
    bird.fly();
}

const sparrow = new FlyingBird();
makeFlyingBirdFly(sparrow); // Output: I can fly!

const penguin = new NonFlyingBird();
penguin.walk(); // Output: I can walk!
