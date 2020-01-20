// Task 1. 
// Есть массив d1, кнопка b-1, input i-1. Напишите функцию f1, которая при нажатии читает i-1 и добавляем его в массив. После чего выводит массив в .out-1. Поскольку мы будем выводить массив d1 неоднократно, то давайте вывод массива сделаем отдельной функцией, showArr - она подготовлена. Изучите ее - это хороший способ оптимизировать код.
let d1 = [33, 'best', 66, 'best'];
document.querySelector('.b-1').onclick = f1;

function f1() {
    d1.push(document.querySelector('.i-1').value);
    showArr('out-1');
}


// Task 2
// Напишите функцию f2, которая применяет метод pop к массиву d1, а затем выводит его (showArr) в .out-2
document.querySelector('.b-2').onclick = f2;

function f2() {
    d1.pop();
    showArr('out-2');
}

// Task 3
// Напишите функцию f3, которая применяет метод shift к массиву d1, а затем выводит его (showArr) в .out-3
document.querySelector('.b-3').onclick = f3;

function f3() {
    d1.shift();
    showArr('out-3');
}

// Task 4
// Напишите функцию f4, которая применяет метод push к массиву d1, данные для массива берите из i-4, а затем выводит его (showArr) в .out-4
document.querySelector('.b-4').onclick = f4;

function f4() {
    d1.push(document.querySelector('.i-4').value);
    showArr('out-4');
}

// Task 5
// Напишите функцию f5, которая применяет метод unshift к массиву d1, данные для массива берите из i-5, а затем выводит его (showArr) в .out-5
document.querySelector('.b-5').onclick = f5;

function f5() {
    d1.unshift(document.querySelector('.i-5').value);
    showArr('out-5');
}

// Task 6
// Напишите функцию f6, которая эмулирует работу метода push применительно к массиву d6. Т.е. добавляет значение из i-6 как последний элемент в массив d6. Эмуляция, значит, что мы получим результат аналогичный методу push без применения его. Эмуляция заключается в присвоение значения как последнего элемента массива. Как вычислить индекс последнего элемента используя длину массива - вы знаете из предыдущего урока. Повторный запуск функции должен также приводить к добавлению элемента.
// d6 = ['test', 5, 12];

d6 = ['test', 5, 12];
document.querySelector('.b-6').onclick = f6;
function f6() {
    let i6 = document.querySelector('.i-6').value;
    let arrLength = d6.length;
    d6[arrLength] = i6;
    showArr('out-6', d6);
    return d6.length;
}


// Task 7. 
// Напишите функцию f7, которая эмулирует метод pop, т.е. удаляет последний элемент массива d7. Эмулировать - получать результат аналогичный pop, но без применения pop. Функция может быть вызвана много раз, при этом каждый раз должен удаляться последний элемент d7.
// d7 = ['china', 'india', 'brazil', 'japan', 'egypt'];

d7 = ['china', 'india', 'brazil', 'japan', 'egypt'];
document.querySelector('.b-7').onclick = f7;


function f7() {
    let val = d7.splice(d7.length - 1, 1);
    showArr('out-7', d7);
    return val[0];
}


// Task 8
// Напишите функцию f8, которая эмулирует работу метода unShift - добавляем значение из i-8 в начало массива d8.
// d8 = [2,'4', 12, 67, 'hello'];
d8 = [2, '4', 12, 67, 'hello'];
document.querySelector('.b-8').onclick = f8;

function f8() {
    let val = document.querySelector('.i-8').value;
    console.log(val);
    d8.splice(0, 0, val);
    showArr('out-8', d8);
    return d8.length;
}


// Task 9
// Напишите функцию f9, которая эмулирует работу метода shift - на примере массива d9.
d9 = [100, 200, 300, 400, 700, 121];
document.querySelector('.b-9').onclick = f9;

function f9() {
    let val = d9.splice(0, 1);
    showArr('out-9', d9);
    return val[0];
}

// Task 10
// Создайте массив arr10, примените к массиву метод reverse ( читать за метод reverse). После применения reverse, массив arr10 выподится в div.out-10.
let arr10 = [2, 4, 6, 8, 10, 'hello'];
document.querySelector('.b-10').onclick = f10;

function f10() {
    showArr('out-10', arr10.reverse());
}


// Task 11
// Создайте input.u-11__input и кнопку button.u-11__button. Объявите массив arr11. По нажатию на кнопку, читайте содержимое input.u-11__input в переменную u11. Потом примените к массиву arr11 метод indexOf ( читать за метод indexOf). Результат применения indexOf выводите на страницу в div.out-11. Последовательно проверьте программу вводя в input числа 1, 3, 5, 12.
let arr11 = [0, 2, 3, 7, 8, 5, 11];
document.querySelector('.b-11').onclick = f11;

function f11() {
    let val = +document.querySelector('.i-11').value;
    showArr('out-11', arr11.indexOf(val, 0));
}

// Task 12
// Напишите функцию funcIndexOf, которая эмулирует работу метода indexOf. Программа должна:
//     1. читает содержимое input в переменную
//     2. Запускать цикл по массиву и сравнивать каждый элемент массива с введенным.
//     3. Если совпадение есть - останавливать цикл и выводить номер индекса на котором произошло совпадение.
//     4. Если совпадения нет выводить -1.

let arr12 = [0, 2, 3, 7, 8, 5, 11, 'hello'];
document.querySelector('.b-12').onclick = f12;

function f12() {
    let val = document.querySelector('.i-12').value;
    for (let i = 0; i < arr12.length; i++) {
        if (val == arr12[i].toString()) {
            showArr('out-12', i);
            return i;
        }
    }
    showArr('out-12', -1);
    return -1;
}

// Task 13. 
// Напишите функцию funcReverse, которая эмулирует работу метода reverse. Программа должна:
// 1. Создать новый пустой массив
// 2. Перебирать старый массив с конца(массив создайте сами)
// 3. По очереди по элементу присвоить значения в новый массив.
// 4. Вывести новый массив.

let arr13 = ['china', 'india', 'brazil', 'japan', 'egypt'];
document.querySelector('.b-13').onclick = f13;

function f13() {
    let arr13_reverse = [];
    let index = 0;
    for (let i = arr13.length - 1; i >= 0; i--) {
        arr13_reverse[index] = arr13[i];
        index++;
    }
    showArr('out-13', arr13_reverse);
}


// Task 14. 
// Создайте инпут, куда пользователь может ввести число элементов в массиве.Создайте функцию, которая прочитает введенное число и создаст массив такой длины, причем каждый элемент - это случайное число от 0 до 100. Массивы выведите на страницу.

document.querySelector('.b-14').onclick = f14;

function f14() {
    let indexVal = +document.querySelector('.i-14').value;
    showArr('out-14', randomArr(indexVal));
}


// Task 15. 
// Создайте массив arr15.Напишите функцию, которая создаст новый массив, в который входят только четные элементы массива arr15(элементы с четным индексом).Выведите на экран

let arr15 = randomArr(30);
showArr('out-15', arr15);
document.querySelector('.b-15').onclick = f15;

function f15() {
    let arr15_even = [];
    let index = 0;
    for (let i = 0; i < arr15.length; i += 2) {
        arr15_even[index] = arr15[i];
        index++;

    }
    showArr('out-15_1', arr15_even);
}


// Task 16. 
// Создайте button.u -16__button.Объявите массив arr16_1 и arr16_2.По нажатию на кнопку примените к массивам метод concat(читать за метод concat).Результат применения concat выводите на страницу в div.out - 16.
let arr16_1 = [3, 5, 7];
let arr16_2 = [2, 4, 6];
document.querySelector('.b-16').onclick = () => {
    showArr('out-16', arr16_1.concat(arr16_2));
}

// Task 17. 
// Напишите функцию funcConcat, которая эмулирует работу метода concat.Программа должна:
// 1. Перебирает второй массив и его элементы добавляет в первый массив.
// 2. Выводит массив на страницу.

document.querySelector('.b-17').onclick = funcConcat;
document.querySelector('.out-17_1').innerHTML = arr17_1 = randomArr(5);
document.querySelector('.out-17_2').innerHTML = arr17_2 = randomArr(7);

function funcConcat() {
    for (let i = 0; i < arr17_2.length; i++) {
        arr17_1.push(arr17_2[i]);
    }
    showArr('out-17', arr17_1);
}


// Task 18. 
// Создайте button.u -18__button и input.u -18__input.Объявите массив arr18.По нажатию на кнопку примените к массивам метод includes, который проверяет есть ли в массиве значение введенное в input. (читать за метод includes).Результат применения includes выводите на страницу в div.out - 18.

let arr18 = [3, 5, 7, 11, 12, 13, 14];
document.querySelector('.b-18').onclick = () => {
    let val = +document.querySelector('.i-18').value;
    document.querySelector('.out-18').innerHTML = arr18.includes(val);
}

// Task 19. 
// Напишите функцию funcIncludes, которая эмулирует работу метода includes.Программа должна:
// 1. Перебирает второй массив и сравнивать если введенный элемент совпал с текущим - прекращать работу цикла и выводить true.
// 2. Если совпадений нет - false.

document.querySelector('.out-19_1').innerHTML = arr19 = randomArr(10);
document.querySelector('.b-19').onclick = f19;

function f19() {
    let val = +document.querySelector('.i-19').value;
    for (let i = 0; i < arr19.length; i++) {
        if (val == arr19[i]) {
            document.querySelector('.out-19').innerHTML = true;
            return true;
        }
    }
    document.querySelector('.out-19').innerHTML = false;
    return false;
}

// Task 20
// Объявите массив arr20.Создайте кнопку, по нажатию которую к массиву применяется метод join. Результат выведите на страницу.
// arr20 = ['china', 'india', 'brazil', 'japan', 'egypt'];

let arr20 = ['china', 'india', 'brazil', 'japan', 'egypt'];
document.querySelector('.b-20').onclick = f20;

function f20() {
    showArr('out-20', arr20.join('-'));
}






////////////////////////////showArr()////////////////////////////
function showArr(out, arr = d1) {
    document.querySelector(`.${out}`).innerHTML = arr;
}

////////////////////////////randomArr()////////////////////////////
function randomArr(indexVal) {
    let arr = [];
    for (let i = 0; i < indexVal; i++) {
        arr[i] = Math.floor(Math.random() * 101);
    }
    return arr;
}

