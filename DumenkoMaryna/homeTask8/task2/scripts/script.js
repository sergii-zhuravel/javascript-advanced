var btn = document.getElementById('button-add');
var todoList = document.getElementById('todo-list');
var todoItemTemplate = todoList.firstElementChild;
btn.onclick = addItem;
function addItem() {
    var input = document.getElementById('todo-input');
    var newItem = todoItemTemplate.cloneNode(true);
    newItem.firstChild.textContent = input.value;
    // добавить новый элемент в todo-list 
    todoList.appendChild(newItem);
    input.value = '';
}

function removeItem(e) {
    // используя переданный объект Event
    // удалить весь тег li который является родительским 
    // для кнопки на которой выполнили клик
    var todoItem = e.target.parentElement;
    todoItem.remove();
    console.log(todoItem);
}
