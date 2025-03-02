const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the conversion type (1: Feet to Inch, 2: Feet to Meter, 3: Inch to Feet, 4: Meter to Feet): ', (conversionType) => {
    rl.question('Enter the value to convert: ', (value) => {
        let result;
        switch (parseInt(conversionType)) {
            case 1:
                result = value * 12;
                console.log(value + " feet is " + result + " inches");
                break;
            case 2:
                result = value * 0.3048;
                console.log(value + " feet is " + result + " meters");
                break;
            case 3:
                result = value / 12;
                console.log(value + " inches is " + result + " feet");
                break;
            case 4:
                result = value / 0.3048;
                console.log(value + " meters is " + result + " feet");
                break;
            default:
                console.log("Invalid conversion type");
        }
        rl.close();
    });
});
