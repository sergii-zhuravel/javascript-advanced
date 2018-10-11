var output = document.getElementById("palindResult");

function palindCheck() {
    let str = document.getElementById("palindInput").value;
    
    if(isPalindrome(str)) 
        output.value = str + " is a palindrome";
    else 
        output.value = str + " is not a palindrome";
        
}

function isPalindrome(str) {
    let regExp = /[\W]/g;
    let copyStr = str.toLowerCase().replace(regExp, '');
    return copyStr === copyStr.split('').reverse().join(''); 
}
