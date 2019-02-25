var state = {
  todo: [],
  inprogress: [],
  done: [],
  count: 0,
  addItemToState: function(key, item) {
    this[key].push(item);
  },
  deleteItemFromState: function(key, item) {
    this[key] = this[key].filter(element => element.id !== item.id);
  },
  moveItemToOtherPanel: function(fromPanelId, toPanelId, itemId) {
    var item = state[fromPanelId].find(element => element.id === itemId);
    this.deleteItemFromState(fromPanelId, item);
    this.addItemToState(toPanelId, item);
  }
};

document.addEventListener("DOMContentLoaded", recordExists());

function initBoard() {
  initPanel("todo", state.todo);
  initPanel("inprogress", state.inprogress);
  initPanel("done", state.done);
}

function initPanel(key, todoList) {
  var panel = document.getElementById(key);
  panel.addEventListener("dragover", dragover);
  panel.addEventListener("dragenter", dragenter);
  panel.addEventListener("drop", drop);
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
  var todoElement = document.createElement("span");
  todoElement.id = id;
  todoElement.textContent = title;
  return todoElement;
}

var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    this.parentElement.remove();
  };
}

function newElement() {
  var li = document.createElement("li");
  li.setAttribute("draggable", "true"); //making li draggable
  li.ondragstart = onDragStart; // for drag and drop
  li.setAttribute("id", "listElement" + state.count++);
  var inputValue = document.getElementById("new-todo").value;
  var text = document.createTextNode(inputValue);
  li.appendChild(text);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("todo").appendChild(li);
    state.addItemToState("todo", li);
    state.todo.push({ id: state.todo.length + 1, title: inputValue });
    localStorage.setItem("state", JSON.stringify(state));
  }
  document.getElementById("new-todo").value = "";

  var span = document.createElement("SPAN");
  span.onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  };
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
}

function inLocalStorage() {
  var exists = JSON.parse(localStorage.getItem("state"));
  state.todo = exists.todo;
  state.inprogress = exists.inprogress;
  state.done = exists.done;
  state.count = state.count;
}

function recordExists() {
  for (var i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i) === "state") {
      console.log("in function");
      inLocalStorage();
      initBoard();
    }
    initBoard();
  }
}

function makeRequest(url, method, params) {
  var httpRequest = false;

  if (window.XMLHttpRequest) {
    // Mozilla, Safari, ...
    httpRequest = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    // IE
    try {
      httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {}
    }
  }

  if (!httpRequest) {
    alert("not possible to create XMLHTTP ");
    return false;
  }
  httpRequest.onreadystatechange = function() {
    connect(httpRequest);
  };
  httpRequest.open(method, url, true);
  httpRequest.send(params);
}

upload.addEventListener("click", function() {
  makeRequest("https://jsonplaceholder.typicode.com/todos", "GET", null);
});

function connect(httpRequest) {
  if (httpRequest.readyState == 4) {
    if (httpRequest.status == 200) {
      var obj = JSON.parse(httpRequest.responseText);
      console.log(obj);
      state.todo = obj;
      initPanel("todo", state.todo);
    } else if (httpRequest.status == 201) {
      var getUrl = url + "/" + JSON.parse(httpRequest.responseText).id;
      makeRequest(getUrl, "GET", null);
    } else if (httpRequest.status == 404) {
      console.log("For O For");
    } else {
      console.error("Connection issue.");
    }
  }
}
