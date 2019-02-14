// var arr = [];

// for (var i = 0; i < 20; i++) {
//   if (i == 0 || i == 19) {
//     arr[i] = 1;
//   } else {
//     arr[i] = 0;
//   }
// }

// console.log(arr);

// console.log(arr.indexOf(1));

// var arr2 = [];

// for (var i = 0; i < 20; i++) {
//   if (i % 2 == 0) {
//     arr2[i] = 0;
//   } else {
//     arr2[i] = 1;
//   }
// }

// console.log(arr2);

// var arr3 = [];

// for (var i = 0; i < 20; i++) {
//   if (i % 2 !== 0) {
//     arr3.push(i);
//   }
// }

// console.log(arr3);

// var arr4 = [];

// for (var i = 0; i < 20; i++) {
//   if (i % 2 == 0) {
//     arr4.push(i);
//   }
// }

// console.log(arr4);

// var arr6 = [];

// for (var i = 0; i < 10; i++) {
//   var num = i * i;
//   arr6.push(num);
// }

// console.log(arr6);

// var quant = 0;
// for (var j = 0; j < arr6.length; j++) {
//   if (arr6[j] % 3 == 0 && arr6[j] % 7 !== 0) {
//     console.log(arr6[j]);
//     quant++;
//   }
// }

// console.log(quant);

// // Array.join = Array.join || function(a, sep) {
// //   return Array.prototype.join.call(a, sep);
// // }

// // var num = 1123540;
// // var str = num.toString()
// // Array.prototype.join.call(str, ',');
// // console.log(str);
// // console.log(typeof str);

// var myFunc = function(num) {
//   var number = num;
//   var str = number.toString();
//   var ar = [];
//   for (var i = 0; i < str.length; i++) {
//     ar[i] = str[i];
//   }

//   console.log(ar);

//   var quantOfEven = 0;
//   var quantOfOdd = 0;
//   for (var j = 0; j < ar.length; j++) {
//     if (ar[j] % 2 == 0) {
//       quantOfEven += 1;
//       console.log(ar[j]);
//     } else {
//       quantOfOdd += 1;
//       console.log(ar[j]);
//     }
//   }

//   return (
//     "In this case number has " +
//     quantOfEven +
//     " even digit(s) and " +
//     quantOfOdd +
//     " odd digit(s)"
//   );
// };

// console.log(myFunc(123));
// console.log(myFunc(11223));


// var fib = function(n) {
//   console.log(n);
//   var fn = [];
//   console.log(fn);
//   for(var i = 0; i < n; i++) {
//    if(i==0) {
//     fn[i] = 0;
//    } else if (i==1){
//     fn[i] = 1;
//    } else {
//      fn[i] = fn[i - 2] + fn[i - 1]; 
//    }
  
//   }
//   return fn;
// }

// console.log(fib(8));

// var ar = [];
// for(var i = 0; i < 5; i++) {
//   if(i == 0){
//     ar[i] = 0;
//     console.log(ar[i]);
//   } else if (i == 1) {
//     ar[i] = 5;
//     console.log(ar[i]);
//     console.log(ar);
//   } else {
   
//     console.log(ar[i -1 ]);
//     ar[i] = ar[i -1] + 5;
//     console.log(ar[i]);
    
//   }
// }
// console.log(ar);


// window.addEventListener('storage', updateUIState, false); // standard way, but doesn't work in all browsers
var event = new Event('store');
document.addEventListener('store', updateUIState, false);


document.addEventListener('DOMContentLoaded', function(){
    // window.onstorage = updateUIState;
});

var todoItemTemplate = document.getElementById('todo-list').firstElementChild;

function addItem() {
    var input = document.getElementById('todo-input');
    var todosCount = localStorage['todos.count'] || 0;
    localStorage['todo.item.' + ++todosCount] = input.value;
    localStorage['todos.count'] = todosCount;
    input.value = '';
    console.log('New item was added into LocalStorage');
    document.dispatchEvent(event);
}

function updateUIState(e) {
    var todosCount = localStorage['todos.count'] || 0;
    if (!todosCount) return false;
    var listContainer = document.getElementById('todo-list');
    while(listContainer.firstChild) {
        listContainer.removeChild(listContainer.firstChild);
    }
    for (var i = 1; i <= todosCount; i++) {
        // console.log(localStorage['todo.item.' + i]);
        var newItem = todoItemTemplate.cloneNode(true);
        newItem.firstChild.textContent = ['todo.item.' + i];
        listContainer.appendChild(newItem);
    }
}


function removeItem(event) {
    event.target.parentNode.remove();
}


// function getCookie(key) {
//     var cs = document.cookie.split('; ');
//     for(var i = 0; i <= cs.length; i++) {
//      var cookieKeyValue = cs[i].split('=');
//     if (cookieKeyValue[0] === key) return cookieKeyValue[1];
//     }
//     return null;
//   }

// function setCookie(key, value, expires) {
//   var date  = new Date;
//   date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000);
//   document.cookie = key + '=' + value + ';path=/;expires=' + date.toUTCString();
// }

// setCookie('age', 20, 3)


// function deleteCookie(key) {
//   setCookie(key, '', -1);
// }
// deleteCookie('age')