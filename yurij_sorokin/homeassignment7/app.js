document.addEventListener("DOMContentLoaded", function() {
  var findID = function() {
    var value = document.getElementById("todo-input").value;
    console.log(value);
  };

  findID();

  var cloneLi = function() {
    var valueById = document.getElementById("todo-list");
    var clone = valueById.firstElementChild.cloneNode(true);
    valueById.appendChild(clone);
    valueById.lastElementChild.firstChild.nodeValue = "Second todo \n";
    return valueById;
  };

  cloneLi();
});
