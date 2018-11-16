/*
    Написать JavaScript код, который:
        1. Найдет todo-input и получит значение введенное в поле
        2. Найдет элемент li
        3. Создаст deep клон элемента li
        4. Поменять только текст у клона элемента li
*/ 
var toDo= document.getElementById("todo-input").value;

console.log(toDo)



var li = document.getElementsByClassName('todo-item') [0];
console.log(li);

var liORg = document.getElementsByClassName('todo-item') [0];
var liClone = liORg.cloneNode(true);
document.getElementById('todo-list').appendChild(liClone);

var cln = liORg.cloneNode(true);
cln.innerHTML = 'Hellow word';
document.getElementById('todo-list').appendChild(cln);