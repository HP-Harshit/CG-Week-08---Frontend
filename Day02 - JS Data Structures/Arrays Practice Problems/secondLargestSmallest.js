function generateRandomNumbers(count) {
  let numbers = [];
  for (let i = 0; i < count; i++) {
    let randomNum = Math.floor(Math.random() * 900) + 100;
    numbers.push(randomNum);
  }
  return numbers;
}

function findSecondLargestAndSmallest(arr) {
  let largest = -Infinity,
    secondLargest = -Infinity;
  let smallest = Infinity,
    secondSmallest = Infinity;

  for (let num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num != largest) {
      secondLargest = num;
    }

    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest && num != smallest) {
      secondSmallest = num;
    }
  }

  return { secondLargest, secondSmallest };
}

let randomNumbers = generateRandomNumbers(10);
console.log("Random Numbers: " + randomNumbers);
let result = findSecondLargestAndSmallest(randomNumbers);
console.log("Second Largest: " + result.secondLargest);
console.log("Second Smallest: " + result.secondSmallest);
