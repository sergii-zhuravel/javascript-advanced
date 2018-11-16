// ------------------------
// Задача 6.1
// ------------------------
// Дано:
// HTML страница в которой есть только такой код
// <div>
//   <span>Browser name: </span><span>BROWSERNAME</span>
// </div>

// Написать JavaScript код, который выведет вместо BROWSERNAME - данные текущего браузера. Попробуйте подобрать одно из свойств
// объекта navigator. Проверьте свойство в разных браузерах.
// Для нахождения объекта куда нужно вставить контент - использовать изученные методы навигации по DOM элементам
// Для обновления контента тега span - использовать соответствующие свойсво элемента

function getBrowserName(){
    let possibleBrowsers = ['OPR','Safari','Firefox', 'Chromium', 'Chrome'];
    let userAgent = window.navigator.userAgent;
    console.log(userAgent);
    
    for (let i = 0; i < possibleBrowsers.length; i++) {
        if (userAgent.indexOf(possibleBrowsers[i]) + 1){
            if (possibleBrowsers[i] == 'OPR'){
                return 'Opera'
            } else {
                return possibleBrowsers[i];
            }
        }
    }

}

function setBrowserNameToContent(){
    let el = document.getElementsByTagName('span')[1];
    el.textContent = getBrowserName();
    

}

setBrowserNameToContent();

// ------------------------
// Задача 6.2
// ------------------------
// Как получить доступ к стилям последнего элемента тега body?
let lastElement = document.body.lastElementChild;
console.log(lastElement.style);

// Как проверить что в body вообще есть элементы?
// (написать код)

if (document.body.children.length){
    console.log("Body isn't empty");
    
}

