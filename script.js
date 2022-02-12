// Assignment Code
var generateBtn = document.querySelector("#generate");

var letters = [
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
];
var numeric = [
  "0","1","2","3","4","5","6","7","8","9"
];
var nonNumeric = [
  "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","|","\\",":",";",'"',"'","<",",",">",".","?","/"
];



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var pass = "";
  var numberOfChar = 10; // TODO: update with prompt.
  var rerunAttempts = 0;

  var reqChar = {
    lower: true,
    upper: false,
    numeric: false,
    nonNumeric: false
  };

  var containsChar = {
    lower: false,
    upper: false,
    numeric: false,
    nonNumeric: false
  };

  // TODO: Make function to assign characters.
  // TODO: within function to assign, randomize between chosen sets.

  var validation = validateRequest(reqChar, containsChar)

  if (validation == false && rerunAttempts > 1){
    console.log("Failed");
    rerunAttempts++
    generatePassword()
  }
  console.log("pass: ", pass)
  return pass;
}

function validateRequest (required, contains){
  // Validates whether at least one character has been added per request.
  var pwCriteria = true;
  for (key in required){
    if (required.key !== contains.key){
      pwCriteria = false;
    }
  }
  return pwCriteria;
}