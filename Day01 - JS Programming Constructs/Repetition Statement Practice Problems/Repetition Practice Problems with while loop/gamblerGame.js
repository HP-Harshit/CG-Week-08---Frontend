let money = 100;
let wins = 0;
let bets = 0;
let goal = 200;

while (money > 0 && money < goal) {
    bets++;
    let betResult = Math.floor(Math.random() * 2);
    if (betResult === 0) {
        money--;
    } else {
        money++;
        wins++;
    }
}

console.log(`Number of bets made: ${bets}`);
console.log(`Number of times won: ${wins}`);
if (money === 0) {
    console.log("Gambler goes broke!");
} else {
    console.log("Gambler reaches the goal of Rs 200!");
}
