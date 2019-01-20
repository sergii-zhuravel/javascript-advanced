var number = Math.floor(Math.random() * Math.floor(10));
number == 0 ? (number = 1) : (number = number);
function guess() {
  var userTry = prompt("Угадайте число от 1 до 10");
  if (userTry == number) {
    alert("Угадал");
  } else {
    var choice = confirm("Хотите попробовате еще?");
    choice == true ? guess() : alert("Повезет в следующий раз");
  }
}
guess();