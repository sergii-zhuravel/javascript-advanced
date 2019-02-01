function check() {
    var phrs = document.getElementById("phrase").value;
    var i, phrs1 = "";
    for (i = 0; i < phrs.length; i++) { // удалим пробелы.
        if (phrs[i] !== " ") { phrs1 = phrs1 + phrs[i] };
    };
    for (i = 0; i < phrs1.length; i++) {
        if (phrs1[i] !== phrs1[phrs1.length - 1 - i]) { document.getElementById("res").innerHTML = "Это НЕ палиндром"; break; }
        else { document.getElementById("res").innerHTML = "Круто! Это палиндром!" };
    };



// console.log(phrs);
// console.log(phrs1);
}


