// Assignment code here
var generateBtn = document.querySelector("#generate");

function runPrompts() {
  var passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters");
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Input is invalid");
    return false;
  } else {
    alert(passwordLength);
  }

  var lowercasePrompt = (window.confirm("Would you like to use lowercase?"));
  var uppercasePrompt = (window.confirm("Would you like to use uppercase?"));
  var numericPrompt = (window.confirm("Would you like to use numeric characters?"));
  var specialPrompt = (window.confirm("Would you like to use special characters?"));

  if (lowercasePrompt === false && uppercasePrompt === false && numericPrompt === false && specialPrompt === false) {
    alert("You must select at least one option");
    return false;
  }

  var chosenCharacters = "";
  if(lowercasePrompt == true) {
    chosenCharacters += "qwertyuiopasdfghjklzxcvbnm"
  }
  if(uppercasePrompt == true) {
    chosenCharacters += "QWERTYUIOPASDFGHJKLZXCVBNM"
  }
  if(numericPrompt == true) {
    chosenCharacters += "1234567890"
  }
  if(specialPrompt== true) {
    chosenCharacters += "!@#$%&*?"
  }

  var passwordResult = ""

  for(i=0; i<passwordLength; i++){
    var randomCharacter = chosenCharacters[Math.floor(Math.random() * chosenCharacters.length)]
    passwordResult += randomCharacter
    console.log(passwordResult)
  }

  var passwordText = document.querySelector("#password");
  passwordText.value = passwordResult;

}

generateBtn.addEventListener("click", runPrompts);