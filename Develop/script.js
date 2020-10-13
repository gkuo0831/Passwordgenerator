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