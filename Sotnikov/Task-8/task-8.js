// var btn = document.getElementById('button-add');
// var todoItemTemplate = document.getElementById('todo-list').firstElementChild;
// btn.onclick = addItem;
// function addItem() {
//     var input = document.getElementById('todo-input');
//     var newItem = todoItemTemplate.cloneNode(true);
//     newItem.firstChild.textContent = input.value;
//     // добавить новый элемент в todo-list 
//     // ... ваш код тут
//     todoItemTemplate.appendChild(newItem);
//     input.value = '';
// }

// function removeItem(e) {
//     e.target.parentElement.remove();
//     // используя переданный объект Event
//     // удалить весь тег li который является родительским 
//     // для кнопки на которой выполнили клик
//     // ... ваш код тут
// }

// document.addEventListener("DOMContentLoaded", myFunction());
//   function myFunction() {
//     console.log('Hello from My Function');
//   }
//   console.log('Hello from main JS code');

document.addEventListener("DOMContentLoaded", function(e) {
    myFunction();
});

function myFunction() {
    console.log('Hello from My Function');
}

console.log('Hello from main JS code');