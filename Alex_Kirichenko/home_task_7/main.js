////////////7.1////////////////

var inpValue = document.querySelector("#todo-input").value;
var liElement = document.querySelector("#todo-list li");
var cloneLi = liElement.cloneNode(true);
cloneLi.innerHTML = "bla-bla";

////////////7.2/////////////

(function myFunction() {
  var elem = document.getElementById("test");
  var txt;
  cssObj = window.getComputedStyle(elem);

  for (i = 0; i < cssObj.length; i++) {
    cssObjProp = cssObj.item(i);
    txt += cssObjProp + " = " + cssObj.getPropertyValue(cssObjProp) + "<br>";
  }
  document.getElementById("output").innerHTML = txt;

  var bgStyle = elem.style.backgroundColor;
  console.log(bgStyle);
})();
