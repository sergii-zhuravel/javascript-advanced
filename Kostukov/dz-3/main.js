// Задача 1

var pizza = {
    toppings: ['cheese', 'sausage', 'bacon', 'seafood'],
    bortik: true,
    size: '45 sm',
    makePizza: function() {
        let isBortik = this.bortik ? 'with bortik and ' : '';
        return this.size + ' Pizza ' + isBortik + 'with toppings ' + this.toppings;
    },
    packPizza: function() {
        return 'Pizza packed into ' + this.size + ' box';
    }
}
console.log(pizza.makePizza());
console.log(pizza.packPizza());

//Задача 2

function sum() {
    return [].reduce.call(arguments, function(a, b){
        return a + b;
    });
}
function mul() {
    return [].reduce.call(arguments, function(a, b){
        return a * b;
    });
}
function applyAll (func) {
    let args = [].slice.call(arguments, 1);
    return func.apply( null, args );
}
console.log(applyAll(mul, 2, 3, 5));

// Задача 3

// Bind

function callTest() {
    console.log(this);
}

var bindObj = {
    a: callTest.bind(4)
}

bindObj.a();

//Call, Apply

var obj = {
    fullNameObj: function(age) {
        return this.firstName + ' ' + this.lastName + ':' + age ;
    } 
}

var man = {
    firstName:"Ivan",
    lastName: "Ivanov",
}
console.log(obj.fullNameObj.call(man, "25"));

console.log(obj.fullNameObj.apply(man, ["25"]));

