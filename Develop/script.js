// Assignment code here

function windowPrompts() {
  if (window.confirm("Would you like to generate a password?"));
  let passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters");
  let lowercase= prompt("Do you want to use lowercase?");
  let uppercase= prompt("Do you want to use uppercase?");
  let numeric= prompt("Do you want to use numeric characters?");
  let specialCharacters=prompt("Do you want to use special characters?");
}

function validatePrompts() {
  let x = windowPrompts.passwordLength.value;
  if (x=="") {
    text= "Input must be filled out"
  }
  if (isNaN(x) && x < 8 && x > 128) {
    text= "Input is not valid";
  } else {
    text= "Input submitted";
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
