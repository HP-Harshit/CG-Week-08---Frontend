let n = parseInt(process.argv[2]);
let factors = [];

for (let i = 2; i * i <= n; i++) {
    while (n % i === 0) {
        factors.push(i);
        n = n / i;
    }
}

if (n > 1) {
    factors.push(n);
}

console.log(`The prime factors of the number are: ${factors.join(', ')}`);
