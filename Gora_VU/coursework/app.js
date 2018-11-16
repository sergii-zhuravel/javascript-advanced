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
  },
  counter: 2
}

var sendBtn = document.querySelector("#send");
sendBtn.onclick = function() {

  state.todo = [];
  state.inprogress = [];
  state.done = [];
  
  var request = new XMLHttpRequest();
  request.open("GET","https://jsonplaceholder.typicode.com/todos" );
  request.send();
  request.onreadystatechange = function() {
     if (request.readyState==4 && request.status==200) {
        var arr = JSON.parse(request.responseText);
        for (var i=0;i<arr.length;i+=1) {
          state.addItemToState("todo",arr[i]);
        }
      initPanel('todo', state.todo);
      }
  }
}

var toSt = document.getElementById("toSt");

toSt.onclick = function(){
    localStorage.setItem("state.todo",JSON.stringify(state.todo));
    localStorage.setItem("state.inprogress",JSON.stringify(state.inprogress));
    localStorage.setItem("state.done",JSON.stringify(state.done));
};

document.addEventListener('DOMContentLoaded', initBoard);

function initBoard() {
 checkLocalStorageData(arrTodo,"state.todo");
 checkLocalStorageData(arrInPro,"state.inprogress");
 checkLocalStorageData(arrDone,"state.done");
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

var deleteElem = '<i class="fas fa-times"></i>';
function createTodoElement(id, title) {
  var todoElement = document.createElement("span");
  todoElement.id = id;
  todoElement.draggable = true;
  todoElement.ondragstart=onDragStart;
  todoElement.innerHTML = title + deleteElem;

  var deleteBtn = todoElement.children[0];
  deleteBtn.onclick = function(e) {
    var panel = e.target.parentNode.parentNode;
    var id = +panel.children[0].id;
    var title = panel.children[0].textContent;
    panel.removeChild( e.target.parentNode );
    state.deleteItemFromState(panel.id,{id:id,title:title});
  }
  return todoElement;
}
var addBtn = document.getElementById("add");
addBtn.addEventListener("click",addNew);

var inp = document.querySelector("#new-todo");
function addNew() {
  var inpValue = inp.value;
  var newCount = ++state.counter;
  var newEl = createTodoElement(newCount,inpValue);
  inp.value = "";
  state.addItemToState("todo",{id:newCount,title:inpValue});
  var container = document.getElementById("todo");
  container.appendChild(newEl);
};

inp.addEventListener("keyup", function(e){1
  e.preventDefault();
  if (e.keyCode == 13) {
    addBtn.click();
  }
});

var arrTodo = JSON.parse( localStorage.getItem("state.todo") );
var arrInPro = JSON.parse( localStorage.getItem("state.inprogress") );
var arrDone = JSON.parse( localStorage.getItem("state.done") );

function checkLocalStorageData(array,key) {
  for (var i=0;i<array.length;i+=1) {
    if (localStorage.getItem(key)) {
      state.addItemToState(key.slice(6),array[i])
    }
  }
};
