//promts, eventlistener,

// User variables:
var confirmUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var confirmLowercase = "abcdefghijklmnopqrstuvwxyz";
var confirmCharacter = "!#$%&‘()*+,-./:;<=>?@[]^_`{|}~";
var confirmNumber = "0123456789";
var userChoice = [];
var password = [];
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // ask for user input
  generateBtn = parseInt(
    prompt(
      "How many characters would you like your password to be? Choose between 8 and 128."
    )
  );
}
