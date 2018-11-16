var state = {
  todo: [],
  inprogress: [],
  done: [],
  addItemToState: function(key, item) {
    this[key].push(item);
  },
  deleteItemFromState: function(key, item) {
    this[key] = this[key].filter(element => element.id != item.id);
  },
  moveItemToOtherPanel: function(key1, key2, itemId) {
    var item = state[key1].find(element => element.id == itemId);
    this.deleteItemFromState(key1, item);
    this.addItemToState(key2, item);
  }
}

 

document.addEventListener('DOMContentLoaded', initBoard);

function initBoard() {
 initPanel('todo', state.todo);
 initPanel('inprogress', state.inprogress);
 initPanel('done', state.done);
}

function initPanel(key, todoList) {
  var panel = document.getElementById(key);
  for(var i = 0; i< todoList.length; i++ ) {
    var currentItemObject = todoList[i];
    var newTodoElement = createTodoElement(currentItemObject.id, currentItemObject.title);
    panel.appendChild(newTodoElement);
  }
} 
function createTodoElement(id, title) {
  var todoElement = document.createElement("span");
  todoElement.id = id;
  todoElement.draggable = true; // for drag and drop
  todoElement.ondragstart=onDragStart; // for drag and drop
  todoElement.textContent = title;

  return todoElement
}

 function addNew(){
  title = document.getElementById('new-todo').value;
  id = state.todo.length + 1;
  createObj = {
    id: this.id,
    title: this.title
  }
  state.todo.push(createObj);
  localStorage.setItem('todo', JSON.stringify(state.todo));
  panel = document.getElementById('todo');
  panel.appendChild(createTodoElement(id , title));
  title = "";
  }