document.addEventListener('DOMContentLoaded', function() {
    var elementList = document.querySelectorAll(".btn-js");

    elementList.forEach(function(elem) {
        elem.addEventListener("click", function(event) {
            var firstOperand = document.getElementById("firstOperand").value;
            var secondOperand = document.getElementById("secondOperand").value;
            document.getElementById("result").innerHTML = "";

            if(firstOperand == "" || secondOperand == "") {
                alert("Please enter a two operands");
            } else {
                firstOperand = +firstOperand;
                secondOperand = +secondOperand;

                var validData = validateOperands(firstOperand, secondOperand);

                if(validData) {
                    var result;
                    switch (event.target.dataset.value) {
                        case "addition":
                            result = additionCalc(firstOperand, secondOperand);
                            break;

                        case "substraction":
                            result = substractionCalc(firstOperand, secondOperand);
                            break;

                        case "multiplication":
                            result = multiplicationCalc(firstOperand, secondOperand);
                            break;

                        case "division":
                            if (secondOperand != 0) {
                                result = divisionCalc(firstOperand, secondOperand);
                            } else {
                                alert("Divide by 0 is not allowed, please, add a number that differ from 0")
                            }
                            break;
                    }

                    document.getElementById("result").innerHTML = result;
                } else {
                    alert("Please enter a valid number")
                }
            }
        });
    });

    function validateOperands(firstOperand, secondOperand) {
        return !(isNaN(firstOperand) || isNaN(secondOperand));
    }

    function additionCalc(firstOperand, secondOperand) {
        return firstOperand + secondOperand;
    }

    function substractionCalc(firstOperand, secondOperand) {
        return firstOperand - secondOperand;
    }

    function multiplicationCalc(firstOperand, secondOperand) {
        return firstOperand * secondOperand;
    }

    function divisionCalc(firstOperand, secondOperand) {
        return firstOperand/secondOperand;
    }
})
