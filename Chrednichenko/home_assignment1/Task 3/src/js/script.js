function isPalindrome(str) {
    var strLen = str.length
    var result = ''
    for (var i = 0; i < strLen; i++) {
      if (str[i] === str[strLen - 1 - i]) {
        result = 'верно, '
      } else {
        result = 'не верно, '
        return result
      }
    }
    return result
}

  test = isPalindrome('топот')
  test2 = isPalindrome('выручка')
  test3 = isPalindrome('сопог')
  test4 = isPalindrome('анна')

  console.log(test)
  console.log(test2)
  console.log(test3)
  console.log(test4)

  document.write(' Результат полиндром: ' + 'топот - ' + test + ' выручка - ' + test2 + ' сопог - ' + test3 + ' анна - ' + test4)