// ------------------------
// Задача 3.1
// ------------------------
// Создать объект с 3 свойствами и 2мя методами которые работают с this

// Pizza
//  - toppings []
//  - bortik Boolean
//  - size String
//  - makePizza (return a string that lists all Pizza fields in format - "{size} Pizza with {bortik} and with toppings {toppings})
//  - packPizza (return a string like "Pizza packed into {size}box)

//  Подумайте и предложите как можно улучшить модель/абстракцию

// -------------------------------------------------------------------------------------------------------------------------
let pizza = {
    toppings: {
        'Broccoli': 5,
        'Tomatoes': 4,
        'Mushrooms': 6,
        'ExtraCheese': 8,
        'Chili paper': 4
    },
    cheeseRimPrice: 5,
    size: {
        s: {
            name: 'Ø20',
            price: 10
        },
        m: {
            name: 'Ø30',
            price: 20
        },
        l: {
            name: 'Ø45',
            price: 30
        }
    },
    makePizza: function(size, cheeseRim, toppings){
        let topings = this.getRequestedPizzaToppings(arguments);
        let cheeseRimString = cheeseRim ? 'cheeseRim, ' : '';
        let price = this.getPizzaPrice(arguments[0], arguments[1], topings);
        let pizzaMessage = 'Get your '+this.size[size].name+' size pizza with '+cheeseRimString+topings + ' for '+price + '$';
        return pizzaMessage;
    },
    getRequestedPizzaToppings: function(args){
        let validTopings = [];
        for (let i = 2; i < args.length; i++) {
            if (this.isValidTopping(args[i])){
                validTopings.push(args[i]);
            }
        }
        return validTopings.join(', ');
    },
    isValidTopping: function(el){
        return this.toppings[el] ? true : false;
    },
    getPizzaPrice: function(size,cheeseRim,toppings){
        let sizePrice = this.size[size].price;
        let cheeseRimPrice = cheeseRim ? this.cheeseRimPrice : 0;
        let toppingsPrice = this.getToppingsPrice(toppings);
        
        return sizePrice + cheeseRimPrice + toppingsPrice;
    },
    getToppingsPrice: function(toppings){
        let toppingsPrice = 0;
        if (toppings.length > 0){
            toppings.split(', ').forEach(topping => {
                toppingsPrice += this.toppings[topping];
            });
        }
        return toppingsPrice;
    }

}
console.log(pizza.makePizza('s',true, 'Mushrooms', 'Chili paper', 'ExtraCheese'));
console.log(pizza.makePizza('m',true,'Tomatoes', 'Chili paper', 'ExtraCheese'));
console.log(pizza.makePizza('l',false,'Tomatoes', 'Chili paper', 'ExtraCheese'));
// -------------------------------------------------------------------------------------------------------------------------


// Задача 3.2
// ------------------------
// Написать функцию applyAll(func, arg1, arg2...), которая получает функцию func и произвольное количество аргументов.

// Она должна вызвать func(arg1, arg2...), то есть передать в func все аргументы, начиная со второго, и возвратить результат.

// Например:

// // Применить Math.max к аргументам 2, -2, 3
// console.log( applyAll(Math.max, 2, -2, 3) ); // 3

// // Применить Math.min к аргументам 2, -2, 3
// alert( applyAll(Math.min, 2, -2, 3) ); // -2
// Область применения applyAll, конечно, шире, можно вызывать её и со своими функциями:


function sum() { // суммирует аргументы: sum(1,2,3) = 6
  return [].reduce.call(arguments, function(a, b) {
    return a + b;
  });
}

// function mul() { // перемножает аргументы: mul(2,3,4) = 24
//   return [].reduce.call(arguments, function(a, b) {
//     return a * b;
//   });
// }

// console.log( applyAll(sum, 1, 2, 3) ); // -> sum(1, 2, 3) = 6
// console.log( applyAll(mul, 2, 3, 4) ); // -> mul(2, 3, 4) = 24

// -------------------------------------------------------------------------------------------------------------------------
console.log('---------------------------------');

function applyAll(func){
    let argsArr = [].slice.call(arguments, 1);
    return func.apply( null, argsArr );
}

console.log('applyAll example 1 Math.min: ', applyAll(Math.min, 2, -2, 3,-19) );
console.log('applyAll example 2 Math.man: ', applyAll(Math.max, 2, -2, 3,-19) );
console.log('applyAll example 3 Sum: ', applyAll(sum, 1, 2, 3) );
// -------------------------------------------------------------------------------------------------------------------------


// ------------------------
// Задача 3.3
// ------------------------

// Привести пример использования привязки контекста с помощью call/apply/bind

// -------------------------------------------------------------------------------------------------------------------------
console.log('---------------------------------');

// call:
function getArgumentsString(){
    return [].join.call(arguments, ',');
}
console.log('call example: ',getArgumentsString(4,'dw',true,'wwww',44,2));

//apply
function getArgumentsString(){
    return [].slice.apply(arguments);
}
console.log('apply example: ',getArgumentsString(4,'dw',true,'wwww',44,2));

//bind
function workHoursDone(hours){
    let needToDoneHours = this.monthHours - hours;
    return needToDoneHours + ' hours need to be done';
}

let Joe = {
    monthHours:456
};

let JoeHoursLeft = workHoursDone.bind(Joe, 8);

console.log('bind example: ', JoeHoursLeft());


// -------------------------------------------------------------------------------------------------------------------------