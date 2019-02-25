var soup = {
    size: 'big',
    toppings: ['chees', 'tomat', 'meat'],
    spice: true,
    makeSoup: function (){
        console.log("Cooking " + this.size + " soup, " + "with: " + this.toppings[1] + " and " + (this.spice ? "with spice" : "w/o spice"));
    },
    deliverySoup: function(){
        console.log("We are delivery soup only with eggs and salad")
    }
}
soup.makeSoup();
soup.deliverySoup();
soup.spice = false;
soup.makeSoup();