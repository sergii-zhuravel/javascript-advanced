 var sum = function(a,b,c) {
    return a+b+c;
  }
  
  
  var mul = function(a,b,c) {
      return a*b*c;
  }
  
  
  function applyAll(f,a1,b1,c1) {
      var result = f(a1,b1,c1);
      return f.name+'('+a1+','+b1+','+c1+') = '+result;    
  }
  
   console.log( applyAll(sum, 1, 2, 3) ); // -> sum(1, 2, 3) = 6
   console.log( applyAll(mul, 2, 3, 4) ); // -> mul(2, 3, 4) = 24