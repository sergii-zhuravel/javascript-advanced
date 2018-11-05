// Написать JavaScript код, который:
// 1. Найдет todo-input и получит значение введенное в поле 
var value = document.getElementById("todo-input").value;
console.log(value);

// 2. Найдет элемент li
var elementList = document.getElementsByClassName("todo-item")[0];
console.log(elementList);

// 3. Создаст deep клон элемента li
var elementListClone = elementList.cloneNode(true);

// 4. Поменять только текст у клона элемента li
elementListClone.firstChild.textContent ="Это просто текст ";
document.getElementById("todo-list").appendChild(elementListClone);
