const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function celsiusToFahrenheit(celsius) {
  if (celsius < 0 || celsius > 100) {
    console.log("Temperature must be between 0°C and 100°C.");
    return;
  }
  let fahrenheit = (celsius * 9) / 5 + 32;
  console.log(`${celsius}°C = ${fahrenheit}°F`);
}

function fahrenheitToCelsius(fahrenheit) {
  if (fahrenheit < 32 || fahrenheit > 212) {
    console.log("Temperature must be between 32°F and 212°F.");
    return;
  }
  let celsius = ((fahrenheit - 32) * 5) / 9;
  console.log(`${fahrenheit}°F = ${celsius}°C`);
}

readline.question(
  "Choose conversion: 1 for C to F, 2 for F to C: ",
  (choice) => {
    if (choice == 1) {
      readline.question("Enter temperature in Celsius: ", (celsius) => {
        celsiusToFahrenheit(parseFloat(celsius));
        readline.close();
      });
    } else if (choice == 2) {
      readline.question("Enter temperature in Fahrenheit: ", (fahrenheit) => {
        fahrenheitToCelsius(parseFloat(fahrenheit));
        readline.close();
      });
    } else {
      console.log("Invalid choice.");
      readline.close();
    }
  }
);
