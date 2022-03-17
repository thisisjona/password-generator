// Assignment code here
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min) + min);

  return value;
};
//create variable for generated password


var specialCharacters =  '!#$%&()*+,-./:;<=>?@"][^_`{}~';
var numericValues = '1234567890';
var lowerAlpha = 'abcdefghijklmnopqrstuvwxyz';
var upperAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//prompt user for password criteria
var prompts = function(){
  var charString = [];
  var lowerCase = window.confirm('Would you like to include uppercase letters?');
    if(lowerCase){
      charString.push(lowerAlpha);
      console.log(charString);
    }
  var upperCase = window.confirm('Would you like to include lower case letters?');
    if(upperCase){
      charString.push(upperAlpha);
      console.log(charString);
    }
  var numbersPrompt = window.confirm('Would you like to include numbers?');
    if(numbersPrompt) {
      charString.push(numericValues);
    }
  var charsPrompt = window.confirm('Would you like to include special characters?');
    if(charsPrompt) {
      charString.push(specialCharacters);
    }
  var passwordString = charString.join('');
  console.log(passwordString); 
  return passwordString ;
};






var generatePassword = function() {
var lengthPrompt = window.prompt("Choose a password length between 8-128 characters");
var usedChars ;
var password = "";
//validate proper entry for password length
if(lengthPrompt >= 8 && lengthPrompt <= 128) {
  usedChars = prompts();
}else if(lengthPrompt < 8 || lengthPrompt > 128) { 
  window.alert("Please enter a numerical value between 8-128");
  console.log("not within parameters");
  generatePassword();
}else if (typeof lengthPrompt !== "number"){
  console.log('not a number');
  window.alert("You must enter a numerical value.");
  generatePassword();

};
for (var i = 0; i <= lengthPrompt; i++) {
  var randomNumber = Math.floor(Math.random() * usedChars.length);
  password += usedChars.charAt(randomNumber);
};
return password;
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
