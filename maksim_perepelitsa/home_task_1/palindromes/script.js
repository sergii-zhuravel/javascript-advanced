document.addEventListener("DOMContentLoaded", function(event) {
	var inpField = document.getElementById('inp-field');
	var btn = document.getElementById('click-me');

	btn.addEventListener('click', function(){
		var inpVal = inpField.value;
		checkPalindrome(inpVal);
	})
});

var word = 'Was it a car or a cat I saw';

function checkPalindrome(text){
	var result = text.replace(/\s+/g, '');
	result = result.toLowerCase();
	
	var splitText = result.split("");
	var reversedArr = splitText.reverse();
	var reversedText = reversedArr.join("");

	if(reversedText == result){
		alert('is a palindrome');
	}else{
		alert('not a palindrome');
	}
}