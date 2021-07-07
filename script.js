// Assignment Code


lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
specialSymbol = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var choices
var toUpper = function (x) {
  return x.toUpperCase();
};
uppercase = lowercase.map(toUpper);



function length() {
  var length = prompt ("How many characters do you want in your password?")
  if(!length) {
    alert("Please enter a number");
  } else if (length < 8 || length > 128) {
    prompt("You must choose between 8 and 128");
  } else {
    var includeUppercase = confirm ("Would you like to include UPPERCASE?");
    var includeLowercase = confirm ("Would you like to include lowercase?");
    var includeNumber = confirm ("Would you like to include numbers?");
    var includeSpecialSymbol = confirm ("Would you like to include special symbols?");
  };

  if (!includeUppercase && !includeLowercase && !includeNumber && !includeSpecialSymbol) {
    alert("You must choose a criterion!");
  }

  // include 4 criteria
  else if (includeUppercase && includeLowercase && includeNumber && includeSpecialSymbol) {
    choices = uppercase.concat(lowercase, number, specialSymbol);
  }

  // include 3 criteria
  else if (includeUppercase && includeLowercase && includeNumber) {
    choices = uppercase.concat(lowercase, number);
  }

  else if (includeUppercase && includeLowercase && includeSpecialSymbol) {
    choices = uppercase.concat(lowercase, specialSymbol);
  }

  else if (includeLowercase && includeNumber && includeSpecialSymbol){
    choices = lowercase.concat(number, specialSymbol);
  }

  else if (includeNumber && includeSpecialSymbol && includeUppercase) {
    choices = number.concat(specialSymbol, uppercase);
  }

  // include 2 criteria
  else if (includeUppercase && includeLowercase) {
    choices = uppercase.concat(lowercase);
  }

  else if (includeUppercase && includeNumber) {
    choices = uppercase.concat(number);
  }

  else if (includeUppercase && includeSpecialSymbol) {
    choices = uppercase.concat(specialSymbol);
  }

  else if (includeLowercase && includeNumber) {
    choices = lowercase.concat(number);
  }

  else if (includeLowercase && includeSpecialSymbol) {
    choices = lowercase.concat(specialSymbol);
  }

  else if (includeNumber && includeSpecialSymbol) {
    choices = number.concat(specialSymbol);
  }

  // only 1 criterion
  else if (includeUppercase) {
    choices = uppercase;
  }

  else if (includeLowercase) {
    choices = lowercase;
  }

  else if (includeNumber) {
    choices = number;
  }

  else if (includeSpecialSymbol) {
    choices = specialSymbol;
  }

  var password = [];

  // create random selection from criteria
  for (var i = 0; i < length; i++) {
    var character =
    choices[Math.floor(Math.random() * choices.length)];
    password.push(character);
  }

  // Join the password array and turn it into a string
  var generatedPassword = password.join("");
  var passwordBox = document.getElementById("password-box").innerHTML=generatedPassword
  console.log (generatedPassword);
  return generatedPassword;
  
}


