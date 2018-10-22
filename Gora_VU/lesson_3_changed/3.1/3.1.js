// Задача 3.1
// Создать объект с 3 свойствами и 2мя методами которые работают с this

// Pizza
//  - toppings []
//  - bortik Boolean
//  - size String
//  - makePizza (return a string that lists all Pizza fields in format - "{size} Pizza with {bortik} and with toppings {toppings})
//  - packPizza (return a string like "Pizza packed into {size}box)

//  Подумайте и предложите как можно улучшить модель/абстракцию

var toppings = document.getElementsByTagName("input");
var span = document.getElementsByTagName("span");
var button = document.getElementsByTagName("button");    
var string = "";

var obj = {
    chooseTop: function () {            
        string = "";
        for (var i=0;i<toppings.length;i+=1) {
            ($(toppings[i]).prop('checked')) ? string+=span[i].innerHTML+" " : string+=""; 
        }             
        console.log(string);
    },    
    bortik: function() {
        this.bort = confirm("Do you want cheese bortik?");
        console.log(this.bort);
    },
    size: function() {
        this.siz = prompt("Choose a size(small,medium,big): ","medium");
        this.siz = this.siz.charAt(0).toUpperCase()+this.siz.slice(1);
        console.log(this.siz);
    } ,
    makePizza: function() {
        if (string == "") {string = "Classic"};
        if (this.siz == undefined) {this.siz = "Medium"};
        (this.bort) ? (this.bort="cheese bortik") : (this.bort="normal bortik");
        alert ( this.siz+" pizza with "+this.bort+" and with "+string+" toppings." );
    },
    packPizza: function() {
        alert ( "Pizza packed into "+this.siz+" box." );
    }
};
