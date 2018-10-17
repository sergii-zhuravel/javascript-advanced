//Создать объект с 3 свойствами и 2мя методами которые работают с this
var car = {
    brand: "Honda",
    model: "Civic",
    price: "15.00 – 20.00 Lakh",
    bodyType: "Sedan",
    carName: function() {
        alert("This is " + this.brand + " " + this.model);
    },
    carInfo: function(){
        alert(this.brand + " " + this.model + " is a " + this.bodyType + " body type and its price is " + this.price);
    }
}

car.carName();
car.carInfo();

//Подумайте и предложите как можно улучшить модель/абстракцию
var pizza = {
    toppings: ["cheese", "pepperoni", "mushrooms"],
    bortik: true,
    size: "Small",
    makePizza: function() {
        if(this.bortik) {
            return this.size + " Pizza with bortik and with toppings: " + this.toppings.toString();
        } else {
            return this.size + " Pizza no bortik and with toppings: " + this.toppings.toString();
        }
         
    }, 
    packPizza: function() {
        return "Pizza packed into " + this.size.toLowerCase() + " box"; 
    }
}

//Перший варіант дозволяє створювати лише один об'єкт, другий варіант передбачає функцію конструктор за допомогою якої ми можемо створити багато однотипних об'єктів, використовуючи "new"
function PizzaConstructor(toppings, bortik, size) {
    this.toppings = toppings;
    this.bortik = bortik;
    this.size = size;
    this.makePizza = function() {
        if(this.bortik) {
            return this.size + " Pizza with bortik and with toppings: " + this.toppings.toString();
        } else {
            return this.size + " Pizza no bortik and with toppings: " + this.toppings.toString();
        }
    }
    this.packPizza = function() {
        return "Pizza packed into " + this.size.toLowerCase() + " box"; 
    }
}

var pizzaPaperoni = new PizzaConstructor(["pepperoni", "mushrooms"], true, "Small");

console.log(pizzaPaperoni.makePizza());
console.log(pizzaPaperoni.packPizza());
