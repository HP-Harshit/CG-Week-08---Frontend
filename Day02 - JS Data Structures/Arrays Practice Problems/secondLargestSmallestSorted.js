function generateRandomNumbers(count) {
  let numbers = [];
  for (let i = 0; i < count; i++) {
    let randomNum = Math.floor(Math.random() * 900) + 100;
    numbers.push(randomNum);
  }
  return numbers;
}

function findSecondLargestAndSmallest(arr) {
  arr.sort((a, b) => a - b); 

  let secondLargest = arr[arr.length - 2];
  let secondSmallest = arr[1];

  return { secondLargest, secondSmallest };
}

let randomNumbers = generateRandomNumbers(10);
console.log("Random Numbers: " + randomNumbers);

let result = findSecondLargestAndSmallest(randomNumbers);
console.log("Sorted Numbers: " + randomNumbers);
console.log("Second Largest: " + result.secondLargest);
console.log("Second Smallest: " + result.secondSmallest);
