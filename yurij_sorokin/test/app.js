var arr = [];

for (var i = 0; i < 20; i++) {
  if (i == 0 || i == 19) {
    arr[i] = 1;
  } else {
    arr[i] = 0;
  }
}

console.log(arr);

console.log(arr.indexOf(1));

var arr2 = [];

for (var i = 0; i < 20; i++) {
  if (i % 2 == 0) {
    arr2[i] = 0;
  } else {
    arr2[i] = 1;
  }
}

console.log(arr2);

var arr3 = [];

for (var i = 0; i < 20; i++) {
  if (i % 2 !== 0) {
    arr3.push(i);
  }
}

console.log(arr3);

var arr4 = [];

for (var i = 0; i < 20; i++) {
  if (i % 2 == 0) {
    arr4.push(i);
  }
}

console.log(arr4);

var arr6 = [];

for (var i = 0; i < 10; i++) {
  var num = i * i;
  arr6.push(num);
}

console.log(arr6);

var quant = 0;
for (var j = 0; j < arr6.length; j++) {
  if (arr6[j] % 3 == 0 && arr6[j] % 7 !== 0) {
    console.log(arr6[j]);
    quant++;
  }
}

console.log(quant);

// Array.join = Array.join || function(a, sep) {
//   return Array.prototype.join.call(a, sep);
// }

// var num = 1123540;
// var str = num.toString()
// Array.prototype.join.call(str, ',');
// console.log(str);
// console.log(typeof str);

var myFunc = function(num) {
  var number = num;
  var str = number.toString();
  var ar = [];
  for (var i = 0; i < str.length; i++) {
    ar[i] = str[i];
  }

  console.log(ar);

  var quantOfEven = 0;
  var quantOfOdd = 0;
  for (var j = 0; j < ar.length; j++) {
    if (ar[j] % 2 == 0) {
      quantOfEven += 1;
      console.log(ar[j]);
    } else {
      quantOfOdd += 1;
      console.log(ar[j]);
    }
  }

  return (
    "In this case number has " +
    quantOfEven +
    " even digit(s) and " +
    quantOfOdd +
    " odd digit(s)"
  );
};

console.log(myFunc(123));
console.log(myFunc(11223));


var fib = function(n) {
  console.log(n);
  var fn = [];
  console.log(fn);
  for(var i = 0; i < n; i++) {
   if(i==0) {
    fn[i] = 0;
   } else if (i==1){
    fn[i] = 1;
   } else {
     fn[i] = fn[i - 2] + fn[i - 1]; 
   }
  
  }
  return fn;
}

console.log(fib(8));

