function add10(a) {
  function counter() {
    return counter.addValue + a;
  }
  counter.addValue = 10;

  return counter;
}

var counter = add10(100);

console.log(counter());
