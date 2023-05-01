// Assignment code here

function runPrompts() {
  passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters");
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
      alert("Input is invalid");
      return false;
    } else {
      true;
    }

  lowercasePrompt= (window.confirm("Would you like to use lowercase?"));

  uppercasePrompt= (window.confirm("Would you like to use uppercase?"));

  numericPrompt= (window.confirm("Would you like to use numeric characters?"));

  specialPrompt = (window.confirm("Would you like to use special characters?"));

}
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", runPrompts);

// random character strings //

  let randomNumeric = String.fromCharCode(Math.floor(Math.random() *10) + 48);
  
  let randomLower = String.fromCharCode(Math.floor(Math.random() * 26) + 97);

  let randomUpper = String.fromCharCode(Math.floor(Math.random() * 26) + 65);

  let randomSpecial= String.fromCharCode(Math.floor(Math.random() * 6) + 33);

  console.log();


// have to define generate password //

function generatePassword() { 
}

function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  return password;
}