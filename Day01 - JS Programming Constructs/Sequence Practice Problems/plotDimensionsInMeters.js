// Convert 42 inches to feet
let inches = 42;
let feet = inches / 12;
console.log(inches + " inches is " + feet + " feet");

// Convert dimensions of a rectangular plot from feet to meters
let lengthFeet = 60;
let widthFeet = 40;
let lengthMeters = lengthFeet * 0.3048;
let widthMeters = widthFeet * 0.3048;
console.log("Rectangular Plot: " + lengthFeet + " feet x " + widthFeet + " feet is " + lengthMeters + " meters x " + widthMeters + " meters");

// Calculate area of 25 such plots in acres
let areaMeters = lengthMeters * widthMeters;
let totalAreaMeters = areaMeters * 25;
let totalAreaAcres = totalAreaMeters / 4046.86;
console.log("Area of 25 plots in acres: " + totalAreaAcres);
