//Не работает
var words = [prompt("Введите число палиндром")];
var rev = words.reverse();
function palindrom() {
  if (words == rev) {
    document.writeln("Вы ввели палиндром");
  } else {
    document.writeln("Слово не палиндром");
  }
}
palindrom();
