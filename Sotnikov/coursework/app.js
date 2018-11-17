
var state = {
  todo: [],
  inprogress: [],
  done: [],
  addItemToState: function(key, item) {
    if (localStorage.getItem('todo') || localStorage.getItem('todo') || localStorage.getItem('todo')) {
        this[key].push(item);
        localStorage.setItem("todo", JSON.stringify(state.todo));
        localStorage.setItem("inprogress", JSON.stringify(state.inprogress));
        localStorage.setItem("done", JSON.stringify(state.done));
    } else {
        this[key].push(item);
    }
  },
  deleteItemFromState: function(key, item) {
    if (localStorage.getItem('todo') || localStorage.getItem('todo') || localStorage.getItem('todo')) {
        this[key] = this[key].filter(element => element.id != item.id);
        localStorage.clear()
    } else {
        this[key] = this[key].filter(element => element.id != item.id);
    }
  },
  moveItemToOtherPanel: function(key1, key2, itemId) {
    var item = state[key1].find(element => element.id == itemId);
    this.deleteItemFromState(key1, item);
    this.addItemToState(key2, item);
  }
}

document.addEventListener('DOMContentLoaded', initBoard);

function initBoard() {
 if (localStorage.getItem('todo') || localStorage.getItem('todo') || localStorage.getItem('todo')) {
     initPanel('todo', JSON.parse(localStorage.getItem("todo")));
     initPanel('inprogress', JSON.parse(localStorage.getItem("inprogress")));
     initPanel('done', JSON.parse(localStorage.getItem("done")));
 } else {
     initPanel('todo', state.todo);
     initPanel('inprogress', state.inprogress);
     initPanel('done', state.done);
 }
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
  return todoElement;
}

document.getElementById('add-todo-btn').addEventListener ('click', function addTodoElement() {
    var newTaskDesc = document.getElementById('new-todo').value;
    var panel = document.getElementById('todo');
    var newTaskId = 1 + state.todo.length + state.inprogress.length + state.done.length;
    var newTask = {};
    if (newTaskDesc.replace(/\s/g,'') === '') {
        return
    } else {
        // for(i=0; i<state.todo.length; i++){
        //     newTaskId += 1;
        // }
        newTask.id = newTaskId;
        newTask.title = newTaskDesc;
        state.todo.push(newTask);
        var newTodoElement = createTodoElement(newTask.id, newTask.title);
        panel.appendChild(newTodoElement);
        document.getElementById('new-todo').value = null;
    }
});

function saveStorage() {
    localStorage.setItem('todo', JSON.stringify(state.todo));
    localStorage.setItem('inprogress', JSON.stringify(state.inprogress));
    localStorage.setItem('done', JSON.stringify(state.done));
}


function downloadServer() {
    var url = 'https://jsonplaceholder.typicode.com/todos';
    makeRequest(url, 'GET', null);
}

function doSomethingWithConent(httpRequest) {

    if (httpRequest.readyState == 4) {
        if (httpRequest.status == 200 || httpRequest.status == 201) {
            // console.log(JSON.parse(httpRequest.responseText));
            var panel = document.getElementById('todo');
            var taskItem = JSON.parse(httpRequest.responseText)
            for(var i=0; i<taskItem.length; i++) {
                if(taskItem[i].completed) {
                    state.done.push(taskItem[i]);
                } else {
                    var newTaskId = 1 + state.todo.length + state.inprogress.length + state.done.length;
                    state.todo.push(taskItem[i]);
                    var newTodoElement = createTodoElement(taskItem[i].id += newTaskId, taskItem[i].title);
                    panel.appendChild(newTodoElement);
                    console.log(state.todo);
                }
            }
        } else if(httpRequest.status == 201) {
            var getUrl = url + '/' + JSON.parse(httpRequest.responseText).id;
            makeRequest(getUrl, 'GET', null);
        } else {
            console.error('С запросом возникла проблема.');
        }
    }

}

function makeRequest(url, method, params) {
    var httpRequest = false;

    if (window.XMLHttpRequest) { // Mozilla, Safari, ...
        httpRequest = new XMLHttpRequest();
        // if (httpRequest.overrideMimeType) {
        //     // httpRequest.overrideMimeType('text/xml');
        // }
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
    httpRequest.open('GET', url, true);
    httpRequest.open(method, url, true);
    httpRequest.send(params);

    // for post
    // var params = 'orem=ipsum&name=binny';
    // http.open('POST', url, true);
    // /Send the proper header information along with the request
    // http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // http.send(params);
}

// var sad = JSON.parse(localStorage.getItem("state"))[0];
// console.log(sad);
// localStorage.clear()