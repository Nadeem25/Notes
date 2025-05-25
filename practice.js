let user = {
    name: 'John Cena',
    age: 45,
    address: {
        city: 'mumbai'
    }
}

const shallowCopyByAssign = Object.assign({}, user)
const shallowCopyBySpread = {...user}

console.log(`Original Object: `, user);
shallowCopyByAssign.address.city = 'Berlin'
console.log(`Shallow Copy Object: `, shallowCopyByAssign);
console.log(`Original Object after changing city name: `, user);

const deepCopy = JSON.parse(JSON.stringify(user))
deepCopy.name = "Mark Hennery"
console.log(`After changing the name the original object:`, user);



