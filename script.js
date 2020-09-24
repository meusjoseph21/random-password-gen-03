// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }




//--------------------Psuedocode for what I need to do-----------------------------------------

// I Need a password

//On click which is this->

generateBtn.addEventListener("click", writePassword);

//I will be prompted with confirm statements for: 

//1. Character count between 8 and 128 - cant be under 8 or over 128. 

//2. confirm statements for uppercase, lowercase, numeric, special character - anything that is selected true should be included. These should all be in variables. 

// Variables for password criteria 



//These are variables for the prompts

var askCharLength = "";
var askNumber;
var askUpper;
var askLower;
var askSpecial;

// Character length confirmation

function writePassword() {

  var askCharLength = (prompt("please choose a character length between 8 and 128 characters."))

  //I want to make a function that does not take a response outside of 8-128 characters.

  if (askCharLength < 8 || askCharLength > 128) {

    do { alert("Invalid answer. Please choose between 8 and 128 characters.");
    var askCharLength = (prompt("please choose a character length between 8 and 128 characters."));}

   while ( askCharLength < 8 || askCharLength > 128 )


  }

  var askNumber = confirm("would you like your password to use numbers?");

  var askUpper = confirm("would you like your password to use upper case letters?");

  var askLower = confirm("would you like your password to use lower case letters?");

  var askSpecial = confirm("would you like your password to use special characters?");

  if (askNumber === false && askUpper === false && askLower === false && askSpecial === false) {
    do { alert("You must choose at least one of these options.");

    var askNumber = confirm("would you like your password to use numbers?");

    var askUpper = confirm("would you like your password to use upper case letters?");
  
    var askLower = confirm("would you like your password to use lower case letters?");
  
    var askSpecial = confirm("would you like your password to use special characters?");}

    while (askNumber === false && askUpper === false && askLower === false && askSpecial === false)
  }


//3. after all prompts are answered the password will generate in the box.

var passCriteria = {
  charLength: " " ,
  charNumber: ["0","1","2","3","4","5","6","7","8","9","10"],
  charUpper: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  charLower: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  charSpecial: ["~","!","@","#","$","%","^","&","*","(",")","-","_","+","="],

}

let passwordValue = "";
let password = "";

//This loop will generate password

for (i = 0; i > askCharLength; i++) {

  if (askNumber === true) {
    passwordValue = passwordValue + passCriteria.charNumber;
  }
  
  if (askUpper === true) {
    passwordValue = passwordValue + passCriteria.charUpper;
  }

  if (askLower === true) {
    passwordValue = passwordValue + passCriteria.charLower;
  }

  if (askSpecial === true) {
    passwordValue = passwordValue + passCriteria.charSpecial;
  }
  password = password + passwordValue.charAt(Math.floor(Math.random() * Math.floor(passwordValue.length -1)));

  console.log(password);

  document.getElementById("textarea").value = password;
  
}











//var specificPass = []

// if (askNumber === true) {
//   passSpecific = passCriteria.charNumber[randNumb];
// }
//  if (askUpper === true) {
//   passSpecific = passCriteria.charUpper[randUpper];
//  }

// if (askLower === true) {
//   passSpecific = passCriteria.charLower[randLower];
// }
// if (askSpecial === true) {
//   passSpecific = passCriteria.charSpecial[randSpecial];
// }

//console.log(passSpecific)







  




  
}


//ALL GENERATE RANDOM FROM MY ARRAYS
// var randNumb = Math.floor(Math.random() * passCriteria.charNumber.length);
// var randUpper = Math.floor(Math.random() * passCriteria.charUpper.length);
// var randLower = Math.floor(Math.random() * passCriteria.charLower.length);
// var randSpecial = Math.floor(Math.random() * passCriteria.charSpecial.length);

// console.log(passCriteria.charNumber[randNumb]);
// console.log(passCriteria.charUpper[randUpper]);
// console.log(passCriteria.charLower[randLower]);
// console.log(passCriteria.charSpecial[randSpecial]);



//3. after all prompts are answered the password will generate in the box. 
