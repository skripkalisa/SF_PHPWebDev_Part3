console.clear()
const genButton = document.querySelector('#generate')
const resetButton = document.querySelector('#reset')
const card = document.querySelector('#generatorCard')

const generator = function (initPerson) {
  document.getElementById('firstNameOutput').innerText = initPerson.firstName
  document.getElementById('lastNameOutput').innerText = initPerson.lastName
  document.getElementById('patronymicNameOutput').innerText =
    initPerson.patronymicName
  document.getElementById('genderOutput').innerText = initPerson.gender
  document.getElementById('birthDateOutput').innerText = initPerson.birthDate
  document.getElementById('birthYearOutput').innerText = initPerson.birthYear
  document.getElementById('occupation').innerText = initPerson.occupation
}

const init = function () {
  return personGenerator.getPerson()
}

genButton.addEventListener('click', function () {
  const initPerson = init()
  if (initPerson.gender === 'Мужчина') {
    card.classList.remove('female')
    card.classList.add('male')
  } else {
    card.classList.remove('male')
    card.classList.add('female')
  }

  generator(initPerson)
})

resetButton.addEventListener('click', function () {
  const initPerson = init()
  for (let key in initPerson) {
    initPerson[key] = key
  }
  card.classList?.remove('male')
  card.classList?.remove('female')
  generator(initPerson)
})

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.collapsible')

  var instances = M.Collapsible.init(elems, {
    accordion: false,
  })
})
