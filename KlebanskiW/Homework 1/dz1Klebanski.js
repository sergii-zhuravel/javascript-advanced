//JavaScript калькулятор

//Написать простейший JavaScript калькулятор с двумя полями для ввода 2х чисел от пользователя и четырмя арифметическими операциями - сложение, вычитание, умножение и деление
<script>
      var calculator= new Object;
      calculator.firstNumber = +prompt('Enter first Number');
      calculator.secondNumber = +prompt('Enter second Number');
      calculator.sign= prompt('Enter sign');
      calculator.getResult = function() {
        if(this.sign=='+'){
         var result = this.firstNumber+this.secondNumber
        }
        else if (this.sign=='-'){
          var result = this.firstNumber-this.secondNumber
        }
          else if (this.sign=='*'){
          var result = this.firstNumber*this.secondNumber
        }
           else if (this.sign=='/'){
          var result = this.firstNumber/this.secondNumber
        }
        document.write(result);
      }
      calculator.getResult()
      </script>
    //Угадай число

    // Написать JavaScript программу, которая генерирует число от 1 до 10, затем запрашивает число от 1 до 10 от пользователя.
    // Если число совпадает - выдать сообщение "Угадал", если не совпадает - выдать сообщение "Повезет в следующий раз"
    <script>
        var firstNumber = +prompt('Введите число от 1 до 10');
        var secondNumber = Math.floor(10*Math.random()) + 1;
        if(firstNumber == secondNumber){
            a="Угадал";
        }
         else{
            a="Повезет в следующий раз";
        }
        console.log(a);
    </script>
    //    Написать функцию которая определяет является ли слово или фраза (без учета пробелов) палиндромом

    //    Пример палиндрома - топот, nurses run
    
    function palindrome(s) {
      var re = /[\W_]/g;
      var lowRegStr = s.toLowerCase().replace(re, '');
      var reverseStr = lowRegStr.split('').reverse().join(''); 
      return reverseStr === lowRegStr;
    } 