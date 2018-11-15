function myFunction(){
    var elem = document.getElementById("test");
    cssObj = window.getComputedStyle(elem);
    document.getElementById("output").innerHTML = cssObj.backgroundColor;
}
myFunction();