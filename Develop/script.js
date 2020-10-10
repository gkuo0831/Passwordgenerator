// User variables:
var enter;
var confirmUppercase;
var confirmLowercase;
var confirmNumber;
var confirmCharacter;

//Numeric numbers:
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// Alphabet:
alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // ask for user input
  enter = parseInt(
    prompt("How many characters would you like your password to be?")
  );
}
