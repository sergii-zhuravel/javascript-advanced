//Are you lucky Test

function isLucky(){
    let luckyNum = prompt('Введите число от 0 до 10');
    if (luckyNum != null){ //prompt wasn't canceled, can go next
        luckyNum = Math.round(luckyNum);
        if (luckyNum == luckyNum && luckyNum <= 10 && luckyNum != ''){ //check if luckyNumber is number (not NaN or empty)
            let randomNum = Math.round(Math.random()*10); //get random number from 0 to 10
            if (luckyNum != randomNum){
                let tryAgain = confirm("Повезет в следующий раз. \n\n Попробовать еще раз?");
                if (tryAgain){
                    isLucky();
                }
            } else {
                let tryAgain = confirm("Угадал! \n\n Попробовать еще раз?");
                if (tryAgain){
                    isLucky();
                }
            }
        } else {
            alert('Пожалуйста, введите число от 0 до 10');
            isLucky();
        }
    }
}

//Simple calculator

function calculate(event){
    let mathOperation = event.target.innerText;
    let resultElem = document.getElementById('calculateResult');
    let num1 = +document.getElementById('calcNum1').value;
    let num2 = +document.getElementById('calcNum2').value;
    let result = 0;
    switch (mathOperation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            if (isFloat(result)){
                result = roundFloat(result,num1,num2);
            }
            break;
        case '/':
            result = num1 / num2;
            if (isFloat(result)){
                result = roundFloat(result,num1,num2,true);
            }
            break;
        case '*':
            result = num1 * num2;
            if (isFloat(result)){
                result = roundFloat(result,num1,num2,true);
            }
            break;
    }

    resultElem.innerText = result;

    function isFloat(n){
        return Number(n) === n && n % 1 !== 0;
    }
    function roundFloat(result,float1,float2,plusOneNumberAfterDot = false){
        let floatAfterDot = Math.max(
            getLengthOfNumberAfterDot(float1),
            getLengthOfNumberAfterDot(float2)
        )
        plusOneNumberAfterDot ? floatAfterDot++ : floatAfterDot; //if * or / we need to add one more to numbers after dot

        return result.toFixed(floatAfterDot);
    }
    function getLengthOfNumberAfterDot(num){
        if (isFloat(num)){
            return num.toString().split('.')[1].length
        } else {
            return 0
        }
    }
    
}

// is Palindrom test

function isPalindrome(){
    let palindStr = prompt('Введите слово или фразу');
    if (palindStr != null){ //prompt wasn't canceled, can go next
        palindStr = palindStr.replace(/ /g,'');
        
        if (palindStr == getReversedStr(palindStr)){
            let tryAgain = confirm("Это палиндром! \n\n Проверить другую фразу или слово?");
            if (tryAgain){
                isPalindrome();
            }
        } else {
            let tryAgain = confirm("Это не палиндром! \n\n Проверить другую фразу или слово?");
            if (tryAgain){
                isPalindrome();
            }
        }
    }
    function getReversedStr(str){
        return [...str].reverse().join('');
    }
}