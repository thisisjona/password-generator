// Assignment code here
//create variable for generated password
var passwordString = "";

var specialCharacters =  '!#$%&()*+,-./:;<=>?@"][^_`{}~';
var numericValues = '1234567890';




var generatePassword = function() {
var lengthPrompt = window.prompt("Choose a password length between 8-128 characters");

//validate proper entry for password length
if(lengthPrompt >= 8 && lengthPrompt <= 128) {
  console.log('thanks!');
  window.alert("success");
}else if(lengthPrompt < 8 || lengthPrompt > 128) { 
  window.alert("Please enter a numerical value between 8-128");
  console.log("not within parameters");
  generatePassword();
}else if (typeof lengthPrompt !== "number"){
  console.log('not a number');
  window.alert("You must enter a numerical value.");
  generatePassword();

};
};
//was looking at 3.5 code

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
