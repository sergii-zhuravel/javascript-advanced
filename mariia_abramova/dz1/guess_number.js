var num = document.getElementById("guessNumber");
var result = document.getElementById("guessResult");

function guessNumber() {
   
    if(!num.checkValidity())
    {
        result.value = "Invalid number, please pick the number in range 1-10";
        return
    }

    let random = Math.floor(Math.random() * 10) + 1;
    if (num.value == random)
        result.value = "You win :D";
    else
        result.value = "You lose, our number is " + random;

}

