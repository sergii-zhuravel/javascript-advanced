//Написать JavaScript код, который:
//1. Найдет todo-input и получит значение введенное в поле
var todoInput = document.querySelector("#todo-input").value;
console.log(todoInput);

//2. Найдет элемент li
var li = document.querySelector('li');

//3. Создаст deep клон элемента li
var liClone = li.cloneNode(true);

//4. Поменять только текст у клона элемента li
liClone.textContent = "Second todo x";

//вывод на экран
var ol = document.querySelector('ol');
ol.appendChild(liClone);