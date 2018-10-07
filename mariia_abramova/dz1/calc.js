var select = document.querySelector("select");
var output = document.getElementById("calcResult");

function calculator(){
    let optionIndex = select.options.selectedIndex;
    let num1 = document.getElementById("calcNumber1").value;
    let num2 = document.getElementById("calcNumber2").value;
    output.value = calcResult(optionIndex,num1,num2);
}

function calcResult (optionIndex,num1,num2) {
    switch (optionIndex) {
        case 0:
            return num1*num2;
        case 1:
            return num1/num2;
        case 2:
            return num1+num2;
        case 3:
            return num1-num2;
    }
}
