//------------------------- Rest ---------------------------------
// The rest operator is represented by three dots (...).
// When used in a function's parameter list, it catches any extra arguments passed to the function and packs them neatly into an array
function restOperator(a, ...rest) {
    console.log(`Value of a: ${a} and rest parameter value:`, rest);
}
console.log(restOperator(10, 1, 2, 3, 4, 5));


// ----------------------- Spread ----------------------------------
// Taking all the items in an array and spreading them out, essentially unpacking the array so that each item becomes an individual element.
function spread(a, b, c) {
    return a + b + c;
}

console.log(abc(...[1, 2, 3]));