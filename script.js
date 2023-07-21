//## Acceptance Criteria

//```
//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page
//```

// press generate button
//
// Assignment Code
console.log(Math.random());
var generateBtn = document.querySelector('#generate');
var alphabet = "abcdefghABCDEFG"
var lower = alphabet.split("");
var upper = alphabet.toUpperCase().split("");
var special = ["$" , "*" ,"%"];
var numbers = [0, 1, 2, 3, 4]
var password = "";

var availChars = [];

if (confirm("lowerCase")) {
  availChars.concat(lower);
}
if (confirm("upperCase")) {
  availChars.concat(upper);
}
var allowedCharacters = "abcdefghABCDEFG$*%";
var charArray = allowedCharacters.split("");
console.log(charArray);
console.log("____________")
var numInArray = Math.floor(Math.random()* charArray.length)
console.log(numInArray);
// Write password to the #password input
function writePassword() {
  var password = generatePassword(str);
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];

  }
}

// Add event listener to generate button

//function writePassword() {
//var password = generatePassword();
//var passwordText = document.querySelector("password")
//}
generateBtn.addEventListener("click", writePassword); {
  generatePassword();
}