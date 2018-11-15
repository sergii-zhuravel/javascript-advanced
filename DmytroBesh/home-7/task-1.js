// Написать JavaScript код, который:
// 1. Найдет todo-input и получит значение введенное в поле 
var value = document.getElementById("todo-input").value;
console.log(value);

// 2. Найдет элемент li
var li = document.getElementsByClassName("todo-item")[0];
console.log(li);

// 3. Создаст deep клон элемента li
var liClone = li.cloneNode(true);

// 4. Поменять только текст у клона элемента li
liClone.innerHTML ="text ";
document.getElementById("todo-list").appendChild(liClone);