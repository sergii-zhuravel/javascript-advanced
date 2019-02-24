
var state = {
  todo: [],
  inprogress: [],
  done: [],
  basket: [],
  idCounter: 0,
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

document.addEventListener('DOMContentLoaded', ifStateDump);

function initBoard() {// визуализация колонок с туду-шками после загрузки
 initPanel('todo', state.todo);
 initPanel('inprogress', state.inprogress);
 initPanel('done', state.done);
}

function initPanel(key, todoList) {// выбираем из state todo-шки и отображаем их в соответствующей колонке.
  var panel = document.getElementById(key);
  for(var i = 0; i< todoList.length; i++ ) {
    var currentItemObject = todoList[i];
    var newTodoElement = createTodoElement(currentItemObject.id, currentItemObject.title);
    panel.appendChild(newTodoElement);
  }
}

function createTodoElement(id, title) {// отрисовка конкретного элемента в виде тегов.
  var todoElement = document.createElement("span");
  todoElement.id = id;
  todoElement.draggable = true; // for drag and drop
  todoElement.ondragstart=onDragStart; // for drag and drop
  todoElement.innerHTML = title + '<div style="float: right; color: rgb(255, 100, 100)" onclick="remItem(event)">del</div>';
  return todoElement;
}

// создаем новую туду, записываем её в state и выводим в панель.
document.getElementById('add').onclick = function () {
  var title = document.getElementById('new-todo').value;
  var id = state.idCounter;
  var newItem = {id, title};
  ++state.idCounter;
  if (state.idCounter > 100500) {state.idCounter = 0};
  document.getElementById('new-todo').value = '';
  state.addItemToState('todo', newItem);
  document.getElementById('todo').appendChild(createTodoElement(id, title));
}

//удаление туду по кнопке 'del' из панели переброска в корзину.
function remItem (e) {
  var remTodo = e.target.parentNode;
  state.moveItemToOtherPanel(remTodo.parentElement.id, 'basket', remTodo.id);
  remTodo.parentElement.removeChild(remTodo);
  document.getElementById('basket').textContent = 'Drop item here to remove... ' + state.basket.length + ' items in.';
}

//чистим корзину.
document.getElementById('del').onclick = function () {
  state.basket = [];
  document.getElementById('basket').textContent = 'Drop item here to remove... No items in.'
}

function ifStateDump () {//проверка Local Storage на наличие stateDump.
  for (var i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i) === 'stateDump') {
      lsRead();//достать из LS в state.
      initBoard();
      return;
    }
  }
  initBoard();
}

//сохранение в local storage
//document.addEventListener('window.unload', lsWrite); - unload/onunload почему то не работает. Работает только из html.
document.getElementById('write').onclick = lsWrite;
function lsWrite () {
  var stateDump = {
    todo: state.todo,
    inprogress: state.inprogress,
    done: state.done,
    idCounter: state.idCounter,
  }
  localStorage.setItem ('stateDump', JSON.stringify(stateDump));
}

//чтерие из local storage
//document.getElementById('read').onclick = lsRead;
function lsRead () {
  var stateDump = JSON.parse (localStorage.getItem('stateDump'));
  state.todo = stateDump.todo;
  state.inprogress = stateDump.inprogress;
  state.done = stateDump.done;
  state.idCounter = stateDump.idCounter;
}

//загрузка с сервера по кнопке (id меняем воизбежание путаницы).
document.getElementById('load').onclick = loadFromServer;
function loadFromServer () {
  var req = new XMLHttpRequest();
  req.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
  req.send();
  req.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        var stateLoaded = JSON.parse(this.responseText);
        stateLoaded.forEach (function (itemLoaded) {
          itemLoaded.id = state.idCounter;
          ++state.idCounter;
          if (state.idCounter > 100500) {state.idCounter = 0};
          state.addItemToState('todo', itemLoaded);
          document.getElementById('todo').appendChild(createTodoElement(itemLoaded.id, itemLoaded.title));
        });
      }
    }
  }
}




