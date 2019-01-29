function applyAll(fun, context) {
    var ar = [].slice.call(arguments,1);
    return fun.apply(context, ar);
};

console.log(applyAll(Math.max, 2, -2, 3)); 
console.log(applyAll(Math.min, 2, -2, 3)); 



function sum() { 
    return [].reduce.call(arguments, function(a, b) {
      return a + b;
    });
  }
  
  function mul() {
    return [].reduce.call(arguments, function(a, b) {
      return a * b;
    });
  }
  
  console.log( applyAll(sum, 1, 2, 3) ); 
  console.log( applyAll(mul, 2, 3, 4) ); 