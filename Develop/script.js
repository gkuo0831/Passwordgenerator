// User variables:
var enter;
var confirmUppercase;
var confirmLowercase;
var confirmNumber;
var confirmCharacter;



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

