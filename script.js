// Assignment Code
var generateBtn = document.querySelector("#generate");

var letters = [
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
];
var numeric = [
  "0","1","2","3","4","5","6","7","8","9"
];
var nonNumeric = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","|","\\",":",";",'"',"'","<",",",">",".","?","/"
];


var numberOfChar = 10; // TODO: update with prompt.

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
  
  var reqChar = {
    lower: true,
    upper: false,
    numeric: false,
    nonNumeric: false,
  };

  

  return pass;
}
