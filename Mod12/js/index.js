console.clear()

// элементы в DOM можно получить при помощи функции querySelector
const fruitsList = document.querySelector('.fruits__list') // список карточек
const shuffleButton = document.querySelector('.shuffle__btn') // кнопка перемешивания
const minWeight = document.querySelector('.minweight__input')
const maxWeight = document.querySelector('.maxweight__input')
const filterButton = document.querySelector('.filter__btn') // кнопка фильтрации
const sortKindLabel = document.querySelector('.sort__kind') // поле с названием сортировки
const sortTimeLabel = document.querySelector('.sort__time') // поле с временем сортировки
const sortChangeButton = document.querySelector('.sort__change__btn') // кнопка смены сортировки
const sortActionButton = document.querySelector('.sort__action__btn') // кнопка сортировки
const kindInput = document.querySelector('.kind__input') // поле с названием вида
const colorInput = document.querySelector('.color__input') // поле с названием цвета
const weightInput = document.querySelector('.weight__input') // поле с весом
const addActionButton = document.querySelector('.add__action__btn') // кнопка добавления

// список фруктов в JSON формате
let fruitsJSON = `[
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35},
  {"kind": "Личи", "color": "розово-красный", "weight": 17},
  {"kind": "Карамбола", "color": "желтый", "weight": 28},
  {"kind": "Тамаринд", "color": "светло-коричневый", "weight": 22}
]`

// преобразование JSON в объект JavaScript
let fruits = JSON.parse(fruitsJSON)

const addClass = (str) => {
  switch (str) {
    case 'фиолетовый':
      return 'fruit_violet'
    case 'зеленый':
      return 'fruit_green'
    case 'розово-красный':
      return 'fruit_carmazin'
    case 'желтый':
      return 'fruit_yellow'
    case 'светло-коричневый':
      return 'fruit_lightbrown'
    default:
      return null
  }
}

/*** ОТОБРАЖЕНИЕ ***/

// отрисовка карточек
const display = () => {
  fruitsList.innerHTML = ''

  for (let i = 0; i < fruits.length; i++) {
    const li = document.createElement('li')
    li.className = 'fruit__item'
    const fruitColor = addClass(fruits[i].color)

    if (fruitColor) li.className += ` ${addClass(fruits[i].color)}`
    else {
      li.className += ' fruit_random'
      li.style = `background-color: #${Math.floor(
        Math.random() * 16777215
      ).toString(16)};`
    }

    const div = document.createElement('div')
    div.className = 'fruit__info'
    const indexDiv = document.createElement('div')
    indexDiv.innerHTML = `index: ${i}`
    div.appendChild(indexDiv)

    for (const [key, value] of Object.entries(fruits[i])) {
      const innerDiv = document.createElement('div')
      key == 'weight'
        ? (innerDiv.innerHTML = `${key} (кг): ${value}`)
        : (innerDiv.innerHTML = `${key}: ${value}`)
      div.appendChild(innerDiv)
    }

    li.appendChild(div)
    fruitsList.appendChild(li)
  }
}

// первая отрисовка карточек
display()

/*** ПЕРЕМЕШИВАНИЕ ***/

// генерация случайного числа в заданном диапазоне
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// перемешивание массива
const shuffleFruits = () => {
  let result = fruits
  try {
    for (let i = result.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)) // random index from 0 to i
      ;[result[i], result[j]] = [result[j], result[i]]
    }
  } catch (err) {
    alert('Не могу перемешать массив: ' + err.message)
  }
  fruits = result
}

shuffleButton.addEventListener('click', () => {
  shuffleFruits()
  display()
})

/*** ФИЛЬТРАЦИЯ ***/

// фильтрация массива
const filterFruits = () => {
  return fruits.filter((item) => {
    const weight = item.weight
    if (minWeight?.value || maxWeight?.value)
      return (
        weight >= parseFloat(minWeight?.value) ||
        weight <= parseFloat(maxWeight?.value)
      )
    return fruits
  })
}

filterButton.addEventListener('click', () => {
  fruits = filterFruits()
  display()
})

/*** СОРТИРОВКА ***/

let sortKind = 'bubbleSort' // инициализация состояния вида сортировки
let sortTime = '-' // инициализация состояния времени сортировки

const compareColor = (a, b) => {
  return a.color > b.color
}

function qSort(arr, compare) {
  if (arr.length < 2) return arr

  let max = arr.length - 1
  let rand = Math.floor(Math.random() * max)
  let pivot = arr[rand]
  const left = []
  const right = []

  arr.splice(arr.indexOf(pivot), 1)
  arr = [pivot].concat(arr)

  for (let i = 1; i < arr.length; i++) {
    if (compareColor(pivot, arr[i])) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return qSort(left).concat(pivot, qSort(right))
}

const sortAPI = {
  bubbleSort(arr, compare) {
    const n = arr.length
    // внешняя итерация по элементам
    for (let i = 0; i < n - 1; i++) {
      // внутренняя итерация для перестановки элемента в конец массива
      for (let j = 0; j < n - 1 - i; j++) {
        // сравниваем элементы
        if (compare(arr[j], arr[j + 1])) {
          // делаем обмен элементов
          let temp = arr[j + 1]
          arr[j + 1] = arr[j]
          arr[j] = temp
        }
      }
    }
  },

  quickSort(arr, compare) {
    fruits = qSort(arr, compare)
  },

  // выполняет сортировку и производит замер времени
  startSort(sort, arr, compare) {
    const start = new Date().getTime()
    sort(arr, compare)
    const end = new Date().getTime()
    sortTime = `${end - start} ms`
  },
}

// инициализация полей
sortKindLabel.textContent = sortKind
sortTimeLabel.textContent = sortTime

sortChangeButton.addEventListener('click', () => {
  sortKind === 'bubbleSort'
    ? (sortKind = 'quickSort')
    : (sortKind = 'bubbleSort')
  sortKindLabel.textContent = sortKind
})

sortActionButton.addEventListener('click', () => {
  sortTimeLabel.innerText = 'sorting...'
  const sort = sortAPI[sortKind]
  sortAPI.startSort(sort, fruits, compareColor)
  display()
  sortTimeLabel.innerText = sortTime
})

/*** ДОБАВИТЬ ФРУКТ ***/

addActionButton.addEventListener('click', () => {
  try {
    if (kindInput.value && colorInput.value && weightInput.value) {
      fruits.push({
        kind: `${kindInput?.value}`,
        color: `${colorInput?.value}`,
        weight: `${weightInput?.value}`,
      })

      display()
    } else alert('Не все поля заполнены')
  } catch (e) {
    alert('Не могу добавить новый фрукт: ' + e.message)
  }
})
