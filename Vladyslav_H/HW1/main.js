
//Task 1 ()
var random_num = Math.floor((Math.random() * 10) + 1);
var number = prompt('Угадай число', '');

if (random_num.toString() == number.toString()) {
	alert('Угадал')
}else{
	alert("Оу... не покупай лотерейные билеты....")

}



//Task 3 (Ckeck or string is palindrome)
function ckeckPalindrome(text) {
	text = text.replace(/\s/g, '').toLowerCase();
	return text ==  text.split('').reverse().join('');
}
var check_str = 'ololo';
console.log('Is "'+check_str+'" palindrom ?',ckeckPalindrome(check_str));