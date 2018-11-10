// Написать JavaScript код, который:
// 1. Найдет todo-input и получит значение введенное в поле
// 2. Найдет элемент li
// 3. Создаст deep клон элемента li
// 4. Поменять только текст у клона элемента li



// 1
var text = document.getElementsByTagName('input') [0];
var val = text.value;
alert(val);

// 2
var li = document.getElementsByClassName('todo-item') [0];
console.log(li);

// 3
var li = document.getElementsByClassName('todo-item') [0];
var cln = li.cloneNode(true);
document.getElementById('todo-list').appendChild(cln);

// 4
var li = document.getElementsByClassName('todo-item') [0];
var cln = li.cloneNode(true);
cln.innerHTML = 'New text';
document.getElementById('todo-list').appendChild(cln);







