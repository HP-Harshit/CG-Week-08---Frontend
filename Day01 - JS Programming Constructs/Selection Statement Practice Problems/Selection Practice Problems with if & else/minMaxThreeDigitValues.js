let values = [];
for (let i = 0; i < 5; i++) {
    values.push(Math.floor(Math.random() * 900) + 100);
}
console.log("Random 3 Digit values: " + values);

let minValue = Math.min(...values);
let maxValue = Math.max(...values);
console.log("Minimum value: " + minValue);
console.log("Maximum value: " + maxValue);
