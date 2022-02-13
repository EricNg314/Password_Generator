// Assignment Code
var generateBtn = document.querySelector("#generate");

var lettersArr = [
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
];
var numericArr = [
  "0","1","2","3","4","5","6","7","8","9"
];
var nonNumericArr = [
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
  var reRunAttempts = 0;
  var maxReRunAttempts = 10;

  var reqChar = {
    lower: document.getElementById('paramLower').checked,
    upper: document.getElementById('paramUpper').checked,
    numeric: document.getElementById('paramNumeric').checked,
    nonNumeric: document.getElementById('paramNonNumeric').checked,
  };

  // For validation against requirements.
  var containsChar = {
    lower: false,
    upper: false,
    numeric: false,
    nonNumeric: false
  };

  var validRequest = validateRequest(numberOfChar, reqChar, containsChar);
  
  if (validRequest === true){

    function runMakePassword(){

      pass = makePassword(numberOfChar, reqChar, containsChar);
  
      var validation = validateResponse(reqChar, containsChar, numberOfChar, pass)
      console.log("validation: ", validation)
  
      console.log("pass attempt: ", pass)
      if (validation == false && reRunAttempts <= maxReRunAttempts){
        reRunAttempts++
        console.log("Failed reRunAttempts: ", reRunAttempts);
        // Resetting contains type.
        containsChar = {
          lower: false,
          upper: false,
          numeric: false,
          nonNumeric: false
        };
        runMakePassword()
      }
    }
    runMakePassword()
  }

  return pass;
}

function validateRequest(characters, types){
  // Validates if params include at 8-128 characters and contains at least 1 type.
  var typeConfirm = false;
  var charConfirm = false;
  var confirmation = false;

  // Check if at least 1 type is present
  for(var ea in types){
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
    // console.log("password request is good.")
    confirmation = true
  } else {
    console.log("password request is bad.")
  }

  return confirmation;
}

function makePassword(numberOfChar, reqChar, containsChar) {
  var passString = "";
  var paramArr = [];

  for(key in reqChar) {
    if(reqChar[key] === true){
      paramArr.push(key)
    }
  }

  var numbOfParam = paramArr.length;

  for(var i = 1; i <= numberOfChar; i++){
    // TODO: within function to assign, randomize between chosen sets.
    var charType = paramArr[getRandomInt(numbOfParam)]

    if(charType === "lower"){
      passString = passString + getRandValue(lettersArr, 'lower')
    } else if (charType === "upper") {
      passString = passString + getRandValue(lettersArr, 'upper')
    } else if (charType === "numeric") {
      passString = passString + getRandValue(numericArr, 'none')
    } else if (charType === "nonNumeric") {
      passString = passString + getRandValue(nonNumericArr, 'none')
    }
    containsChar[charType] = true
    
  }
  console.log("making password");

  return passString;
}

function getRandomInt(max){
  return Math.floor(Math.random() * max)
}

function getRandValue(valueArr, letterCase){
  var string = '';
  if(letterCase === 'lower'){
    string = valueArr[getRandomInt(valueArr.length)]
  } else if (letterCase === 'upper') {
    string = valueArr[getRandomInt(valueArr.length)].toUpperCase()
  } else if (letterCase === 'none') {
    string = valueArr[getRandomInt(valueArr.length)]
  }
  return string
}

function validateResponse (required, contains, reqNumb, pass){
  // Validates whether at least one character has been added per request.
  var pwCriteria = true;

  for (key in required){
    if (required[key] !== contains[key]){
      console.log(`validateResponse: required[${key}]: `, required[key])
      console.log(`validateResponse: contains[${key}]: `, contains[key])
      pwCriteria = false;
    }
  }

  if(pass.length < reqNumb) {
    console.log("validateResponse: Failed pass.length: ", pass.length)
    pwCriteria = false;
  }

  return pwCriteria;
}

