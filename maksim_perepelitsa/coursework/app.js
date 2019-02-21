var myBtn = document.getElementById('add-btn');
var inpField = document.getElementById('new-todo');
var storageSave = document.getElementById('storageSave');
var delButtons;
var downloadButton = document.getElementById('dlBtn');

var state = {
    todo: [{ id: 1, title: "Test todo 1" }, { id: 2, title: "Test todo 2" }],
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

document.addEventListener('DOMContentLoaded', checkForStorage());

function initBoard(obj) {
    initPanel('todo', obj.todo);
    initPanel('inprogress', obj.inprogress);
    initPanel('done', obj.done);
}

function initPanel(key, todoList) {
    var panel = document.getElementById(key);
    panel.innerHTML = "";

    for (var i = 0; i < todoList.length; i++) {
        var currentItemObject = todoList[i];
        var newTodoElement = createTodoElement(currentItemObject.id, currentItemObject.title, key);
        panel.appendChild(newTodoElement);
    }
}

function createTodoElement(id, title, panelName) {
    var todoElement = document.createElement("span");
    todoElement.id = id;
    todoElement.draggable = true; // for drag and drop
    todoElement.ondragstart = onDragStart; // for drag and drop
    todoElement.textContent = title;
    todoElement.classList.add('todo-item');

    var delBtn = document.createElement("button");
    delBtn.classList.add("delete-button");
    delBtn.textContent = "x";
    delBtn.addEventListener('click', function() {
        var btnParentId = this.parentNode.id;
        var found = false;

        function findMatchingId(name) {
            for (let i = 0; i < state[name].length; i++) {
                if (found) break;

                if (state[name][i].id == btnParentId) {
                    state.deleteItemFromState(name, state[name][i]);
                    initPanel(name, state[name]);
                    found = true;
                    break;
                }
            }
        }
        findMatchingId("todo");
        findMatchingId("inprogress");
        findMatchingId("done");
    });
    todoElement.appendChild(delBtn);
    return todoElement;
}

myBtn.addEventListener('click', function() {
    state.todo.push({ id: state.todo.length + 1, title: inpField.value });
    initPanel('todo', state.todo);
    inpField.value = "";
})

storageSave.addEventListener('click', function() {
    localStorage.setItem('state', JSON.stringify(state));
});

function checkForStorage() {
    if (localStorage.getItem('state')) {
        var savedList = JSON.parse(localStorage.getItem('state'));
        state.todo = savedList.todo;
        state.inprogress = savedList.inprogress;
        state.done = savedList.done;
        initBoard(savedList);
    } else {
        initBoard(state);
    }
}

function makeRequest(url, method, params) {
    var httpRequest = false;
    if (window.XMLHttpRequest) { // Mozilla, Safari, ...
        httpRequest = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // IE
        try {
            httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
        }
    }
    if (!httpRequest) {
        return false;
    }
    httpRequest.onreadystatechange = function() {
        doSomethingWithConent(httpRequest);
    };
    httpRequest.open(method, url, true);
    httpRequest.send(params);
}

downloadButton.addEventListener('click', function() {
    makeRequest('https://jsonplaceholder.typicode.com/todos', 'GET', null);
});

function doSomethingWithConent(httpRequest) {
    if (httpRequest.readyState == 4) {
        if (httpRequest.status == 200) {
            var obj = JSON.parse(httpRequest.responseText);
            console.log(obj);
            state.todo = obj;
            initPanel('todo', state.todo);
        } else if (httpRequest.status == 201) {
            var getUrl = url + '/' + JSON.parse(httpRequest.responseText).id;
            makeRequest(getUrl, "GET", null);
        } else {
            console.error('С запросом возникла проблема.');
        }
    }
}