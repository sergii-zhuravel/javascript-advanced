var state = {
  todo: [],
  inprogress: [],
  done: [],
  itemId: 2,

  addItem: function (key, item) {
    this[key].push(item);
  },

  deleteItem: function (key, item) {
    var index = this[key].findIndex(element => element.id === item.id);
    if(index === -1) return; 
    this[key].splice(index, 1);
  },

  moveItem: function (from, to, itemId) {
    var item = state[from].find(element => element.id == itemId);
    this.deleteItem(from, item);
    this.addItem(to, item);
  }
}

document.addEventListener('DOMContentLoaded', initBoard);
function initBoard() {
  if (!localStorage.getItem("state")) {
    callAjax("http://localhost:3000/state", function callbackHandler(responseText) {
      localStorage.setItem("state", responseText);
    });
    setTimeout(initPanels, 500);
  } else {
    initPanels();
  }
}

function initPanels() {
  if (localStorage.getItem("state")) {
    var stateObj = JSON.parse(localStorage.getItem("state"));
    state.todo = stateObj.todo;
    state.inprogress = stateObj.inprogress;
    state.done = stateObj.done;
    state.itemId = stateObj.itemId;
  }

  initPanel('todo', state.todo);
  initPanel('inprogress', state.inprogress);
  initPanel('done', state.done);
}


function initPanel(key, todoList) {
  var panel = document.getElementById(key);
  todoList.forEach(todo => {
    panel.appendChild(createItemSpan(todo.id, todo.title));
  });
}

function removeItem(itemId){
  console.log("Called remove item with id = "+itemId);
   
  var itemToRemove=document.getElementById(itemId);
  state.deleteItem(itemToRemove.parentElement.id, new ItemData(itemId));
  itemToRemove.parentNode.removeChild(itemToRemove);
}

function createItemSpan(id, title) {
  var closeButton = document.createElement("span");
  closeButton.textContent = "x";
  closeButton.onclick = function(){
    removeItem(id);
  };
  
  var todoElement = document.createElement("div");
  todoElement.id = id;
  todoElement.draggable = true;
  todoElement.ondragstart = onDragStart;
  todoElement.textContent = title;
  todoElement.appendChild(closeButton);
  todoElement.className += " itemElement";
  return todoElement;
}

function newTodoItem() {
  var inputField = document.getElementById("new-todo");
  var newTitle = inputField.value;
  inputField.value = '';

  if (!newTitle) {
    return; 
  }
  var todoDiv = document.getElementById("todo");
  showItem(todoDiv, ++state.itemId, newTitle);
}

function showItem(columnDiv, newId, newTitle) {
 state.addItem(columnDiv.id, new ItemData(newId, newTitle));
 columnDiv.appendChild(createItemSpan(newId,newTitle));
}


function callAjax(url, callback) {
  var xmlhttp;
  xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      callback(xmlhttp.responseText);
    }
  }
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}


document.getElementById("new-todo").addEventListener("keyup", 
function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("addBtn").click();
  }
});


function ItemData(id, title) { 
  this.id = id;
  this.title = title;
}
function downloadItems() {
callAjax("https://jsonplaceholder.typicode.com/users/1/todos", function acceptResponse(responceText)
{
  var responceJson = JSON.parse(responceText);
  state.todo = [];
  state.inprogress = [];
  state.done = [];
  state.itemId = 0;
  deleteChildren("todo");
  deleteChildren("inprogress");
  deleteChildren("done");
  
  var todoColumnDiv = document.getElementById("todo");
  var doneColumnDiv = document.getElementById("done");
  responceJson.forEach(item => {
     if(item.completed) {
       showItem(doneColumnDiv, item.id, item.title);
     } else {
        showItem(todoColumnDiv, item.id, item.title);
     }
     
     state.itemId++; 
  })
  
})
}
function deleteChildren(parentId) {
  var parent = document.getElementById(parentId);
  while (parent.childElementCount > 1) {
    parent.removeChild(parent.lastChild);
  }
}