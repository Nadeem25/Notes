// Filter: Apply on every item of array and return filterd value in array
const myNumbs = [1,2,3,4,5,6,7,8,8,8,89]
const newNumbs = myNumbs.filter((num) => num > 5)
const newNumbs1 = myNumbs.filter((num) => {
    return num > 8
})
console.log(`Filtered numbers:`, newNumbs);
console.log(`Filtered numbers:`, newNumbs1);

// Map: Filter: Apply on every item of array and return map value in array
const mapNumbers = myNumbs.map((num) => num * 4)
console.log(`Mapped numbers:`, mapNumbers);

// Reducer: Apply on every item of array and return single value
const reduceArray = [1,2,3,4,5]
const initialValue = 0
const sum = reduceArray.reduce((preValue, currentValue) => {
    console.log(`Pevious Value: ${preValue} and Current Value: ${currentValue}`);
    return preValue + currentValue
}, initialValue)
console.log(`Find sum of array element using reduce: `, sum);


