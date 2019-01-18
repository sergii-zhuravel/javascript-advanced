// Task 3

var inputUserString = prompt("Enter a word or phrase...");

function checkPalindrome(str) {
    var valid = "Congratuletion!!! " + "'" + str + "'" + " is palindrome!!!";
  
    for(var i = 0, j = str.length - 1; i < str.length; i++, j--) {
        if (str[i] !== str[j]) valid = "Ups :( " + "'" + str + "'" + " is not palindrome. Try again"; break;
    }
  
    document.writeln(valid);
}

checkPalindrome(inputUserString);
