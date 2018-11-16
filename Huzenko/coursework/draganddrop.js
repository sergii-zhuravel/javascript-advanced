function onDragStart(event) {
  console.log("----------------onDragStart----------------");
  console.log(event);
  console.log("--------------------------------------------")
  event.dataTransfer.setData("id", event.target.getAttribute('id'));
}

function allowDrop(ev) {
  ev.preventDefault();
}


function drop(e) {
  e.preventDefault();
  console.log("--------------------drop--------------------");
  console.log(e);
  console.log("---------------------------------------------")
  var id = e.dataTransfer.getData("id");
  var item = document.getElementById(id);
  console.log(state);
  if (item) {
    state.moveItem(item.parentElement.id, e.target.id, item.id)
    e.target.appendChild(item);
    console.log(state);
  } else {
    console.error('Cannot find element, event:', e)
  }
}