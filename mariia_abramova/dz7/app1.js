// ------------------------
// Задача 7.1
// ------------------------
// Дано:
// HTML страница в которой есть только такой код
// <div>
//     <input id="todo-input" value="Placeholder" /> <button id="button-add">Add</button>
//     <p>ToDo List:</p>
//     <ol id="todo-list">
//         <li class="todo-item">
//             First todo
//             <span class="delete-button" onclick="removeItem(event)" title="Delete current item">x</span>
//         </li>
//     </ol>
// </div>

// Написать JavaScript код, который:
// 1. Найдет todo-input и получит значение введенное в поле
// 2. Найдет элемент li
// 3. Создаст deep клон элемента li
// 4. Поменять только текст у клона элемента li
var todo = document.getElementById("todo-input").value;
var li = document.getElementsByTagName("li")[0];
var clone = li.cloneNode(true);
clone.textContent = "New text";

console.log(clone)
