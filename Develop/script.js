// Assignment code here

function windowPrompts() {

  passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters");

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Input is invalid");
    return false;
  } else {
    writePassword();
  }
  if (window.confirm("Would you like to use lowercase?") === true);
    writePassword();
  if (window.confirm("Would you like to use uppercase?") === true);
    writePassword();
  if (window.confirm("Would you like to use numeric characters?") === true);
    writePassword();
  if (window.confirm("Would you like to use special characters?") === true);
    writePassword();
}

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", windowPrompts);

// random character strings //
  
  let numerics =String.fromCharCode(Math.floor(Math.random() * 10) + 48);

  let randomLower = String.fromCharCode(Math.floor(Math.random() * 26) + 97);

  let randomUpper = String.fromCharCode(Math.floor(Math.random() * 26) + 65);

  let specials= String.fromCharCode(Math.floor(Math.random() * 6) + 33);

  console.log(numerics);

// have to define generate password //

function generatePassword() {
  if (numerics.value=== true) {
    return numerics;
  } if (randomLower.value === true) {
    return randomLower;
  } if (randomUpper.value === true) {
    return randomUpper;
  } if (specials.value === true) {
    return specials;
  }
}

function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  if (generatePassword()=== true) {
  return password;
  }
  
}