function findRepeatedDigits() {
  let repeatedDigits = [];
  for (let i = 10; i <= 99; i++) {
    let tens = Math.floor(i / 10);
    let units = i % 10;
    if (tens === units) {
      repeatedDigits.push(i);
    }
  }
  return repeatedDigits;
}

let repeatedDigits = findRepeatedDigits();
console.log("Repeated Digits: " + repeatedDigits);
