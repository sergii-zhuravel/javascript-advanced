document.addEventListener('DOMContentLoaded', function() {
    function isPalindrom(str) {
        symbolsArray = str.toLowerCase().split("").filter(function(item){
            return item != " ";
        });

        var symbolsStr = symbolsArray.join("");
        var symbolsStrReverse = symbolsArray.reverse().join("");

        if (symbolsStr == symbolsStrReverse) {
            alert("It is Palindrome");
        } else {
            alert("This is not a Palindrome");
        }
    }

    isPalindrom("Я иду с мечем судия");
})
