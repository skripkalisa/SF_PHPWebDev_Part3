const personGenerator = {
  lastNameJson: `{
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Хренов"
        }
    }`,
  firstNameMaleJson: `{
        "count": 16,
        "list": {
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей",
            "id_11": "Вадим",
            "id_12": "Виктор",
            "id_13": "Вячеслав",
            "id_14": "Алексей",
            "id_15": "Николай",
            "id_16": "Петр"
        }
    }`,
  firstNameFemaleJson: `{
        "count": 16,
        "list": {
            "id_1": "Мария",
            "id_2": "Анна",
            "id_3": "Галина",
            "id_4": "Светлана",
            "id_5": "Екатерина",
            "id_6": "Нина",
            "id_7": "Надежда",
            "id_8": "Вера",
            "id_9": "Людмила",
            "id_10": "Любовь",
            "id_11": "Жанна",
            "id_12": "Наталья",
            "id_13": "Виктория",
            "id_14": "Олеся",
            "id_15": "Лидия",
            "id_16": "Гадя"
        }
    }`,
  occupationMaleJson: `{
        "count": 16,
        "list": {
            "id_1": "Слесарь",
            "id_2": "Плотник",
            "id_3": "Столяр",
            "id_4": "Солдат",
            "id_5": "Шахтёр",
            "id_6": "Грузчик",
            "id_7": "Певец",
            "id_8": "Учитель",
            "id_9": "Стилист",
            "id_10": "Врач",
            "id_11": "Дизайнер",
            "id_12": "Менеджер",
            "id_13": "Продавец",
            "id_14": "Консультант",
            "id_15": "Фотограф",
            "id_16": "Герой"
        }
    }`,
  occupationFemaleJson: `{
        "count": 16,
        "list": {
            "id_1": "Швея",
            "id_2": "Няня",
            "id_3": "Медсестра",
            "id_4": "Уборщица",
            "id_5": "Сиделка",
            "id_6": "Маникюрша",
            "id_7": "Певица",
            "id_8": "Учитель",
            "id_9": "Стилист",
            "id_10": "Врач",
            "id_11": "Дизайнер",
            "id_12": "Менеджер",
            "id_13": "Продавец",
            "id_14": "Консультант",
            "id_15": "Фотограф",
            "id_16": "Каралева"
        }
    }`,
  monthsJson: `{
        "count": 12,
        "list": {
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,

  GENDER_MALE: 'Мужчина',
  GENDER_FEMALE: 'Женщина',

  randomIntNumber: (max = 1, min = 0) =>
    Math.floor(Math.random() * (max - min + 1) + min),

  randomValue: function (json) {
    const obj = JSON.parse(json)
    const prop = `id_${this.randomIntNumber(obj.count, 1)}` // this = personGenerator
    return obj.list[prop]
  },

  randomGender: function () {
    let gender
    this.randomIntNumber() == 1
      ? (gender = this.GENDER_MALE)
      : (gender = this.GENDER_FEMALE)

    return gender
  },

  randomFirstName: function () {
    if (this.person.gender === 'Мужчина')
      return this.randomValue(this.firstNameMaleJson)
    else return this.randomValue(this.firstNameFemaleJson)
  },

  randomLastName: function () {
    if (this.person.gender === 'Мужчина')
      return this.randomValue(this.lastNameJson)
    else return this.randomValue(this.lastNameJson) + 'а'
  },

  randomPatronymicName: function () {
    let name = this.randomValue(this.firstNameMaleJson)
    let patronymic
    if (name.slice(-1) == 'й') patronymic = name.slice(0, -1) + 'ев'
    else if (name.slice(-1) == 'а') patronymic = name.slice(0, -1) + 'ич'
    else patronymic = name + 'ов'

    if (this.person.gender == 'Мужчина') {
      patronymic.slice(-2) !== 'ич'
        ? (patronymic += 'ич')
        : (patronymic = patronymic)
    } else patronymic += 'на'
    return patronymic
  },

  randomoccupation: function () {
    if (this.person.gender === 'Мужчина')
      return this.randomValue(this.occupationMaleJson)
    else return this.randomValue(this.occupationFemaleJson)
  },

  leapYear: function (year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) return true
    else return false
  },

  randomDate: function () {
    const longMonths = [1, 3, 5, 7, 8, 10, 12]
    const shortMonths = [4, 6, 9, 11]
    let day

    const month = this.randomValue(this.monthsJson)

    obj = JSON.parse(this.monthsJson)
    const key = Object.keys(obj.list).find((key) => obj.list[key] === month)
    m = parseInt(key.slice(3))

    if (longMonths.includes(m)) day = this.randomIntNumber(31, 1)
    else if (shortMonths.includes(m)) day = this.randomIntNumber(30, 1)
    else
      this.leapYear(this.person.birthYear)
        ? (day = this.randomIntNumber(29, 1))
        : (day = this.randomIntNumber(28, 1))

    return day + ' ' + month
  },

  easterEgg: function () {
    this.person.gender = 'девочка'
    this.person.firstName = 'Гадя'
    this.person.lastName = 'Хренова'
    this.person.patronymicName = 'Петрович'
    this.person.birthYear = 'не помню'
    this.person.birthDate = ''
    this.person.occupation = 'Потерялась я'
  },

  getPerson: function () {
    this.person = {}
    this.person.gender = this.randomGender()
    this.person.firstName = this.randomFirstName()
    this.person.lastName = this.randomLastName()
    this.person.patronymicName = this.randomPatronymicName()
    this.person.birthYear = this.randomIntNumber(2021, 1900)
    this.person.birthDate = this.randomDate()
    this.person.occupation = this.randomoccupation()
    if (this.person.firstName === 'Гадя' || this.person.lastName === 'Хренова')
      this.easterEgg()
    return this.person
  },
}
