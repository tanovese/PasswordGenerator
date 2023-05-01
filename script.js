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

  // var num = 0;
  // num = num + 1;
  // num += 1;
  // num++

  //strings
  // var str = "dog"
  // var sentence = "dog" + " cat"
  // sentence = sentence + str;
  // sentence += str; 

  var passwordResult = ""

  for(i=0; i<passwordLength; i++){
    var randomCharacter = chosenCharacters[Math.floor(Math.random() * chosenCharacters.length)]
    passwordResult += randomCharacter
    console.log(passwordResult)
  }

  var passwordText = document.querySelector("#password");
  passwordText.value = passwordResult;

  // for(j=0; j < 20; j++) {
  //   console.log("something")
  // }


}

generateBtn.addEventListener("click", runPrompts);

// random character strings //

// let randomNumeric = String.fromCharCode(Math.floor(Math.random() * 10) + 48);

// let randomLower = String.fromCharCode(Math.floor(Math.random() * 26) + 97);

// let randomUpper = String.fromCharCode(Math.floor(Math.random() * 26) + 65);

// let randomSpecial = String.fromCharCode(Math.floor(Math.random() * 6) + 33);


// have to define generate password //

// function generatePassword() {
// }

// function writePassword() {
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;

// //   for (var i=0; i < //variabel here, i++) {
// //   password= password + //variable here or function here?[Math.floor(Math.random() * same variable or funciton here?.length)];
// // }
// //   return password;
// // }