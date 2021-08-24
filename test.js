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

console.clear();

for (let i = 0, j = 0; i < 3 && j < 12; i += 1, j += 3) 
  console.log(i, j);

// for (const i = 0;;) 
// {
//   console.log(i)
//   let j = 0
//   j++
//   if (j == 5)
//     break
//   }

// for (const i = 0, const j = 0;;) {
//   console.log(i, j);
// }

// for (let i = 0, j = 0;;) 
//   console.log(i, j);

// while (a = 5){
//   console.log(a);
// }

// do 
//   {console.log("sd") }
//   while (a === true)

// obj = {'sdf':[ 43, [2,3,4,]]}

// for (let i in obj) 
//   console.log(i);

// console.clear();

// применение метода
const kinds = ['Мангустин', 'Дуриан', 'Личи', 'Карамбола'];
const years = [[2017, 2018], [2017, 2018, 2019, 2020], [2020], [2019, 2020]];
// объединяем информацию и формируем массив объектов
const fruits = kinds.map((kind, index) => ({
  kind,  // напоминание: это деструктуризация объекта
  years: years[index]
}));

console.log(fruits)  // массив экзотических фруктов (уже представленных объектами)

// без цепочки вызовов
const filteredFruites = fruits.filter(el => {
  const years = el.years;
  return years.includes(2017) && years.includes(2018);
});
const filteredKinds1 = filteredFruites.map(el => el.kind);
console.log(filteredKinds1);  // ['Мангустин', 'Дуриан']

// с цепочкой вызовов
const filteredKinds2 = fruits
  .filter(el => {
    const years = el.years;
    return years.includes(2017) && years.includes(2018);
  })
  .map(el => el.kind);
console.log(filteredKinds2)  // ['Мангустин', 'Дуриан']


const arr = [1, 2, 3, 4];

// суммирование с циклом for
let sum1 = 0;
for (let i = 0; i < arr.length; i++) {
	sum1 += arr[i];
}

// суммирование с методом forEach
let sum2  = 0;
arr.forEach(el => sum2 += el);

// суммирование с методом reduce
const sum3 = arr.reduce((a, b) => a + b);  // initialValue по умолчанию равно 0 
// аналогичная подробная запись
// const sum3 = arr.reduce((accumulator, element) => {
//   return accumulator + element
// }, 0);

console.log(sum1, sum2, sum3)  // 10 10 10


const votes = ['Берни Сандерс', 'Дональд Трамп', 'Дональд Трамп', 'Джо Байден', 'Берни Сандерс', 'Джо Байден', 'Джо Байден', 'Берни Сандерс', 'Джо Байден', 'Джо Байден', 'Дональд Трамп', 'Дональд Трамп', 'Джо Байден', 'Берни Сандерс', 'Дональд Трамп', 'Берни Сандерс', 'Дональд Трамп', 'Дональд Трамп', 'Джо Байден', 'Берни Сандерс', 'Дональд Трамп', 'Джо Байден', 'Дональд Трамп', 'Джо Байден', 'Берни Сандерс', 'Джо Байден', 'Джо Байден', 'Дональд Трамп', 'Дональд Трамп', 'Джо Байден', 'Берни Сандерс'];

const result = votes.reduce((result, vote) => {
  result[vote] ? result[vote]++ : result[vote] = 1;
  return result;
}, {})

console.log(result);
// {
//   'Берни Сандерс': 8,
//   'Дональд Трамп': 11,
//   'Джо Байден': 12
// }

console.log([3, 2, 1].reduce(Math.pow));


console.log(Math.max(...[1, 13, 175, -123]));


// перебор ключей / значений / элементов в объекте
const obj1 = { red: 255, green: 0, blue: 0, opacity: .3 };

Object.keys(obj1).forEach(key => console.log(key)); 
Object.values(obj1).forEach(value => console.log(value)); 
Object.entries(obj1).forEach(entry => console.log(entry)); 

// перебор ключей / значений / элементов в Map
const map1 = new Map([['red', 255], ['green', 0], ['blue', 0], ['opacity', .3]]);

for (let [key,] of map1) console.log(key);
for (let key of map1.keys()) console.log(key);
for (let [,value] of map1) console.log(value);
for (let value of map1.values()) console.log(value);
for (let [key, value] of map1) console.log(key, value);
for (let entry of map1.entries()) console.log(entry);

console.clear();

const object = {};
const foo = () => null;
const array = [];
const bool = true;

const map = new Map();

map.set(foo, 'my function');
map.set(object, 'my object');
map.set(array, 'my array');
map.set(bool, 'by boolean');
map.set(NaN, 'my NaN');

console.log(map)  // {ƒ => "my function", {...} => "my object", Array(0) => "my array", true => "by boolean", NaN => "my NaN"}


const map10 = new Map(); 
map10.set(NaN, 1/0);
console.log(map10.get(NaN));

// перебор ключей / значений / элементов в объекте
const obj10 = { red: 255, green: 0, blue: 0, opacity: .3 };

Object.keys(obj10).forEach(key => console.log(key)); 
Object.values(obj10).forEach(value => console.log(value)); 
Object.entries(obj10).forEach(entry => console.log(entry)); 

// перебор ключей / значений / элементов в Map
const set1 = new Set([['red', 255], ['green', 0], ['blue', 0], ['opacity', .3]]);

// все выводы в консоль одинаковы, так как ключ и есть значение
// присутствует для обратной совместимостью с Map
for (let value of set1) console.log(value);
for (let key of set1.keys()) console.log(key);
for (let value of set1.values()) console.log(value);
for (let [key, value] of set1.entries()) console.log(key);
for (let [key, value] of set1.entries()) console.log(value);

const arr20 = ['a', 'ab', 'ab', 'aba', 'abaa', 'a'];
const uniq = [...new Set(arr20)];
console.log(uniq);