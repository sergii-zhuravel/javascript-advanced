var app = function() {
    var randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
    var enteredNumber = parseInt(prompt('Try to guess number from 1 to 10'));
    
    if (randomNumber === enteredNumber) {
        alert('Correct!');   
     } else {
        alert('You will win next time');
     }
    setTimeout(app, 3000);
};
     
app();

