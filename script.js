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
  var numberOfChar = document.getElementById('paramCharNumber').value
  var rerunAttempts = 0;

  var reqChar = {
    lower: document.getElementById('paramLower').checked,
    upper: document.getElementById('paramUpper').checked,
    numeric: document.getElementById('paramNumeric').checked,
    nonNumeric: document.getElementById('paramNonNumeric').checked,
  };


  var containsChar = {
    lower: false,
    upper: false,
    numeric: false,
    nonNumeric: false
  };


  validateRequest(numberOfChar, reqChar);
  

  // TODO: Make function to assign characters.

  // TODO: within function to assign, randomize between chosen sets.

  var validation = validateResponse(reqChar, containsChar)

  if (validation == false && rerunAttempts > 1){
    console.log("Failed");
    rerunAttempts++
    generatePassword()
  }
  console.log("pass: ", pass)
  return pass;
}

function validateRequest(characters, types){
  // Validates if params include at 8-128 characters and contains at least 1 type.
  var typeConfirm = false;
  var charConfirm = false;
  var confirmation = false;

  // Check if at least 1 type is present
  for(ea in types){
    if(types[ea] === true){
      typeConfirm = true;
    }
  }

  if (!typeConfirm) {
    // mark missing type.
  }

  if ((characters >= 8) && (characters <= 128)) {
    charConfirm = true
  } else {
    // mark as invalid number.
  }

  if(typeConfirm && charConfirm){
    console.log("password is good.")
    confirmation = true
  } else {
    console.log("password is bad.")
  }

  return confirmation;
}

function validateResponse (required, contains){
  // Validates whether at least one character has been added per request.
  var pwCriteria = true;
  for (key in required){
    if (required.key !== contains.key){
      pwCriteria = false;
    }
  }
  return pwCriteria;
}

