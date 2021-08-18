
# Модуль 11. Базовый JS. Условия 
## 11.7. Практическая работа

Требуется написать игру, в которой компьютер угадывает задуманное пользователем число.

Основа для выполнения работы находится в том же [проекте](https://github.com/SkillfactoryCoding/php) , что и практическая работа по предыдущему модулю:

Компьютер определяет число по алгоритму бинарного поиска, при этом сравнение числа с искомым и запуск итераций поиска выполняет пользователь.


## Критерии оценки выполненного задания

---

**0 баллов**

Не выполнены условия на отметку 5.

---

**5 баллов**

  - Корректно работают кнопки «Верно!» (уже написана), «Больше» (уже написана), «Меньше» и «Заново».
  - Вопросы отображаются не менее чем в трех вариантах (по аналогии с сообщением о невозможности определить число). Например, «Да это легко! Ты загадал...», «Наверное, это число...».
  - Сообщение при успехе не менее чем в трёх вариантах. Пользователем изменен внешний вид.

---

**10 баллов**

  - Всё, что требуется на 5 баллов.
  - При вводе текста, который не может быть интерпретирован как число (NaN) присваивать значения по умолчанию, используя короткий цикл операций дизъюнкции.
  - При вводе максимума или минимума больше 999 или меньше -999 изменять число на ближайшую границу (например, 1000 на 999, а -10000 на -999), используя тернарный оператор.

---

**15 баллов**

  - Всё, что требуется на 10 баллов.
  - Число выводится в текстовой форме, если на его запись в текстовой форме требуется меньше 20 символов, включая пробелы. Например, вопрос выглядит не «Вы загадали число 12?», а «Вы загадали число двенадцать?»

---

**20 баллов**

  - Всё, что требуется на 15 баллов.
  - Заменить prompt и alert на более приличные решения. Как вариант — использовать .collapse (bootstrap) для блоков.

---