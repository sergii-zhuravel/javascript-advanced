var newAdd = parseInt(prompt("Введите число"));
function makeAdder(someNumber) {
  return function() {
    return someNumber + newAdd;
  };
}
var add = makeAdder(15);
document.writeln(add());
