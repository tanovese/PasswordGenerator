// Assignment code here

function windowPrompts() {

  passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters");

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Input is invalid");
    return false;
  } else {
    generatePassword();
  }
  if (window.confirm("Would you like to use lowercase?") === true);
    generatePassword();
  if (window.confirm("Would you like to use uppercase?") === true);
    generatePassword();
  if (window.confirm("Would you like to use numeric characters?") === true);
    generatePassword();
  if (window.confirm("Would you like to use special characters?") === true);
    generatePassword();
}

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", windowPrompts);

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword(length, numbers, specials, lowercaseLetters, uppercaseLetters); {
//   if (numbers.value === true)
//     return numericCharacters;
//   if (specials.value === true)
//     return specialCharacters;
//   if (lowercaseLetters.value === true)
//     return lowercase;
//   if (uppercaseLetters.value === true)
//     return uppercase;
//   }
// }


//functions for random characters//

function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomNumeric() {
  const numerics= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  
  return numerics[Math.floor(Math.random() * numerics.length)];
}

function randomSpecial() {
  const specials= ["!", "@", "#", "$", "%", "&", "*", "?"];
  
  return specials[Math.floor(Math.random() * specials.length)];
}

// function writePassword() {
//   var password = generatePassword(randomNumeric, randomLower, randomUpper, randomSpecial); {
//     if randomNumeric.value === true;
//     return randomNumeric;
//     if randomLower.value ==true;
//   }
//   // have to define generate password
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
// }