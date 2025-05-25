// Example 1
let num = 90
function print() {
     let num = 20
}
print()
console.log(`Print value outside function: ${num}`);

// Example 2

{
  var a = 1;
  let b = 2;
  const c = 3;
}

console.log(a); // ✅ 1 (var is function-scoped)
console.log(b); // ❌ ReferenceError
console.log(c); // ❌ ReferenceError

