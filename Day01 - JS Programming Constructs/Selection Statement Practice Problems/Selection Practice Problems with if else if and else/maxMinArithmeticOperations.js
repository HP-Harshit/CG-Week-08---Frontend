let a = parseInt(process.argv[2]);
let b = parseInt(process.argv[3]);
let c = parseInt(process.argv[4]);

let result1 = a + b * c;
let result2 = a % b + c;
let result3 = c + a / b;
let result4 = a * b + c;

let maxResult = Math.max(result1, result2, result3, result4);
let minResult = Math.min(result1, result2, result3, result4);

console.log("Results of arithmetic operations:");
console.log("a + b * c = " + result1);
console.log("a % b + c = " + result2);
console.log("c + a / b = " + result3);
console.log("a * b + c = " + result4);
console.log("Maximum result: " + maxResult);
console.log("Minimum result: " + minResult);
