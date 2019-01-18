var userInput = prompt("Please enter a number", "");

//not including max number
function generateRandomNumber(min_value , max_value) 
{
    let result = Math.random() * (max_value-min_value) + min_value ;
    result = Math.floor(result);
    return result;
}

var randomNum = generateRandomNumber(1,11);
if(userInput == randomNum){
	alert("Угадал");
}else{
	alert("Повезет в следующий раз");
}