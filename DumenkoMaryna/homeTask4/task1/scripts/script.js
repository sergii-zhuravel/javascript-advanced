document.addEventListener('DOMContentLoaded', function() {
    function makeAdder(num) {
        return function (numAdd) {
            return num + numAdd
        }
    }
    var add10 = makeAdder(10)
    console.log(add10(25))
})
