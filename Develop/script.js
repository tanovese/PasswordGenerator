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
  
  let numerics =String.fromCharCode(Math.floor(Math.random() * 10) + 48);

  let randomLower = String.fromCharCode(Math.floor(Math.random() * 26) + 97);

  let randomUpper = String.fromCharCode(Math.floor(Math.random() * 26) + 65);

  let specials= String.fromCharCode(Math.floor(Math.random() * 6) + 33);

  console.log(numerics);


function writePassword() {
  var password = generatePassword(numerics, randomLower,randomUpper, specials);
    if (numerics.value === true);{
      return true;
    } else {
    if 
  }
  have to define generate password
  var passwordText = document.querySelector("#password");
  passwordText.value = password;