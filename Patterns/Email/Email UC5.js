// Define the updated regex pattern
const regexPattern =
  /^[a-zA-Z0-9._%+-]+(\.[a-zA-Z0-9._%+-]+)?@bridgelabz\.co(\.[a-zA-Z]{2})?$/;

// Sample email addresses
const testEmails = [
  "abc.xyz@bridgelabz.co.in",
  "abc_xyz@bridgelabz.co.in",
  "abc+xyz@bridgelabz.co.in",
  "abc-xyz@bridgelabz.co.in",
  "abc@bridgelabz.co",
  "abc..xyz@bridgelabz.co.in",
  "abc@.bridgelabz.co",
  "abc.xyz@bridgelabzcom",
  "abc.xyz@bridgelabz.c",
  "abc@bridgelabz..co.in",
  "abc@bridgelabz.co.us",
  "abc@bridgelabz.co",
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
