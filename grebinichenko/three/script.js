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
var ar=[];

function sum() { // суммирует аргументы: sum(1,2,3) = 6
    return [].reduce.call(arguments, function(a, b) {
      return a + b;
    });
  }
  
  function mul() { // перемножает аргументы: mul(2,3,4) = 24
    return [].reduce.call(arguments, function(a, b) {
      return a * b;
    });
  }
  
 function applyAll(){
     for (var i = 1; i < arguments.length; i++) {
         ar.push(arguments[i]);
         
      }
      return arguments[0].apply(null, ar);
    }
    console.log(applyAll(sum, 10, 2000, 250));