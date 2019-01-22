function summ() {
    var OneNum = +document.getElementById("1Num").value;
    var TwoNum = +document.getElementById("2Num").value;
    // var rslt;
    // console.log(OneNum);
    // console.log(TwoNum);
    // rslt = OneNum + TwoNum;
    // console.log(rslt);
    document.getElementById("rs").innerHTML = OneNum + TwoNum;
};
function substr() {
    var OneNum = +document.getElementById("1Num").value;
    var TwoNum = +document.getElementById("2Num").value;
    document.getElementById("rs").innerHTML = OneNum - TwoNum;
};
function mult() {
    var OneNum = +document.getElementById("1Num").value;
    var TwoNum = +document.getElementById("2Num").value;
    document.getElementById("rs").innerHTML = OneNum * TwoNum;
};
function div() {
    var OneNum = +document.getElementById("1Num").value;
    var TwoNum = +document.getElementById("2Num").value;
    document.getElementById("rs").innerHTML = OneNum / TwoNum;
};




