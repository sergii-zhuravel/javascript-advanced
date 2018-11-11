document.getElementById('button-add').addEventListener('click', function() {
    var inputValue = document.getElementById('todo-input').value;
    var cloneElem = document.querySelectorAll('.todo-item')[0].cloneNode(true);
    document.getElementById('todo-list').appendChild(cloneElem);
    cloneElem.firstChild.textContent = inputValue;
});