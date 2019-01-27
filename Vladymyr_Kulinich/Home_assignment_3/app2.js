function func() {
  var x = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
  document.writeln(x);
  return x;
}

function applyAll(func) {
  var x = 5 + func();
  document.writeln(x);
}
applyAll(func);
