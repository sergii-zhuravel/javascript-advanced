//7.1
//1
console.log(document.getElementById('todo-input').value);
//2
var liItem = document.querySelector('li');
//3
var clonedItem = liItem.cloneNode(true);
//4
clonedItem.childNodes[0].nodeValue = 'Hello World! ';
document.querySelector('ol').appendChild(clonedItem);
