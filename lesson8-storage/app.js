window.addEventListener('storage', updateUIState, false);
// var event = new Event('store');
// document.addEventListener('store', updateUIState, false);


document.addEventListener('DOMContentLoaded', function(){
    // window.onstorage = updateUIState;
})
var todoItemTemplate = document.getElementById('todo-list').firstElementChild;

function addItem() {
    var input = document.getElementById('todo-input');
    var todosCount = localStorage['todos.count'] || 0;
    localStorage['todo.item.' + ++todosCount] = input.value;
    localStorage['todos.count'] = todosCount;
    input.value = '';
    console.log('New item was added into LocalStorage');
    //document.dispatchEvent(event);
}

function updateUIState(e) {
    debugger;
    var todosCount = localStorage['todos.count'] || 0;
    if (!todosCount) return false;
    for (var i = 1; i <= todosCount; i++) {
        console.log(localStorage['todo.item.' + i]);
        // var newItem = todoItemTemplate.cloneNode(true);
        // newItem.firstChild.textContent = input.value;
    }
}