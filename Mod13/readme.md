#  Модуль 13. Базовый JS. Функции и объекты 

[Веб версия домашнего задания](https://skripkalisa.github.io/SF_PHPWebDev_Part3/Mod13/index.html)

## 13.11. Практическое задание


Создание генератора случайных пользовательских данных: ФИО, пола, даты рождения и профессии. С возможностью сбрасывать информацию.

Выбор данных происходит из заготовленных JSON значений с помощью Math.random.

### ФИО

Женскую фамилию нельзя писать в JSON, она должна происходить из предоставленных мужских фамилий. Женские имена можно написать в качестве JSON. Требуется написать дополнительные условия if else в randomFirstName и randomSurname для женщин и мужчин.

### Пол

В генерации пола воспользуйтесь тернарным оператором и переменными GENDER_MALE: 'Мужчина', GENDER_FEMALE: 'Женщина' из файла personGenerator.js.

### Дата рождения

Для генерации года используйте min, max значения из функции случайной генерации randomIntNumber. Располагать года в явном виде внутри JSON нельзя.

### Кнопка удаления сгенерированных данных

Кнопка очистки должна удалять только сгенерированные значения, не удаляя теги в HTML разметке.

[Шаблон проекта на GitHub.](https://github.com/SkillfactoryCoding/php/tree/master/bjs/10_function_object)

---

## Критерии оценки выполненного задания

**0 баллов**

Не выполнены условия на отметку 1.

**1 балл**

  - Добавлено CSS оформление.
  - Добавлен пол, год рождения и фамилия.
  - Имя и фамилия привязаны к полу. Для женских фамилий должно быть окончание на «а»: «Елена Морозова».

**2 балла**

  - Выполнены условия на отметку 1.
  - Добавлена генерация закреплённого за полом отчества в отдельном объекте, полученном от кода JSON . Не должно встречаться генерации мужского отчества в женской фамилии и имени.
  - Добавлена профессия, есть её связь с полом. Например, женские имена и фамилии не могут быть слесарем, солдатом, шахтёром и так далее.

**3 балла**

  - Выполнены условия на отметку 2.
  - Добавлена генерация дня и месяца рождения. Месяц рождения написан текстом, например: «апреля», «мая».
  - Ограничьте генерацию дней для месяцев, в которых встречается 28 и 30 дней.

**4 балла**

  - Выполнены условия на отметку 3.
  - Добавлена кнопка, активирующая генерацию всех данных.
  - Добавлена кнопка очистки данных.
