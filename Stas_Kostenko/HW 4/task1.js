function makeAdder(numb) {
    return function(num) {
        return num + numb;
    }
}


var add10 = makeAdder(10)
console.log(add10(27))