document.addEventListener('DOMContentLoaded', function() {
    var carFirst = {
        brand: "Toyota",
        model: "Camry",
        showFullName: function() {
            console.log(this.brand + " " + this.model); 
        }
    }
    
    var carSecond = {
        brand: "Ford",
        model: "Fiesta",
    }

    //example call
    function showFullInformation(bodyType, price) {
        alert(this.brand + " " + this.model + " is a " + bodyType + " body type and its price is " + price);
    }
    
    showFullInformation.call(carFirst, "Sedan", "37.22 Lakh");

    //example apply
    showFullInformation.apply(carFirst, ["Hatchback", "37.5 Lakh"]);

    function PerimeterCall() {
        var args = Array.prototype.slice.call(arguments, 1);
        return args.reduce((a, b) => a + b, 0);
    }
    console.log(PerimeterCall.apply(null, [5,6,10]));
    
    //example bind
    var showFull = carFirst.showFullName.bind(carSecond);
    console.log(showFull());
})
