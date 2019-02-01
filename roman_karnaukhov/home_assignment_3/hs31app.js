
var pizza = {
  toppings: ('cheese, bacon, tomatoes'),
  bortik: false,
  size: 'mid',
  makePizza: function () {
    return console.log(this.size + ' pizza with ' + (this.bortik ? 'bortik' : 'no bortik') + ' and with ' + this.toppings + ' toppings !')
  },
  packPizza: function () {
    return console.log('Pizza packed into ' + this.size + ' box.')
  },
}


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
