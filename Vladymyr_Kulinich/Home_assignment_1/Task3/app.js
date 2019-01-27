function isPalindrome(str) {
  var strLen = str.length,
    strReverse = str
      .split("")
      .reverse()
      .join("");
  if (strReverse == str) {
    return "Слово является палиндромом";
  } else {
    return "Слово не является палиндромом";
  }
}
document.writeln(test = isPalindrome(prompt("Введите слово палиндром")));
