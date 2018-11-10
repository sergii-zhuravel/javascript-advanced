var inputValue = document.getElementById('todo-input').value;

var itemElem = document.getElementsByClassName('todo-item')[0];

var copyItemElem = itemElem.cloneNode(true);

console.log(copyItemElem);

copyItemElem.firstChild.textContent = 'Other Text!!!';

itemElem.parentNode.insertBefore(copyItemElem, itemElem.nextSibling);

