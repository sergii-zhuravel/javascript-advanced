function myFunction(){
    var elem = document.getElementById("test");
    var txt;
    cssObj = window.getComputedStyle(elem)

    // for (i = 0; i < cssObj.length; i++) { 
    //     cssObjProp = cssObj.item(i)
    //     txt += cssObjProp + " = " + cssObj.getPropertyValue(cssObjProp) + "<br>";
    //     console.log(txt)
    // }
    document.getElementById("output").innerHTML = cssObj.backgroundColor;
    console.log();
}

myFunction()
