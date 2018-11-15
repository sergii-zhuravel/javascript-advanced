var state = {
    todo: [],
    inprogress: [],
    done: [],
    addItemToState: function(key, item) {
      this[key].push(item);
    },
    deleteItemFromState: function(key, item) {
      var index = this[key].findIndex(element => element.id === item.id);
      delete this[key][index];
    },
    moveItemToOtherPanel: function(key1, key2, itemId) {
      var item = state[key1].find(element => element.id == itemId);
      this.deleteItemFromState(key1, item);
      this.addItemToState(key2, item);
    }
  }
  
  document.addEventListener('DOMContentLoaded', initBoard);
  
  function initBoard() {
   makeRequest('http://demo7428179.mockable.io/todos', 'GET', null);
   setTimeout(() => {
    var strData = localStorage.getItem('todo');
    var data = JSON.parse(strData);
    Object.assign(state.todo, data);
    console.log(state);
   initPanel('todo', JSON.parse(localStorage.getItem('todo')));
   initPanel('inprogress', JSON.parse(localStorage.getItem('inprogress')));
   initPanel('done', JSON.parse(localStorage.getItem('done')));
   }, 100);
  //  var todoPanel = document.getElementById('todo');
  //  var inprogressPanel = document.getElementById('todo');
  //  var todoPanel = document.getElementById('todo');
  }
  
  function initPanel(key, todoList) {
    var panel = document.getElementById(key);
    todoList.forEach(todo => {
      panel.appendChild(createTodoElement(todo.id, todo.title));
    });
  }
  
  function createTodoElement(id, title) {
    var todoElement = document.createElement("span");
    todoElement.id = id;
    todoElement.draggable = true;
    todoElement.ondragstart=onDragStart;
    todoElement.textContent = title;
    return todoElement;
  }

  function addTodo () {
    title = document.getElementById('new-todo').value;
    todoArr = JSON.parse(localStorage.getItem('todo'))
    id = todoArr.length + 1;
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

  function saveToStore() {
    console.log(state.todo);
    localStorage.setItem('todo', JSON.stringify(state.todo));
      localStorage.setItem('inprogress', JSON.stringify(state.inprogress));
      localStorage.setItem('done', JSON.stringify(state.done));
  }

  function makeRequest(url, method, params) {
    var httpRequest = false;

    if (window.XMLHttpRequest) { // Mozilla, Safari, ...
        httpRequest = new XMLHttpRequest();
        if (httpRequest.overrideMimeType) {
            // httpRequest.overrideMimeType('text/xml');
        }
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
    httpRequest.onreadystatechange = function () { doSomethingWithConent(httpRequest, method); };
    httpRequest.open(method, url, true);
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequest.send(params);
}

function doSomethingWithConent(httpRequest) {

  if (httpRequest.readyState == 4) {
      if (httpRequest.status == 200) {
          var obj = httpRequest.responseText;
          localStorage.setItem('todo', obj);
      } else if(httpRequest.status == 201) {
          var getUrl = url + '/' + obj.id;
          makeRequest(getUrl, 'POST', null);
      } else {
          console.error('С запросом возникла проблема.');
      }
  }

}