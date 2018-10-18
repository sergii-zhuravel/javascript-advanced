function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function randomNumder(){
  var b = getRandomInt(1,11);
  alert(b);
 
    var a = prompt("Відгадай яке число я загадав від 1 до 10");
    if(a==b){
        alert("Мої вітання) Ти внук чи внучка Вангі");
    }
            else(alert("Я загадав число "+ b +" .Пощастить в наступний раз)"));
    
        }
randomNumder();

