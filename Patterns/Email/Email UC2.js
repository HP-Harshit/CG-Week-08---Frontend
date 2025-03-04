// Define the regex pattern
const regexPattern = /^[a-zA-Z0-9._%+-]+@bridgelabz\.[a-zA-Z]{2,}$/;

// Sample email addresses
const testEmails = [
  "abc@bridgelabz.co.in",
  "xyz@bridgelabz.com",
  "abc@xyz.com", 
  "abc@.bridgelabz.co", 
  "xyz@bridgelabz", 
  "abc@bridgelabz.c", 
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
