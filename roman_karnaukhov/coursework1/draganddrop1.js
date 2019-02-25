function onDragStart(event) {
  event.dataTransfer.setData("text", event.target.getAttribute('id'));
}
  
function allowDrop(ev) {
  ev.preventDefault();
}

function drop(e) {
  e.preventDefault();
  var data = e.dataTransfer.getData("text");
  var item = document.getElementById(data);
  if (item) {
    state.moveItemToOtherPanel(item.parentElement.id, e.target.id, item.id);
    if (e.target.id !== 'basket') {
      e.target.appendChild(item); 
    } else {
      item.parentElement.removeChild(item);
      document.getElementById('basket').textContent = 'Drop item here to remove... ' + state.basket.length + ' items in.';
    };
  } else {
    console.error('Cannot find element, event:', e)
  }
}
