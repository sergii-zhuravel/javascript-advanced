var state = {
    todo: [{id: 1, title: "Test todo 1"}, {id: 2, title: "Test todo 2"}],
    inprogress: [],
    done: [],
  }

  document.addEventListener('DOMContentLoaded', initBoard);
  
  function initBoard() {
   initPanel('todo', state.todo);
   initPanel('inprogress', state.inprogress);
   initPanel('done', state.done);
   removeItem();
  }

  function removeItem(){
    var btnDelete = document.querySelectorAll(".delete");
    console.log(btnDelete);
    let count = 0;
    btnDelete.forEach(element => {
        btnDelete[count].onclick = function(){
            let key = this.parentElement.getAttribute('id');
            localStorage.removeItem(key);
            this.parentElement.remove();
        }
        count++
    });
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
    var delTodoElement = document.createElement("i");
    delTodoElement.classList.add("delete");
    todoElement.id = id;
    todoElement.draggable = true; // for drag and drop
    todoElement.ondragstart= onDragStart; // for drag and drop
    todoElement.textContent = title;
    todoElement.appendChild(delTodoElement);
    return todoElement;
  }

    function removeOldList(old){
       old.forEach(element => {
           element.remove()
       });
    }

    function sort(desk, arr){
        starageTodo = [];
        starageInprogress = [];
        starageDone = [];
        desk.forEach(elements => {
            arr.push(elements.id + elements.title)
        })

        insertToStorage(arr);
    }
    var starageTodo = [];
    var starageInprogress = [];
    var starageDone = [];

    function insertToStorage(e){
        e.forEach(elements => {
            let key = elements[0];
            let value = elements.slice(1);
            localStorage.setItem(key, value);
        })
    }

    (function readLocStorage(){
        if(localStorage.length!=0){
        var objStor = localStorage;
        var arrItems = [];
        for (var key in objStor) {
            if(objStor.hasOwnProperty(key)){
                var newObj = {id: key, title:  objStor[key]};
                arrItems.push(newObj);
            }
        }
        state.todo = arrItems;
        var allItems = document.querySelectorAll("[draggable='true']");
        removeOldList(allItems);}
    })()
    
  var btnAdd = document.querySelector("#panel button").onclick = function(){
      var newText = document.querySelector("#new-todo").value;
      document.querySelector("#new-todo").value = "";
      if(newText != ""){
      var allItems = document.querySelectorAll("[draggable='true']");
      var newElem = {id: ++allItems.length, title: newText};
      removeOldList(allItems);
      state.todo.push(newElem);
      initBoard();
      sort(state.todo, starageTodo);
      sort(state.inprogress, starageInprogress);
      sort(state.done, starageDone);
    }
  }

var loadServer;
document.querySelector("#servDownload").onclick = function(){

var url = 'https://jsonplaceholder.typicode.com/posts'

makeRequest(url, 'GET', null);

function doSomethingWithConent(httpRequest) {

    if (httpRequest.readyState == 4) {
        if (httpRequest.status == 200) {
            var obj = JSON.parse(httpRequest.responseText);
            var newTodo = [];
            
            obj.forEach(element => {
                var newTodoItem = {
                    id: element.id,
                    title: element.title
                }
                newTodo.push(newTodoItem)
            });
            state.todo = newTodo;
            initBoard();
        } else if(httpRequest.status == 201) {
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

    if (window.XMLHttpRequest) { // Mozilla, Safari, ...
        httpRequest = new XMLHttpRequest();
        if (httpRequest.overrideMimeType) {
            httpRequest.overrideMimeType('text/xml');
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
    httpRequest.onreadystatechange = function () { doSomethingWithConent(httpRequest); };
    httpRequest.open(method, url, true);
    httpRequest.send(params);

}

}