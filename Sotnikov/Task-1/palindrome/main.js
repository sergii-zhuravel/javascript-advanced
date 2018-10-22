function isPal(){
    var string = prompt('Введите слово или фразу для проверки на палиндром');	
	var newString;
	var modString;
	var palindrom

	if(typeof string !== "number"){
		newString = string.toLowerCase();
	}else{
		newString = string.toString();
	}

	modString = newString.split('').reverse();
	newString = newString.replace(/\s/g, '');

	palindrom = modString.join('').replace(/\s/g, '')

	if(palindrom === newString){
        alert('Это палиндромом');
	}else{
		alert('Это не палиндромом');
	}
}
isPal();
