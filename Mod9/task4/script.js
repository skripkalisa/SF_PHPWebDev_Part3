const link = document.querySelector('#link ')

link.addEventListener('click', function (e) {
  e.preventDefault()
  input = prompt("Измените текст ссылки")
  if (input == false) input = "Надо было что-то ввести"

  link.innerText = input
})