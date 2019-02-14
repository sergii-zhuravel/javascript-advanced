// Написать JavaScript код, который:
// 1. Найдет todo-input и получит значение введенное в поле
// 2. Найдет элемент li
// 3. Создаст deep клон элемента li
// 4. Поменять только текст у клона элемента li

var inputVal = document.getElementById('todo-input').value;
var liFirst = document.getElementById('todo-list').firstElementChild;
var liNext = liFirst.cloneNode(true);
liFirst.parentElement.appendChild(liNext);
liNext.firstChild.textContent = inputVal+" ";