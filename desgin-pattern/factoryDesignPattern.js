
// Factory Design Patter : It is creation pattern to encapsulate object creation
class Car {
  drive() {
    console.log('Driving a car');
  }
}

class Bike {
  drive() {
    console.log('Riding a bike');
  }
}

class VehicleFactory {
  static createVehicle(type) {
    if (type === 'car') return new Car();
    if (type === 'bike') return new Bike();
    throw new Error('Invalid type');
  }
}

// Usage
const myVehicle = VehicleFactory.createVehicle('car');
myVehicle.drive(); // Driving a car



//  ------------- Abasctract Factory Design Pattern---------------

// 1. Creates families dependent objects without specifying their concrete classes.

//✅ Real-World Analogy:
//You go to a Furniture Factory, and you ask for a Victorian-style or Modern-style set. The factory gives you a matching set of chair, sofa, and coffee table, all in that style.

class VictorianChair {
    sit() {
        console.log(`Sitting on Victorian Chair`);
    }
}

class ModernChair {
    sit() {
        console.log(`Sitting on Modern Chair`);
    }
}

class VictorianTable {
    study() {
        console.log(`Studying on Victorian Table`);
    }
}

class ModernTable {
    study() {
        console.log(`Studying on Modern Table`);
    }
}

class FurnitureFactory {
    createChair(){}
    createTable() {}
}

class VictorianStyleFurnitureFactory extends FurnitureFactory {
    createChair() {
        return new VictorianChair()
    }

    createTable() {
        return new VictorianTable()
    }
}


class ModernStyleFurnitureFactory extends FurnitureFactory {
    createChair() {
        return new ModernChair()
    }

    createTable() {
        return new ModernTable()
    }
}
