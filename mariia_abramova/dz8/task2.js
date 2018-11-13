var btn = document.getElementById('button-add');
var todoItemTemplate = document.getElementById('todo-list').firstElementChild;
btn.onclick = addItem;

function addItem() {
    var input = document.getElementById('todo-input');
    var newItem = todoItemTemplate.cloneNode(true);
    newItem.firstChild.textContent = input.value;
    document.getElementById('todo-list').appendChild(newItem);
    input.value = '';
}

function removeItem(e) {
    e.target.parentElement.remove();
}

//Вопрос: Почему функция addItem которая клонирует существующие элемент li работает даже если удалить все ToDo элементы?
// Потому что моя версия удалеет обьект из DOM но ссьілка на него осталась и он все еще существует для js