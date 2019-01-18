var word = 'nurses run';
word = word.replace(/ /g, '').toLocaleLowerCase();


function checkPalindrom(palindrome){
    for(var i = 0; i < palindrome.length; i++) {
    
        var left = palindrome[i];
		var right = palindrome[palindrome.length - 1 - i];
		console.log("left", left);
		console.log("right", right);
       
        if (palindrome[i] !== palindrome[palindrome.length - 1 - i]) {
            alert('not a palindrome');
            return false;
        }
    }
    alert('palindrome');
    return true;
}
checkPalindrom(word);
