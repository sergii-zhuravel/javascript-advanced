function ToDo(itemsCollection) {
  this.items = itemsCollection;

  this.initBoard = function() {
    var self = this;
    this.items.forEach(item => {
      document.getElementById(item.state).appendChild(this.createElement(item.id, item.title, true));
    });
  }

  this.createElement = function(id, title, draggable) {
    var self = this;

    var todoElement = document.createElement("div");
    todoElement.id = id;
    todoElement.textContent = title;
    todoElement.classList.add("board-task");

    if(draggable) {
      todoElement.draggable = true;
      todoElement.ondragstart = this.onDragStart;
    }
    var close = document.createElement("span");
    close.classList.add("board-task__close");

    todoElement.appendChild(close);
    close.addEventListener('click', function(e) {
      self.deleteItemFromState(id);
      todoElement.parentNode.removeChild(todoElement);
    });
    return todoElement;
  }

  this.addElement = function(title, board) {
    var newTaskId = this.items.length ? this.items[this.items.length - 1].id+1 : 1;
    var elem = {
      "userId": this.items.length ? this.items[this.items.length - 1].userId+1 : 1,
      "id": newTaskId,
      "state": "todo",
      "title": title
    }
    this.items.push(elem);
    localStorage["toDoBoard"] = JSON.stringify(this.items);
    board.appendChild(this.createElement(newTaskId, title, true))
  }

  this.changeItemToState = function(stateItem, itemId) {
    this.items.find(item => item.id === +itemId).state = stateItem;
    localStorage["toDoBoard"] = JSON.stringify(this.items);
  }

  this.deleteItemFromState = function(itemId) {
    this.items = this.items.filter(function(el) { return el.id != itemId; }); 
    localStorage["toDoBoard"] = JSON.stringify(this.items);
  }

  this.moveItemToOtherPanel = function(stateItem, itemId) {
    this.changeItemToState(key1, item);
  }

  this.clearBoard = function(idElem) {
    var elem = document.getElementById(idElem);
    while (elem.hasChildNodes()) {   
      elem.removeChild(elem.firstChild);
    }
  }
}

function ToDoDraggable() {
    ToDo.apply(this, arguments);

    this.onDragStart = function(event) {
      event.dataTransfer.setData("text", event.target.getAttribute('id'));
    }

    this.allowDrop = function(event) {
      event.preventDefault()
    }

    this.drop = function(e) {
      e.preventDefault();
      var data = e.dataTransfer.getData("text");
      var item = document.getElementById(data);
      if (item && !(e.target.hasAttribute("draggable"))) { 
        this.changeItemToState(e.target.id, item.id)
        e.target.appendChild(item);
      } else if(e.target.hasAttribute("draggable")) {
        this.changeItemToState(e.target.parentElement.id, item.id)
        e.target.parentElement.appendChild(item);
      } else {
        console.error('Cannot find element, event:', e.target)
      }
    }
}
