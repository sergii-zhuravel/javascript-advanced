

function checkPal(str){
    str = str.replace( /\s/g, "");
    var arr = str.split("");
    var arr2 = str.split("").reverse();
    for( var i = 0; i < arr.length; i++){
            if(arr[i] == arr2[i]){
            return true;
             } else {
            return false;
             }
    }
}


var str = prompt('string', 'то пот');

alert(checkPal(str));

