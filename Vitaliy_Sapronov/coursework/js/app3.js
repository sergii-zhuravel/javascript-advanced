
var state = {
  todo: [],
  inprogress: [],
  done: [],
  ubdateLS: function () {
    localStorage.setItem('todo', JSON.stringify(state.todo));
    localStorage.setItem('inprogress', JSON.stringify(state.inprogress));
    localStorage.setItem('done', JSON.stringify(state.done));
  },
  addItemToState: function (key, item) {
    this[key].push(item);
  },
  deleteItemFromState: function (key, item) {
    this[key] = this[key].filter(element => element.id != item.id);
  },
  moveItemToOtherPanel: function (key1, key2, itemId) {
    var item = state[key1].find(element => element.id == itemId);
    this.deleteItemFromState(key1, item);
    this.addItemToState(key2, item);
    this.ubdateLS();
  },
}

class Todo {
  constructor(id, title) {
    this.id = id;
    this.title = title;
  };
}

document.addEventListener('DOMContentLoaded', updateBoard);

function updateBoard() {
  if (localStorage['todo'] || localStorage['inprogress'] || localStorage['done']) {
    state.todo = JSON.parse(localStorage.getItem('todo'));
    state.inprogress = JSON.parse(localStorage.getItem('inprogress'));
    state.done = JSON.parse(localStorage.getItem('done'));
    initBoard();
  }
  else { initBoard() }
}

function initBoard() {
  initPanel('todo', state.todo);
  initPanel('inprogress', state.inprogress);
  initPanel('done', state.done);
}

function initPanel(key, todoList) {
  var panel = document.getElementById(key);
  for (var i = 0; i < todoList.length; i++) {
    var currentItemObject = todoList[i];
    var newTodoElement = createTodoElement(currentItemObject.id, currentItemObject.title);
    panel.appendChild(newTodoElement);
  }
}

function createTodoElement(id, title) {
  var todoElement = document.createElement("div");
  todoElement.className = "todo";
  todoElement.innerHTML = `
    <span>${title}</span>
    <button class="closeTodo" onclick="removeItem(event)">&times;</button>
  `;
  todoElement.id = id;
  todoElement.draggable = true; // for drag and drop
  todoElement.ondragstart = onDragStart; // for drag and drop
  return todoElement;
}

function clearTodoUI() {
  var listContainer = document.getElementById('todo');
  while (listContainer.firstChild) {
    listContainer.removeChild(listContainer.firstChild);
  };
};

function clearInprogressUI() {
  var listContainer = document.getElementById('inprogress');
  while (listContainer.firstChild) {
    listContainer.removeChild(listContainer.firstChild);
  };
};

function clearDoneUI() {
  var listContainer = document.getElementById('done');
  while (listContainer.firstChild) {
    listContainer.removeChild(listContainer.firstChild);
  };
};

function clearTodo() {
  clearTodoUI()
  while (state.todo[0]) {
    state.todo.pop();
  };
  localStorage.setItem('todo', JSON.stringify(state.todo));
  location.reload(true);
};

function clearInprogress() {
  clearInprogressUI()
  while (state.inprogress[0]) {
    state.inprogress.pop();
  };
  localStorage.setItem('inprogress', JSON.stringify(state.inprogress));
  location.reload(true);
};

function clearDone() {
  clearDoneUI()
  while (state.done[0]) {
    state.done.pop();
  };
  localStorage.setItem('done', JSON.stringify(state.done));
  location.reload(true);
};

function clearStorage() {
  localStorage.clear();
  location.reload(true);
};

function clearAll() {
  clearTodo();
  clearInprogress();
  clearDone();
  clearStorage();
};

butCleanAll.addEventListener('click', clearAll);
butCleanTodoUI.addEventListener('click', clearTodoUI);
butCleanTodoStorage.addEventListener('click', clearTodo);
butCleanInprogressUI.addEventListener('click', clearInprogressUI);
butCleanInprogressStorage.addEventListener('click', clearInprogress);
butCleanDoneUI.addEventListener('click', clearDoneUI);
butCleanDoneStorage.addEventListener('click', clearDone);


var url = 'https://jsonplaceholder.typicode.com/todos';

downServer.addEventListener('click', function () { makeRequest(url, 'GET', null) });
var todosCount;
var todoNew;

function doSomethingWithConent(httpRequest) {

  if (httpRequest.readyState == 4) {
    if (httpRequest.status == 200) {
      var obj = JSON.parse(httpRequest.responseText);
      clearAll();
      todosCount = localStorage['todos.count'] || 0;
      obj.forEach(function (todo) {
        todoNew = new Todo(todo.id, todo.title);
        localStorage.setItem('todo.item.' + todosCount, JSON.stringify(todoNew));
        localStorage['todos.count'] = ++todosCount;

      });
      for (var i = 0; i < todosCount; i++) {
        todoNew = JSON.parse(localStorage.getItem('todo.item.' + i));
        state.todo.push(todoNew);
      }
      state.ubdateLS();
      initBoard();
    } else if (httpRequest.status == 201) {
      var getUrl = url + '/' + JSON.parse(httpRequest.responseText).id;
      makeRequest(getUrl, "GET", null);
    }
    else {
      console.error('С запросом возникла проблема.');
    }
  }
}

function makeRequest(url, method, params) {
  var httpRequest = false;

  if (window.XMLHttpRequest) {
    httpRequest = new XMLHttpRequest();
  } else if (window.ActiveXObject) { // IE
    try {
      httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) { }
    }
  }

  if (!httpRequest) {
    alert('Не вышло :( Невозможно создать экземпляр класса XMLHTTP ');
    return false;
  }
  httpRequest.onreadystatechange = function () { doSomethingWithConent(httpRequest); };
  httpRequest.open(method, url, true);
  httpRequest.send(params);
}

function addItem() {
  var input = document.getElementById('new-todo');
  todosCount = localStorage['todos.count'] || 0;
  todoNew = new Todo(++todosCount, input.value);
  localStorage.setItem('todo.item.' + (todosCount - 1), JSON.stringify(todoNew));
  localStorage['todos.count'] = todosCount;
  input.value = '';
  todoNew = JSON.parse(localStorage.getItem('todo.item.' + (todosCount - 1)));
  state.todo.push(todoNew);
  state.ubdateLS();
  clearTodoUI();
  clearInprogressUI();
  clearDoneUI();
  initBoard();
}

var add = document.getElementById('addItem');
add.addEventListener('click', addItem);

function removeItem(e) {
  e.target.parentNode.parentNode.removeChild(e.target.parentNode);
  //  Удаление элемента всего лишь муляж, удаляется с DOM, из массива удалить я не смог
}

// var btnDel = document.querySelector ("")