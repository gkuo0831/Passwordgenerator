//promts, eventlistener,

// User variables:
var confirmUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var confirmLowercase = "abcdefghijklmnopqrstuvwxyz";
var confirmCharacter = "!#$%&‘()*+,-./:;<=>?@[]^_`{|}~";
var confirmNumber = "0123456789";
let userChoice = [];
var password = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();

  // ask for user input
  let length = prompt(
    "What would you like the length of your password to be? Choose between 8-128 characters."
  );
  if (length < 8) {
    alert("Password is too short!");
    return;
  }
  console.log(length);
  //add in for password too long

  let upperCase = confirm(
    "Would you like upper case letters in your password?"
  );
  if (upperCase) {
    userChoice.push(...confirmUppercase);
  }
  console.log(upperCase);
  console.log(userChoice);

  let lowerCase = confirm(
    "Would you like lower case letters in your password?"
  );
  if (lowerCase) {
    userChoice.push(...confirmLowercase);
  }
  console.log(userChoice);

  let number = confirm("Would you like numbers in your password?");
  if (number) {
    userChoice.push(...confirmNumber);
  }
  console.log(userChoice);
}
