// ------------------------
// Задача 8.1
// ------------------------
// Есть JavaScript код 
// <script>
//   document.addEventListener("DOMContentLoaded", myFunction());
//   function myFunction() {
//     console.log('Hello from My Function');
//   }
//   console.log('Hello from main JS code');
// </script>

// Вопрос: 
// 1. В каком порядке выведется текст?
// 2. Есть ли в коде ошибки?



//1 Hello from My Function
//2 Hello from main JS code

// "DOMContentLoaded" собьітие должно срaботать после загрузки DOM и после вьіполнения 
//тегов скрипт

// 1. вьізов myFunction()
// 2. console.log('Hello from main JS code')
// "DOMContentLoaded"

// Proof

// Hello from My Function
// Hello from main JS code
// DOMContentLoaded

// function myFunction1() {
//     console.log("DOMContentLoaded");
//   }
//   function myFunction() {
//     console.log('Hello from My Function');
//   }
// document.addEventListener("DOMContentLoaded", myFunction());
// document.addEventListener("DOMContentLoaded", myFunction1);

// console.log('Hello from main JS code')


// Правильная версия 
document.addEventListener("DOMContentLoaded", myFunction);
function myFunction() {
  console.log('Hello from My Function');
}

console.log('Hello from main JS code')

//1. console.log('Hello from main JS code')
//2. "DOMContentLoaded" => myFunction()

//Hello from main JS code
//Hello from My Function