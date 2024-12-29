/*  ----------- Singleton --------------------------
The Singleton Design Pattern ensures that a class has only one instance and provides a global point of access to that instance.
In JavaScript, singletons are often used to manage shared resources, configuration settings, or stateful services.
*/



// Eager Loading: In eager loading, the instance of the singleton is created as soon as the class is loaded, regardless of whether it is used.
class EagerSingleton {
    static instance = new EagerSingleton(); // Instance created immediately

    constructor() {
        if (EagerSingleton.instance) {
            return EagerSingleton.instance; // Return the pre-created instance
        }
        this.timestamp = new Date();
    }

    static getTimestamp() {
        this.timestamp = new Date()
        return this.timestamp;
    }

    static getInstance() {
        return EagerSingleton.instance
    }
}

// Usage
console.log(` -------------- Eager loading singleton design pattern ------------`);

const singleton1 = EagerSingleton.getInstance();
console.log(`singleton1 object`,singleton1); // Logs the timestamp of creation

const singleton2 = EagerSingleton.getInstance();
console.log(`singleton2 object`,singleton2); // Same timestamp as singleton1

const singleton3 = new EagerSingleton()
console.log(`singleton3 object`,singleton3);

console.log(singleton1 === singleton2); // true




// Lazy Loading : In lazy loading, the instance of the singleton is not created until it is needed for the first time. 
// This can save resources, especially if the instance is resource-intensive and might not be used.
class LazySingleton {
    constructor() {
        if(LazySingleton.instance) {
            return LazySingleton.instance;
        }
        this.timestamp = new Date()
        LazySingleton.instance = this
    }

    getInstance() {
        return LazySingleton.instance
    }
}

console.log(` -------------- Lazy loading singleton design pattern ------------`);
const singletonObj1 = new LazySingleton()
const singletonObj2 = new LazySingleton()

console.log(`singletonObj1`, singletonObj1.getInstance());
console.log(`singletonObj2`, singletonObj2.getInstance());

