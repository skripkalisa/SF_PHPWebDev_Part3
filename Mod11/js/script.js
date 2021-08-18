// let rangeStart = parseInt(prompt('Минимальное знание числа для игры', '0'));
// let rangeEnd = parseInt(prompt('Максимальное знание числа для игры', '100'));
// alert(`Загадайте любое целое число от ${rangeStart} до ${rangeEnd}, а я его угадаю`);


console.clear();


const limitsSetter = document.getElementById('setLimits')
const answerField = document.getElementById('answerField')
const stepField = document.getElementById('stepField')
const rangeSetters = document.querySelectorAll('#setLimits  input')
const modal = document.querySelector('#getLimits')
const startBtn = document.querySelector('#start')

const questions = ['Да это легко! Ты загадал', 'Наверное, это число', 'Может быть это', 'Дай угадаю! Это', 'По моим рассчётам это число']
const success = ['Получилось!', 'Я и не такое умею!', 'Кто бы сомневался!', 'Знай наших!', 'Попробуем ещё?', 'Славно позабавились!']
const failure = ['значит ты загадал неправильное число!', 'тогда я сдаюсь...', 'возможно, ты не понял правила', "может быть, ты забыл загадать число?", "значит что-то пошло не так."]

const ones = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять']
const firstTen = ['', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать']
const tens = ['', 'десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто']
const hundreds = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот']


const lowerBound = -999
const upperBound = 999
const defaultStart = 0
const defaultEnd = 100

let rangeStart
let rangeEnd
let index

const setDefault = () => {
  rangeStart = defaultStart
  rangeEnd = defaultEnd
  rangeSetters[0].value = rangeStart
  rangeSetters[1].value = rangeEnd
  gameRun = true
  step = 0
}


const tryNumeral = (num) => {

  let numeral = ''
  let i = 0
  const nums = num.toString().split('').reverse()

  if (nums.includes('-')) numeral += 'минус'
  if (nums[2] && nums[2] !== '-') numeral += ' ' + hundreds[parseInt(nums[2])]
  if (nums[1] && nums[1] !== '-' && nums[1] !== '1') numeral += ' ' + tens[parseInt(nums[1])]
  if (nums[0] !== '0') numeral += ' ' + ones[parseInt(nums[i])]
  if (nums[1] === '1') numeral = firstTen[parseInt(nums[0])]
  if (num == 0) numeral = 'ноль'

  console.log(numeral)

  if (numeral.length < 20)
    return numeral
  else
    return num
}

const setLimits = () => {
  rangeStart < lowerBound ? rangeStart = lowerBound : rangeStart
  rangeEnd > upperBound ? rangeEnd = upperBound : rangeEnd
}

const warning = () => {
  message = `Неверно задан дипазон: Требуется ввести числа. Использую значения по умолчанию ${defaultStart} : ${defaultEnd}`
  limitsSetter.lastChild.textContent = message
}

const getValues = function getValues() {
  limitsSetter.lastChild.textContent = ''
  if (this.id == 'minimum')
    isNaN(parseInt(this.value)) ? warning() : rangeStart = parseInt(this.value)
  if (this.id == 'maximum')
    isNaN(parseInt(this.value)) ? warning() : rangeEnd = parseInt(this.value)
  checkRange()
}

const swapNums = () => {
  let temp = rangeStart
  rangeStart = rangeEnd
  rangeEnd = temp
}

const checkRange = () => {
  if (rangeEnd < rangeStart) {
    limitsSetter.lastChild.textContent = ''
    message = `Неверно задан дипазон: минимум (=${rangeStart}) > максимум (=${rangeEnd}). \nМеняю значения местами.`
    limitsSetter.lastChild.textContent = message
  }
}


for (rangeSetter of rangeSetters)
  ['change', 'keyup', 'cut'].forEach(e => rangeSetter.addEventListener(e, getValues))


const getRandom = (n) => {
  return Math.round(Math.random() * n)
}


document.getElementById('btnRetry').addEventListener('click', setDefault)

const endGame = () => {
  if (Math.abs(rangeEnd - rangeStart) === 1)
    guess < rangeStart ? guess = rangeStart : guess = rangeEnd
  let finalPhrase = `Если это не ${tryNumeral(guess)},\n`
  let fail = failure[getRandom(4)]
  const pickEmoji = Math.round(Math.random());

  const emoji = (pickEmoji === 1) ?
    `\n\u{1F914}` :
    `\n\u{1F92F}`;

  answerField.innerText = finalPhrase + fail + emoji
  gameRun = false;
}

const average = () => {
  return (parseInt(rangeStart) + parseInt(rangeEnd)) / 2
}

const startGame = () => {
  if (rangeStart > rangeEnd) swapNums()
  setLimits()
  guess = Math.floor(average())
  nextStep(guess)
}

const quiz = (guess) => {
  step++;
  stepField.innerText = `Вопрос №${step}`
  index = getRandom(4)
  numeral = tryNumeral(guess)
  answerField.innerText = `${questions[index]} ${numeral}?`;
}

const nextStep = (guess) => {
  quiz(guess)
  numeral = tryNumeral(guess)
  if (rangeStart === rangeEnd)
    answerField.innerText = `Это должно быть ${numeral}`
  if (rangeStart > rangeEnd) endGame()
}

document.getElementById('btnLess').addEventListener('click', function () {
  if (gameRun) {
    guess < rangeEnd ? rangeEnd = guess - 1 : rangeEnd = guess - 1
    guess = Math.floor(average())
    nextStep(guess)
  }
})

document.getElementById('btnOver').addEventListener('click', function () {
  if (gameRun) {
    guess > rangeStart ? rangeStart = guess + 1 : rangeStart = guess + 1
    guess = Math.ceil(average())
    nextStep(guess)
  }
})

document.getElementById('btnEqual').addEventListener('click', function () {
  if (gameRun) {
    index = getRandom(4)
    answerField.innerText = `${success[index]}\n\u{1F60E}`
    gameRun = false;
  }
})


startBtn.addEventListener('click', startGame)

window.onload = function () {
  setDefault()
  var myModalEl = document.querySelector('#getLimits')
  var modal = bootstrap.Modal.getOrCreateInstance(myModalEl)
  modal.show()
  // startGame()
}