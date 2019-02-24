if (localStorage.length > 0) {
  document.getElementById("todo").innerHTML = "";
  var stateFromStorage = [];
  var stateInProgress = [];
  var stateDone = [];
  for (var i = 0; i < localStorage.length; i++) {
    var localStorId = parseInt(localStorage.key(i), 10);
    var itemState = localStorage.key(i).replace(/\d/g, "");
    var localStorTitle = localStorage.getItem(localStorage.key(i));
    if (itemState == "todo" || "") {
      var itemsFromServer = {
        id: +localStorId,
        title: localStorTitle
      };
      stateFromStorage.push(itemsFromServer);
    } else if (itemState == "inprogress") {
      var itemsFromServer = {
        id: +localStorId,
        title: localStorTitle
      };
      stateInProgress.push(itemsFromServer);
    } else if (itemState == "done") {
      var itemsFromServer = {
        id: +localStorId,
        title: localStorTitle
      };
      stateDone.push(itemsFromServer);
    } else {
      var itemsFromServer = {
        id: +localStorId,
        title: localStorTitle
      };
      stateFromStorage.push(itemsFromServer);
    }
  }
}

var state = {
  todo: stateFromStorage,
  inprogress: stateInProgress,
  done: stateDone,
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
};

document.addEventListener("DOMContentLoaded", initBoard);

function saveState() {
  localStorage.clear();
  var todoSpan = document.getElementById("todo").children;
  var inprogressSpan = document.getElementById("inprogress").children;
  var doneSpan = document.getElementById("done").children;
  var todoCount = document.getElementById("todo-count");
  var inprogressCount = document.getElementById("inprogress-count");
  var doneCount = document.getElementById("done-count");
  for (var i = 0; i < todoSpan.length; i++) {
    localStorage.setItem(
      todoSpan[i].id + "todo",
      todoSpan[i].firstChild.textContent
    );
  }
  todoCount.innerHTML = "Task: " + todoSpan.length;
  for (var i = 0; i < inprogressSpan.length; i++) {
    localStorage.setItem(
      inprogressSpan[i].id + "inprogress",
      inprogressSpan[i].firstChild.textContent
    );
  }
  inprogressCount.innerHTML = "Task: " + inprogressSpan.length;
  for (var i = 0; i < doneSpan.length; i++) {
    localStorage.setItem(
      doneSpan[i].id + "done",
      doneSpan[i].firstChild.textContent
    );
  }
  doneCount.innerHTML = "Task: " + doneSpan.length;
}

function initBoard() {
  initPanel("todo", state.todo);
  initPanel("inprogress", state.inprogress);
  initPanel("done", state.done);
}

function initPanel(key, todoList) {
  var panel = document.getElementById(key);
  for (var i = 0; i < todoList.length; i++) {
    var currentItemObject = todoList[i];
    var newTodoElement = createTodoElement(
      currentItemObject.id,
      currentItemObject.title
    );
    panel.appendChild(newTodoElement);
  }
}

function createTodoElement(id, title) {
  var todoBtn = document.createElement("button");
  var todoElement = document.createElement("span");
  todoBtn.innerText = "X";
  todoElement.id = id;
  todoBtn.id = id;
  todoBtn.setAttribute("onclick", "todoDel(event)");
  todoElement.draggable = true; // for drag and drop
  todoElement.ondragstart = onDragStart; // for drag and drop
  todoElement.textContent = title;
  todoElement.appendChild(todoBtn);
  return todoElement;
}

function addFromServer() {
  makeRequest(url, "GET", null);
  document.location.reload(true);
  saveState();
}

function todoDel(event) {
  event.target.parentNode.remove();
  for (var i = 0; i < localStorage.length; i++) {
    var itemState = localStorage.key(i).replace(/\d/g, "");
    var id = event.target.id + itemState;
    localStorage.removeItem(id);
  }
  saveState();
}

function clearAllData() {
  localStorage.clear();
  document.location.reload(true);
}

class NewItem {
  constructor() {
    this.id = localStorage.length + 1;
  }
  addInStorage() {
    var val = document.getElementById("newtodo").value;
    localStorage.setItem(this.id, val);
  }
}

var newTodo = new NewItem();

function addItem() {
  newTodo.addInStorage();
  document.location.reload(true);
}
