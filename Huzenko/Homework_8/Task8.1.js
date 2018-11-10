// Задача 8.1
// ------------------------
// Есть JavaScript код 

  document.addEventListener("DOMContentLoaded", myFunction); 
  function myFunction() {
    console.log('Hello from My Function');
  }
  console.log('Hello from main JS code');

//  Вопрос: 
// 1. В каком порядке выведется текст?
// 2. Есть ли в коде ошибки?
//  ------------------------

// 1. Першим виведеться 'Hello from main JS code', наступним - текст із функції.
// 2. document.addEventListener("DOMContentLoaded", myFunction); - тут повинно бути посилання на функцію, а не її виклик