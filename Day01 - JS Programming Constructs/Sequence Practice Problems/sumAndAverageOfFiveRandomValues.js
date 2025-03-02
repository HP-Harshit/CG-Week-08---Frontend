let values = [];
for (let i = 0; i < 5; i++) {
    values.push(Math.floor(Math.random() * 90) + 10);
}
console.log("Random 2 Digit values: " + values);

let sum = values.reduce((a, b) => a + b, 0);
let average = sum / values.length;
console.log("Sum: " + sum);
console.log("Average: " + average);
