// Assignment code here

var passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters");

var lowercasePrompt= (window.confirm("Would you like to use lowercase?"));

var uppercasePrompt= (window.confirm("Would you like to use uppercase?"));

var numericPrompt= (window.confirm("Would you like to use numeric characters?"));

var specialPrompt = (window.confirm("Would you like to use special characters?"));

var generateBtn = document.querySelector("#generate");

// if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
//   alert("Input is invalid");
//   return false;
// } else {

generateBtn.addEventListener("click", windowPrompts);

// random character strings //
  
  let numerics =String.fromCharCode(Math.floor(Math.random() * 10) + 48);

  let randomLower = String.fromCharCode(Math.floor(Math.random() * 26) + 97);

  let randomUpper = String.fromCharCode(Math.floor(Math.random() * 26) + 65);

  let specials= String.fromCharCode(Math.floor(Math.random() * 6) + 33);

  console.log(numerics);

// have to define generate password //

function generatePassword() { 
  if (passwordLength === numerics) {
    return true;
  } if (lowercasePrompt === true) {
    return true;
  } if (uppercasePrompt === true) {
    return true;
  } if (specialPrompt === true) {
    return true;
  }
}

function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  if (generatePassword()=== true) {
  return password;
  }
}