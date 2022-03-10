// Assignment code here
var generatePassword = function() {
  var promptLength = window.prompt('Please choose a password length between 8-128 characters');

  if(typeof promptLength !== 'number'){
    window.alert('please enter a number between 8-128');
  }else {
    console.log(promptLength);
    return promptLength;
    
  }
};


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
