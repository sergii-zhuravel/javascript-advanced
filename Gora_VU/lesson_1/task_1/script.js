//Угадай число
//Написать JavaScript программу, которая генерирует число от 1 до 10, затем запрашивает число от 1 до 10 от пользователя.
//Если число совпадает - выдать сообщение "Угадал", если не совпадает - выдать сообщение "Повезет в следующий раз"
var randomNumber,question;

function askNumber(min,max) {
	randomNumber = Math.floor(min+Math.random()*(max+1-min));
	console.log('random number: '+randomNumber);
	question = +prompt('Enter a number from 1 to 10:');
	if (isNaN(question)) {
		alert('Not a number\nTry again');
		askNumber(1,10);
	}
	else if ((question<1)||(question>10)) {
		alert('The number must be in range from 1 to 10');
		askNumber(1,10);
	}
	else if (randomNumber == question) {
	document.write('Congratilations! You\'ve guessed the number');
	}
	else {
		document.write('Better luck next time');
	}
}
askNumber(1,10);