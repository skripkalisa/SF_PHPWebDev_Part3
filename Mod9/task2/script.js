const clog = document.getElementById('consoleLog')

clog.addEventListener('click', function (e) {
  e.preventDefault()
  alert('Console.log() выводит сообщение в веб - консоль.')
  console.log('Console.log() выводит сообщение в веб - консоль.')
  clog.nextElementSibling.innerText = 'Пример использования команды console.log()'
})


const al = document.getElementById('alert')

al.addEventListener('click', function (e) {
  e.preventDefault()
  alert("Метод Window.alert() показывает диалоговое окно с опциональным (необязательным) сообщением и кнопкой OK.")
  al.nextElementSibling.innerText = 'Пример использования команды alert()'
})

const pr = document.getElementById('prompt')

pr.addEventListener('click', function (e) {
  e.preventDefault()
  alert("Метод Window.prompt() отображает диалоговое окно с необязательным запросом на ввод текста.")
  pr.nextElementSibling.innerText = 'Пример использования команды prompt()'
})