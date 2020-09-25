// Assignment Code
var generateBtn = document.querySelector("#generate");



generateBtn.addEventListener("click", writePassword);



//1st- declare your 4 variables
var charNumber = ["0","1","2","3","4","5","6","7","8","9","10"];
var charUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var charLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var charSpecial = ["~","!","@","#","$","%","^","&","*","(",")","-","_","+","="];


var askCharLength;
var askNumber;
var askUpper;
var askLower;
var askSpecial;




// 3rd- create your function to generate the password options.
// in this function should be your prompt asking how many characters with parameters for the length, and all your confirm statements.

function PassOpt() {


    var askCharLength = (prompt("please choose a character length between 8 and 128 characters."));
  
    //I want to make a function that does not take a response outside of 8-128 characters. The do/while will continuously loop if 8 and 128 criteria not met.

    if (askCharLength < 8 || askCharLength > 128) {
  
      do { alert("Invalid answer. Please choose between 8 and 128 characters.");
      var askCharLength = (prompt("please choose a character length between 8 and 128 characters."));}
  
     while ( askCharLength < 8 || askCharLength > 128 )
  
    }


    //Prompts to confirm what special characters the user would like to use in their password.

  var askNumber = confirm("would you like your password to use numbers?");

  var askUpper = confirm("would you like your password to use upper case letters?");

  var askLower = confirm("would you like your password to use lower case letters?");

  var askSpecial = confirm("would you like your password to use special characters?");

  //This do/while will keep the user in the statements until they choose at least one of the confirm statements to be true.

  if (askNumber === false && askUpper === false && askLower === false && askSpecial === false) {
    do { alert("You must choose at least one of these options.");

    var askNumber = confirm("would you like your password to use numbers?");

    var askUpper = confirm("would you like your password to use upper case letters?");
  
    var askLower = confirm("would you like your password to use lower case letters?");
  
    var askSpecial = confirm("would you like your password to use special characters?");}

    while (askNumber === false && askUpper === false && askLower === false && askSpecial === false)
  }
  // this object is storing answers check console

  var pwOptions = {
    askCharLength : askCharLength,
    askNumber : askNumber,
    askUpper : askUpper,
    askLower : askLower,
    askSpecial : askSpecial,
  }
  
  console.log(pwOptions);

  return pwOptions;
}
  //Rndomizing function

  function getRandom(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    var result = arr[randomIndex];
    return result;
  }

  //Generate password function will 

  function generatePassword() {
    var options = PassOpt();
    var result = [];
    var possibleChar = [];
    var finalChar = [];
  
    if (options.askNumber) {
      possibleChar = possibleChar.concat(charNumber);
      finalChar.push(getRandom(charNumber));
    }
    
    if (options.askUpper) {
      possibleChar = possibleChar.concat(charUpper);
      finalChar.push(getRandom(charUpper));
    }

        if (options.askLower) {
      possibleChar = possibleChar.concat(charLower);
      finalChar.push(getRandom(charLower));
    }

        if (options.askSpecial) {
      possibleChar = possibleChar.concat(charSpecial);
      finalChar.push(getRandom(charSpecial));
    }

    
  
  for (var i=0; i < options.askCharLength; i++) {
      result.push(getRandom(possibleChar));
  }
  
  for (var i=0; i< finalChar.length; i++) {
      result[i] = finalChar[i]
  }
  return result.join("");
  }
  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


