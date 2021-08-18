// document.querySelector('body').addEventListener('click',
//   (event) => {
//     alert('Событие body');
//   })
// document.querySelector('#parent').addEventListener('click',
//   (event) => {
//     alert('Событие родителя');
//   })
// document.querySelector('#child').addEventListener('click',
//   (event) => {
//     alert('Событие потомка');
//   })

const d = 1200e-2
console.log(d);

console.log(0.2 + 0.1);


console.log(1e8 + 1e-8);
console.log(1e9 + 1e-9);

console.log(0 + -0 === 0 * -0);

console.log("----");
console.log(3e400 + 5e400 === 8e400);
console.log(3e400 + 5e400 === 8e800);
console.log(3e40 + 2e40 === 5e40);
console.log(3e40 + 2e40 === 5e80);
console.log(5e1000 - 5e1000 == NaN);
console.log(5e1000 - 5e1000 == 0);
console.log(5e1000 - 5e1000 == -0);
console.clear()

console.log(2 * 2 ** 2 * (2 * 2) ** 2 - 2 + 2 * 2 + 2 ** -2);
a = 12267008831
console.log(a.toString(30).toUpperCase());


console.clear()
console.log(Math.sign(-a))

//  Задание 10.4 .1
//  1 / 1 point(graded)
//  Найдите расстояние между точками А и B с точностью до 12 знаков после запятой.Точка А имеет координаты(-2, 7), точка B имеет координаты(3, -2).

a = [-2, 7]
b = [3, -2]

c = Math.hypot((b[0] - a[0]), (b[1] - a[1]))

console.log(c.toFixed(12));

//  Задание 10.4 .2
//  1 point possible(graded)

//  Найдите объём шара с радиусом 6371.

//  Округлите значение, полученное при вычислениях, до целого числа.

r = 6371

V = Math.round(Math.PI * r ** 3 * 4 / 3)

console.log(V);

// console.log("Значит, вводим план-перехват.\nТолько сразу подготовь рапорт, что план-перехват никаких результатов не дал.");

// console.log(`${'Полицейский'} за рулём, я чиню парашют, ${"медсестра"} успокаивает нас пением.`);

// console.log(«Нормальные герои всегда идут в обход»);

// console.log("Знаешь, французы таких, как ты, называют "
//   некомпетентными "");

// console.log("Маг не приходит поздно, и рано тоже не приходит. Он появляется тогда, когда посчитает нужным".);

console.log('мандарин'.substring(0, 3).replace('н', 'ма'));
console.log('папа может всё что угодно'.replace('п', 'м').substr(0, 4));
console.log('м' + 'далай лама, давай'.substr('далай лама, давай'.indexOf('ла'), 3));

console.log('\u043C' + 'панама'.slice(-3));
const text = "И ушёл колобок от бабушки."
console.log(text.replace('и', 'e').toLowerCase().replace('у', 'по').replace('от', ' к'));

let fantasyGen = "Жил-был объект А. "
fantasyGen += "И был у него объект Б.\n"
fantasyGen += "Однажды думает объект А: "
fantasyGen += "\"А не пойти ли мне объект В? "
fantasyGen += "Продам объект Б и куплю себе объект Г.\"\n"
fantasyGen += "И пошёл объект А объект В.\n"
fantasyGen += "И продал объект Б, и купил объект Г.\n"
fantasyGen += "И вернулся объект А домой.\n"
fantasyGen += "Конец."

let firstFantasy = fantasyGen;
firstFantasy = firstFantasy.replace(/объект А/g, 'старик');
firstFantasy = firstFantasy.replace(/объект Б/g, 'кисет');
firstFantasy = firstFantasy.replace(/объект В/g, 'на рынок');
firstFantasy = firstFantasy.replace(/объект Г/g, 'мотоцикл');

let secondFantasy = fantasyGen;
secondFantasy = secondFantasy.replace(/объект А/g, 'Антон');
secondFantasy = secondFantasy.replace(/объект Б/g, 'волшебный шкаф');
secondFantasy = secondFantasy.replace(/объект В/g, 'к царю');
secondFantasy = secondFantasy.replace(/объект Г/g, 'неволшебный шкаф');

console.log(firstFantasy);
console.log(secondFantasy);

console.clear();

let isAdmin;
let isActive;

isAdmin = false;
isActive = false;
console.warn(`Первое значение: ${isAdmin}, второе значение: ${isActive}`);
console.log(`Отрицание конъюнкции: ${!(isAdmin && isActive)}`);
console.log(`Дизъюнкция отрицаний: ${!isAdmin || !isActive}`);

isAdmin = true;
isActive = false;
console.warn(`Первое значение: ${isAdmin}, второе значение: ${isActive}`);
console.log(`Отрицание конъюнкции: ${!(isAdmin && isActive)}`);
console.log(`Дизъюнкция отрицаний: ${!isAdmin || !isActive}`);

isAdmin = false;
isActive = true;
console.warn(`Первое значение: ${isAdmin}, второе значение: ${isActive}`);
console.log(`Отрицание конъюнкции: ${!(isAdmin && isActive)}`);
console.log(`Дизъюнкция отрицаний: ${!isAdmin || !isActive}`);

isAdmin = true;
isActive = true;
console.warn(`Первое значение: ${isAdmin}, второе значение: ${isActive}`);
console.log(`Отрицание конъюнкции: ${!(isAdmin && isActive)}`);
console.log(`Дизъюнкция отрицаний: ${!isAdmin || !isActive}`);

console.log(false == false == false == false);

console.log(!true == !(true == !true));

const name = 'Антон' && ('Борис' || 'Вадим') && !'Гарик' && 'Данил';
console.log(name);
console.clear();
console.log(false == '00x00');
console.log(true || 1024 << 6 && 'ИСТИНА' ** 3);
console.log(true == ~!1);
console.log(1 !== true);
console.log();
console.log(true == 'true');
console.log(true && 1);
console.log(!false != !true);
console.log(true == 1);
console.log();
console.log('${5 - (3 + 2)}' == false);
console.log(true == '0b0000001');

console.clear();
let N = 1000000
console.log(Math.log2(N) + 1);

// LRdWdi5mJbge5vM