if(localStorage['toDoBoard']) {
  var toDoNew = new ToDoDraggable(JSON.parse(localStorage['toDoBoard']));
  toDoNew.initBoard();
} else {
  getToDoTask("https://jsonplaceholder.typicode.com/todos");
}

function getToDoTask(url) {
  var httpRequest = false;

  if (window.XMLHttpRequest) {
    httpRequest = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
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

  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState == 4) {
      if(httpRequest.status == 200) {
        var items = JSON.parse(httpRequest.responseText);
        for(var i=0; i<items.length; i++) {
          if(items[i].completed) {
            items[i].state = "done";
          } else {
            items[i].state = "todo";
          }
        }
        var toDoNew = new ToDoDraggable(items);
        toDoNew.clearBoard("todo");
        toDoNew.clearBoard("inprogress");
        toDoNew.clearBoard("done");
        localStorage["toDoBoard"] = JSON.stringify(toDoNew.items);
        toDoNew.initBoard();
      }
      else {
        console.error('С запросом возникла проблема.');
      }
    }
  };

  httpRequest.open("GET", url);
  httpRequest.send();
}

document.getElementById("addTask").addEventListener('click', function(e) {
  var newTask = document.getElementById("new-todo").value;
  document.getElementById("new-todo").value = "";
  
  if(newTask) {
   toDoNew.addElement(newTask, document.getElementById("todo"), true);
  } else {
    alert("Please enter title task")
  }
});

document.getElementById("loadFromServer").addEventListener("click", function() {
  getToDoTask("https://jsonplaceholder.typicode.com/todos");
})
      