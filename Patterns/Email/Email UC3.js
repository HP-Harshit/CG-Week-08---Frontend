// Define the regex pattern
const regexPattern = /^[a-zA-Z0-9._%+-]+@bridgelabz\.co(\.[a-zA-Z]{2,})?$/;

// Sample email addresses
const testEmails = [
  "abc.xyz@bridgelabz.co.in", 
  "xyz@bridgelabz.co", 
  "abc@bridgelabz.co.in",
  "abc@.bridgelabz.co", 
  "xyz@bridgelabzcom", 
  "abc@bridgelabz.c", 
  "xyz@bridgelabz.con",
];

// Function to validate email addresses
const validateEmail = (email) => {
  return regexPattern.test(email)
    ? `${email} is valid.`
    : `${email} is invalid.`;
};

// Test the emails
testEmails.forEach((email) => {
  console.log(validateEmail(email));
});
