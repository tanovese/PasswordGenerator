// Assignment code here

let passwordLength;
function windowPrompts() {
  passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters");
  console.log(passwordLength)

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Input must be filled ins");
    windowPrompts()
  } else {
    writePassword()
  }
}

generateBtn.addEventListener("click", windowPrompts);

// if (passwordLength.value < 8 && passwordLength.value > 128); {
//   alert("Input is not valid");
// }

// isNaN(passwordLength.value) &&


function 
//   if (window.confirm("Do you want to use lowercase?"));
//   if (window.confirm("Do you want to use uppercase?"));
//   if (window.confirm("Do you want to use numeric characters?"));
//   if (window.confirm("Do you want to use special characters?"));
// }

// function checkEmpty() {

//   if (passwordLength.value === "") {
//     alert("Please enter a value");
//     return false;
//   }

// }

// let x=passwordLength.value;
// if (x=="") {
//   text= "Input must be filled out"
// }
// if (isNaN(x) && x < 8 && x > 128) {
//   text= "Input is not valid";
// } else {
//   text= "Input submitted";
// }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // windowPrompts();
  // var password = generatePassword(); //have to define generate password
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

// Add event listener to generate button//
