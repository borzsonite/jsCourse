// Task 1
// Напишите функцию t1, которая при нажатии кнопки выводит в out - 1 переменную a1.

let a1 = 8;
function t1() {
    let out = document.querySelector('.out-1');
    out.innerHTML = a1;
}

document.querySelector('.b-1').onclick = t1;


// Task 2.

// Изменим задачу 1. Сейчас она только выводит переменную в заранее заданный блок.Давайте сделаем так, чтобы функция, была более гибкой.Пусть теперь функция t2 возвращает переменную a2.Поскольку функция возвращает переменную, то имя функции со скобками(вызов функции) можно встраивать в выражения.Обратите внимание, как изменяется вызов функции теперь.

let a2 = 8;
function t2() {
    return a2;
}

document.querySelector('.b-2').onclick = function () {
    document.querySelector('.out-2').textContent = t2();
}

// Task 3.
// Наша предыдущая функция, сильно все еще зависима от внешних переменных.Давайте сделаем ее более универсальной.Пусть функция t3 принимает 2 параметра и выводит их произведение.Допишите код функции так, чтобы она возвращала произведение двух чисел, переданных ей в качестве параметра a, b.Протестируем функцию на двух примерах, с помощью кнопок b-3-1 и b-3-2.

function t3(a, b) {
    return a + b;
}

document.querySelector('.b-3-1').onclick = function () {
    document.querySelector('.out-3-1').textContent = t3(3, 4);
}
document.querySelector('.b-3-2').onclick = function () {
    document.querySelector('.out-3-2').textContent = t3(5, 6);
}

// Task 4
// Напишите функцию t4 которая принимает ваш год рождения  и вычисляет ваш возраст. 

function t4(year) {
    return 2019 - year;
}

document.querySelector('.b-4').onclick = function () {
    document.querySelector('.out-4').textContent = t4(1983);
}


// Task 5
// Напишите функцию t5, которая принимает ваше имя в качестве параметра и возвращает строку Hello name, где name - принятое в качестве параметра имя.


function t5(yourName) {
    return 'Hello, ' + yourName;
}

document.querySelector('.b-5').onclick = function () {
    document.querySelector('.out-5').textContent = t5('Alex');
}



// Task 6
// Напишите функцию t6, которая принимает 2 числа и возвращает случайное целое число от первого до второго принятого параметра. 

function t6(a, b) {
    let rand = a + Math.random() * (b + 1 - a);
    return Math.floor(rand)
}

document.querySelector('.b-6').onclick = function () {
    document.querySelector('.out-6').textContent = t6(1, 7);
}


// Task 7
// Напишите функцию t7, которая возвращает случайный цвет в формате rgb(x, y, z)(строка).Где x, y, z - случайные числа в диапазоне[0, 255]. 

function t7() {
    let x = Math.floor(Math.random() * 255 + 1);
    let y = Math.floor(Math.random() * 255 + 1);
    let z = Math.floor(Math.random() * 255 + 1);
    return `rgb(${x}, ${y}, ${z})`;
}

document.querySelector('.b-7').onclick = function () {
    document.querySelector('.out-7').style.background = t7();
    console.log(t7());
}

// Task 8
// Напишите функцию t8, которая принимает строку в качестве параметра и возвращает результат с очищенными пробелами в начале и вконце строки.Т.е.принимает _hello_(где знак _ символизирует пробел), а возвращает hello.Для удаления пробелов - используйте trim.

function t8(str) {
    return str.trim();
}

document.querySelector('.b-8').onclick = function () {
    document.querySelector('.out-8').textContent = t8(' Hello  ');
}


// Task 9
// Напишите функцию t9, которая принимает число и возвращает true, если число четное, и false если не четное. 

function t9(num) {
    return num % 2 ? false : true;
}

document.querySelector('.b-9').onclick = function () {
    document.querySelector('.out-9').textContent = t9(14);
}


// Task 10
// Создайте функцию t10, которая принимает 2 числа и возвращает большее из них.В случае равенства - любое из чисел.

function t10(a, b) {
    return a > b ? a : b;
}

document.querySelector('.b-10').onclick = function () {
    document.querySelector('.out-10').textContent = t10(9, 9);
}

//Task 11
// Создайте функцию (именнованную), которая при клике на кнопке выводит в консоль ваше имя.
function name() {
    console.log('Сергей');
}
document.querySelector('.b-11').onclick = name;

//Task 12
// Создайте функцию (именованную). Функция должна примать один параметр - имя (например Ivan) и выводить имя переданное ей в консоль. Запустите функцию и передайте в качестве имени Sergey.
function printName(name) {
    console.log(name);
}
document.querySelector('.b-12').onclick = () => printName("Сергей");

//Task 13.
//Создайте именнованную функцию, которая принимает параметр число и выводит его значение умноженное на 10 в консоль.Запустите выполнение функции.Убедитесь, что она работает.Теперь создайте кнопку и добавьте на нее событие onclick которое вызывает данную функцию с параметром.
function multiply(num) {
    return num * 10;
}
document.querySelector('.b-13').onclick = () => console.log(multiply(3));

//Task 14.
//Создайте кнопку и функцию.При нажатии кнопки, функция окрашивает данную кнопку в background: red.
// document.querySelector('.b-14').onclick = () => { document.querySelector('.b-14').style.background = 'red' }
let b14 = document.querySelector('.b-14');
b14.onclick = () => b14.style.background = 'red';

//Task 15.
//Создайте функцию, которая возвращает ваше имя.Имя вводится с input.
document.querySelector('.b-15').onclick = () => document.querySelector('.out-15').innerHTML = (returnMyName());
function returnMyName() {
    let name = document.querySelector('input[type = "text"]').value;
    return name;
}

//Task 16.
//Создайте функцию, которая принимает 2 числа и возвращает большее число из двух, либо любое из них если они равны.
function returnMaxValue(a, b) {
    return a > b ? a : b;
}
document.querySelector('.b-16').onclick = () => {
    document.querySelector('.out-16').innerHTML = returnMaxValue(5, 6);
}

//Task 17.
//Создайте функцию, которая принимает год рождения и возвращает ваш возраст.Текущий год задавать как 2019.
function returnAge(yearOfBirth) {
    return 2019 - yearOfBirth;
}
document.querySelector('.b-17').onclick = () => document.querySelector('.out-17').innerHTML = returnAge(1976);

//Task 18.
//Создайте функцию, которая возвращает случайное число от 1 до 10. По случайным числам читаем все здесь и задаем вопросы в чате.
function returnRandomNum() {
    let rand = 1 + Math.random() * (10);
    return Math.floor(rand);
}
document.querySelector('.b-18').onclick = () => document.querySelector('.out-18').innerHTML = returnRandomNum();

//Task 19.
//Создайте функцию, которая возвращает случайное число в указанном диапазоне.Диапазон указывает пользователь с помощью двух переменных, которые передаются функции в качестве параметров.
function returnNumFromRange(a, b) {
    let rand = a + Math.random() * (b + 1 - a);
    return Math.floor(rand)
}
document.querySelector('.b-19').onclick = () => document.querySelector('.out-19').innerHTML = returnNumFromRange(10, 15);

//Task 20.
//Создайте функцию, которая возвращает случайный цвет.Напомню - цвет это строка rgb(0..255, 0..255, 0..255) - которая содержит 3 числа от нуля до 255 включительно, разделенных запятыми.Т.е.вам нужно три раза создать случайное число от 0 до 255.
function returnColor(a, b) {
    let x = Math.floor(Math.random() * 255 + 1);
    let y = Math.floor(Math.random() * 255 + 1);
    let z = Math.floor(Math.random() * 255 + 1);
    return `rgb(${x},${y},${x})`;
}
document.querySelector('.b-20').onclick = () => document.querySelector('.out-20').innerHTML = returnColor();

//Task 21.
//Создайте функцию f11, которая возвращает число 5. Создайте функцию которая принимает 2 параметра и перемножает их между собой. В качестве первого параметра передайте f11().
function f11() {
    return 5;
}
function calc(a, b) {
    return a * b;
}
document.querySelector('.b-21').onclick = () => {
    document.querySelector('.out-21').innerHTML = calc(6, f11())
}

//Task 22.
//Создайте функцию toNum, которая принимает 1 параметр - объект input, и возвращает введенное в него значение преобразованное в число.
function toNum(myInput) {
    return parseInt(myInput.value);
}
let res = document.querySelector('input[placeholder="Введите значение"');
document.querySelector('.b-22').onclick = () => document.querySelector('.out-22').innerHTML = toNum(res);

//Task 23.
//Создайте функцию emptyInput - которая принимает в качестве параметра input, удаляет все пробелы введенные до и после значения(trim), и проверяет - если результат равен пустой строке - то возвращает false, если нет - то сам результат с обрезанными пробелами.
function emptyInput(myInput) {
    return myInput.value.trim() == "" ? false : myInput.value;
}
document.querySelector('.b-23').onclick = () => {
    let res = document.querySelector('input[placeholder="Введите строку"]')
    document.querySelector('.out-23').innerHTML = emptyInput(res);
}

//Task 24.
//Создайте функцию, которая принимает параметр число и возвращает true если число четное и false если нечетное.
function isOdd(num) {
    return num % 2 != 0 ? false : true;
}

document.querySelector('.b-24').onclick = () => {
    document.querySelector('.out-24').innerHTML = isOdd(document.querySelector('input[placeholder="Введите число"]').value)
}