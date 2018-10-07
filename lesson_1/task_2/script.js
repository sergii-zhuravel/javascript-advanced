//JavaScript калькулятор
//Написать простейший JavaScript калькулятор с двумя полями для ввода 2х чисел от пользователя и четырмя арифметическими операциями - сложение, вычитание, умножение и деление	

var inp1 = document.getElementById('num1'),
inp2 = document.getElementById('num2'),
res = document.getElementById('res'),
inp1Value,inp2Value,
result;

function checkInput() { //функция для проверки, что было введено число, а не строка
	if (isNaN(result)) {
		alert('Only numbers');
		result = '';
		res.style.backgroundColor = 'red';
	}
	if (result) {
		res.style.backgroundColor = 'white';
	}
}
function sum() {
	inp1Value = +inp1.value;
	inp2Value = +inp2.value;
	result = inp1Value+inp2Value;
	checkInput();
	res.innerHTML = result;
}
function sub() {
	inp1Value = +inp1.value;
	inp2Value = +inp2.value;
	result = inp1Value-inp2Value;
	checkInput();
	res.innerHTML = result;
}
function mult() {
	inp1Value = +inp1.value;
	inp2Value = +inp2.value;
	result = inp1Value*inp2Value;
	checkInput();
	res.innerHTML = result;
}
function divBy0() { //функция, которая не позволяет делить на 0
	if (inp2Value==0) {
		alert('You can\'t divide by 0');
		result = '';
		res.style.backgroundColor = 'red';
	}
}

function div() {
	inp1Value = +inp1.value;
	inp2Value = +inp2.value;
	result = (inp1Value/inp2Value).toFixed(1);
	checkInput();
	divBy0();
	res.innerHTML = result;
}
