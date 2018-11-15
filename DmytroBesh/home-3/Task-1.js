var pizza = {
    toppings: ['cheese'],
    bortik: false, 
    size: "30", 
    makePizza: function() {
        return this.size + ' size pizza ' + (this.bortik?'with bortik':'without bortik') + ' and with toppings ' + this.toppings;
    },
    packPizza: function() {
        return 'Pizza packed into ' + this.size + ' box';
    }

};

console.log(pizza.makePizza());
console.log(pizza.packPizza());