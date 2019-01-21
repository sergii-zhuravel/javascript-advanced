

function checkPal(str) {
    str = str.replace(/\s/g, "");
    var arr = str.split("");
    var arr2 = str.split("").reverse();
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == arr2[i]) {
            
        } else {
            return false;
        }
    }
    return true;
}


var str = prompt('string', 'то пот');

alert(checkPal(str));

