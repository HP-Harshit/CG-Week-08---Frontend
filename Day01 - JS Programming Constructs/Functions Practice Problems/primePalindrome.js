function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function getPalindrome(num) {
  return parseInt(num.toString().split("").reverse().join(""));
}

let num = parseInt(process.argv[2]);

if (isPrime(num)) {
  console.log(`${num} is a prime number.`);
  let palindrome = getPalindrome(num);
  if (isPrime(palindrome)) {
    console.log(`Its palindrome ${palindrome} is also prime.`);
  } else {
    console.log(`Its palindrome ${palindrome} is not prime.`);
  }
} else {
  console.log(`${num} is not a prime number.`);
}
