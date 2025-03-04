const pinCodePattern = /^[1-9][0-9]{5}$/;
const pinCode1 = "400088";
const pinCode2 = "A400088";

console.log(
  pinCodePattern.test(pinCode1) ? "Valid PIN code" : "Invalid PIN code"
); 
console.log(
  pinCodePattern.test(pinCode2) ? "Valid PIN code" : "Invalid PIN code"
); 
