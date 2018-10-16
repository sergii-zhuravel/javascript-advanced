//Написать функцию которая определяет является ли слово или фраза (без учета пробелов) палиндромом
//Пример полиндрома - топот, nurses run

function checkPalindrome() {
	
	var string = prompt('Enter a word or phrase to check:'),reversed,sstring;
	string = string.split('');//делаем из строки массив

	for (var i=0;i<string.length;i+=1) { //убираем пробелы из массива
	if (string[i]==" ") {
		string.splice(i,1);
		}
	}
	sstring = string.join('');//делаем массив строкой без пробела
	reversed = string.reverse().join('');//переворачиваем массив и делаем его строкой
	console.log(sstring);
	console.log(reversed);
	if (sstring===reversed) {
		document.write('True');
	}
	else {
		document.write('False');
	}
}
checkPalindrome();