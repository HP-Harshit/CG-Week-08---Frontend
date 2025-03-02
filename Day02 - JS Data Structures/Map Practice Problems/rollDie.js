function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

function rollUntilTen() {
  let counts = new Map();
  let maxCount = 10;

  while (true) {
    let result = rollDie();
    if (counts.has(result)) {
      counts.set(result, counts.get(result) + 1);
    } else {
      counts.set(result, 1);
    }

    if (counts.get(result) === maxCount) {
      break;
    }
  }

  let maxNumber = [...counts.entries()].reduce((a, b) => (a[1] > b[1] ? a : b));
  let minNumber = [...counts.entries()].reduce((a, b) => (a[1] < b[1] ? a : b));

  console.log("Die Roll Counts: ", counts);
  console.log("Number with max occurrences: ", maxNumber[0]);
  console.log("Number with min occurrences: ", minNumber[0]);
}

rollUntilTen();
