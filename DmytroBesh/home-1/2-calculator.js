var operand1 = +prompt("Введите число", "9")
var sign = prompt("знак", "+")
var operand2 = +prompt("Введите число", "5")

			

function sum1() {
	return operand1 + operand2;
};
function sum2() {
	return operand1 - operand2;
};
function sum3() {
	return operand1 * operand2;
};
function sum4() {
	return operand1 / operand2;
};


if (sign == "+"){
document.write(sum1(operand1, operand2));
}
	else if (sign == "-"){
document.write(sum2(operand1, operand2));
}
	else if (sign == "*"){
document.write(sum3(operand1, operand2));
}
	else if (sign == "/"){
document.write(sum4(operand1, operand2));
}
else {
document.write("Error. У вас ошибка в арихметике");
};

var nan_operand1 = isNaN(operand1);
var nan_operand2 = isNaN(operand2);

if (nan_operand1 || nan_operand2 == true){
document.write(". У вас ошибка в числах");		
};
//if (nan_operand2 == true){
//document.write(". У вас ошибка в числах");		
//};

//};