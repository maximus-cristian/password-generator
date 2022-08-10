// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = document.getElementById("password");

function genPassword() {
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var number = "1234567890";
  var symbol = "!@#$%^&*()_+~\`";
  var chars = "";
  var password = ""
  
  var passwordLength = prompt("please enter a number between 8-128");
if (passwordLength < 8 || passwordLength > 128 ){
  alert("Ensure your password is between 8 and 128 characters");
  return;
}

  var numeric = confirm("Would you like any numbers?");
  var upper = confirm("Would you like any uppercase letters?");
  var lower = confirm("Would you like any lowercase letters?");
  var special = confirm("Would you like any special characters?");
  if (numeric === true) { chars += number 
  };
  if (upper === true) { chars += upperCase 
  };
  if (lower === true) { chars += lowerCase 
  };
  if (special === true) { chars += symbol
   };

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = [Math.floor(Math.random() * chars.length)];
  }
  document.getElementById("password").value = password;
}
generateBtn.addEventListener("click", writePassword);