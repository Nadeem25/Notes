/*The Builder Design Pattern is a creational design pattern used to construct complex objects step-by-step. 
It separates the construction of an object from its representation, allowing the same construction process to create different representations.

Lets take example of Wardrobe , Waredrop consist of serverl thing
1. 1 or more door // Essenstial
2. Mirror  // Optinal
3. Material  // Essenstial
4. Hanging rods  // Essenstial
5. Wheels // Optinal
6. Number of Compartement  // Essenstial

Problesms: If the add more properties of wardrobe then we need to add one more contstuctor to create object

*/

// class Wardrobe {
//     constructor(door, material, hangingRods, compartement) {
//         this.door = door
//         this.material = material,
//         this.hangingRods = hangingRods,
//         this.compartement =  compartement
//     }

//     constructor(door, material, hangingRods, compartement, wheels) {
//         this.door = door
//         this.material = material,
//         this.hangingRods = hangingRods,
//         this.compartement =  compartement
//         this.wheels = wheels
//     }

//     constructor(door, material, hangingRods, compartement, wheels, mirror) {
//         this.door = door
//         this.material = material,
//         this.hangingRods = hangingRods,
//         this.compartement =  compartement
//         this.wheels = wheels
//         this.mirror = mirror
//     }

// }

class URLBuilder {
    constructor(baseURL) {
        this.baseURL = baseURL; // Base URL (e.g., "https://example.com")
        this.path = "";         // Path (e.g., "/users")
        this.queryParams = {};  // Query parameters (e.g., { key: "value" })
        this.fragment = "";     // Fragment (e.g., "#section")
        this.port = undefined
    }

    setPath(path) {
        this.path = path;
        return this; // Enables method chaining
    }

    addQueryParam(key, value) {
        this.queryParams[key] = value;
        return this; // Enables method chaining
    }

    setFragment(fragment) {
        this.fragment = fragment;
        return this; // Enables method chaining
    }

    setPort(port) {
        this.port = port
        return this
    }

    build() {
        let url = this.baseURL;

        if(this.port) {
            url+=this.port
        }

        if (this.path) {
            url += this.path;
        }

        const queryKeys = Object.keys(this.queryParams);
        if (queryKeys.length > 0) {
            const queryString = queryKeys
                .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(this.queryParams[key])}`)
                .join("&");
            url += `?${queryString}`;
        }

        if (this.fragment) {
            url += `#${this.fragment}`;
        }

        return url;
    }
}

// Usage Example
const url = new URLBuilder("https://example.com").setPort(':8080').setPath('/user')
console.log(url.build());

