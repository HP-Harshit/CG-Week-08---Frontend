function generateBirthdays() {
  let birthdays = new Map();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  for (let i = 0; i < 50; i++) {
    let month = Math.floor(Math.random() * 12);
    let year = Math.floor(Math.random() * 2) + 2000;

    let birthMonth = `${months[month]} ${year}`;

    if (birthdays.has(birthMonth)) {
      birthdays.get(birthMonth).push(i + 1);
    } else {
      birthdays.set(birthMonth, [i + 1]);
    }
  }

  return birthdays;
}

function printBirthdays() {
  let birthdays = generateBirthdays();
  birthdays.forEach((individuals, month) => {
    console.log(
      `${month}: ${individuals.length} individuals (${individuals.join(", ")})`
    );
  });
}

printBirthdays();
