var pizza = {
    toppings:["кетчуп","сир","ковбаса","гриби"],
    bortikBoolean:true,
    sizeStr: 30,
    makePizza: function(){
        var mP = "";
        mP+=this.sizeStr+"см піцца";
        if(this.bortikBoolean==true){mP+=" на тонкому тісті з "}
            else{mP+"на товстому тісті"}
        mP+=this.toppings;
        return mP;
    },
    packPizza: function(){
        var bX ="Піцца запакована в коробку розміром ";
        bX+=this.sizeStr*1+5+"см";
        return bX;
    } 
    }
/*alert(pizza.makePizza());
alert(pizza.packPizza())*/
