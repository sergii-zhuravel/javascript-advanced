function makeAdder(a){
    return function (b) {
        return a + b
    }
};
var add10 = makeAdder(10);
console.log(add10(25));