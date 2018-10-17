// Задача 3.1
// ------------------------
// Создать объект с 3 свойствами и 2мя методами которые работают с this
//  Pizza
//  - toppings []
//  - bortik Boolean
//  - size String
//  - makePizza (return a string that lists all Pizza fields in format - "{size} Pizza with {bortik} and with toppings {toppings})
//  - packPizza (return a string like "Pizza packed into {size}box)
//   Подумайте и предложите как можно улучшить модель/абстракцию


var pizza = {
    toppings:['corn'],
    bortik:true, 
    size:"35", 
    makePizza:function(){
        return this.size+' sized pizza '+(this.bortik?'with bortik':'without bortik')+' and with toppings ['+ this.toppings+']';
    },
    packPizza: function(){
        return 'Pizza packed into '+this.size+' box';
    }

};

console.log(pizza.makePizza());
console.log(pizza.packPizza());
