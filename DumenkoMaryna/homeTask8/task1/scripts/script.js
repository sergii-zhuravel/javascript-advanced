// document.addEventListener("DOMContentLoaded", myFunction());
		// function myFunction() {
		// 	console.log('Hello from My Function');
		// }
		// console.log('Hello from main JS code');

		// Вопрос: 

		// 1. В каком порядке выведется текст?
		// У вище наведеному коді спочатку виведеться 'Hello from main JS code', а потім 'Hello from My Function'

		// 2. Есть ли в коде ошибки?
		// Не правильно використана конструкція додавання івента
		// document.addEventListener("nameEvent", function(event) {
		// 	... code
		// });
		// Відповідно до цього правильний код, наведений нижче 

		document.addEventListener("DOMContentLoaded", function(e) {
			myFunction();
		});

		function myFunction() {
			console.log('Hello from My Function');
		}
		
		console.log('Hello from main JS code');