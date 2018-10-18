
function addition(){
    var first = document.getElementById("f1").value;
    var second = document.getElementById("s2").value;
    document.getElementById("rez").value = first*1+second*1;
}
function subtraction(){
    var first = document.getElementById("f1").value;
    var second = document.getElementById("s2").value;
    document.getElementById("rez").value = first-second;
}
function multiplication(){
    var first = document.getElementById("f1").value;
    var second = document.getElementById("s2").value;
    document.getElementById("rez").value = first*second;
}
function division(){
    var first = document.getElementById("f1").value;
    var second = document.getElementById("s2").value;
    document.getElementById("rez").value = first/second;
}