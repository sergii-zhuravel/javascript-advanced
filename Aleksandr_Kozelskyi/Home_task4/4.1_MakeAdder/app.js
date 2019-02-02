function makeAdder(n) {
  return function(m) {
    return (n += m);
  };
}

var add10 = makeAdder(10);
console.log(add10(25));
