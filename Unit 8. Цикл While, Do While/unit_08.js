//  Task 1
// Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида:
//     1 2 3 4 5 6 7 8 9 ... 49 50
// от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла.


function t1() {
    let out = '';
    let count = 1;
    while (count <= 50) {
        out += count + ' ';
        count++;
    }
    document.querySelector('.out-1').innerHTML = out;
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// Кнопка b-2 запускает функцию t2. Функция должна выводить в out-2 строку вида:
//     2 4 6 ... 122
// от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла  while.

function t2() {
    let out = '';
    let count = 2;
    while (count <= 122) {
        out += count + ' ';
        count = count + 2;
    }
    document.querySelector('.out-2').innerHTML = out;
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// Кнопка b-3 запускает функцию t3. Функция должна выводить в out-3 строку вида:
//     25 24 23 22 . . 7
// от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается с помощью цикла  while.

function t3() {
    let count = 25;
    let out = '';
    while (count >= 7) {
        out += count + ' ';
        count--;
    }
    document.querySelector('.out-3').innerHTML = out;
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// Кнопка b-4 запускает функцию t4. Функция должна выводить в out-4 строку вида:
//     77_74_71_68_65_62_ ... _38_35_
// от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла  while.


function t4() {
    let count = 77;
    let out = '';
    while (count >= 35) {
        out += count + '_';
        count = count - 2;
    }
    document.querySelector('.out-4').innerHTML = out;
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// Кнопка b-5 запускает функцию t5. Функция должна выводить в out-5 строку вида:
//     1_*2_**3_*4_** ... 17_*
// от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и звездочка (если число нечетное, и две звездочки если четное). Задача решается с помощью цикла  while.

function t5() {
    let count = 1;
    let out = '';
    while (count <= 17) {
        out += count + isOdd(count);
        count++;
    }
    function isOdd(num) {
        return num % 2 != 0 ? '_*' : '_**';
    }
    document.querySelector('.out-5').innerHTML = out;
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// Кнопка b-6 запускает функцию t6. Функция должна выводить в out-6 строку вида:
// ******
// ******
// ******
// Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек без пробелов и символ переноса строки br.
// Количество строк (итераций, повторений) цикла  while вводит пользователь в i-6.

function t6() {
    let out = '';
    let countInner = 0;
    let countOuter = 0;
    let linesNumber = +document.querySelector('.i-6').value;
    while (countOuter < linesNumber) {
        while (countInner < 6) {
            out += '*';
            countInner++;
        }
        out += '<br>';
        countOuter++;
        countInner = 0;
    }

    document.querySelector('.out-6').innerHTML = out;
}
document.querySelector('.b-6').onclick = t6;


//  Task 7
// Есть input i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт).
// По нажатию кнопки b-7 должна запускаться функция f7, которая выводит в out-7 числа от введенного пользователем до нуля включительно.
// Разделитель пробел. Если пользователь ввел 4 и нажал кнопку, мы получим:
//     4 3 2 1
// Задача решается с помощью цикла  while.

function t7() {
    let count = 0;
    let out = '';
    let num = +document.querySelector('.i-7').value;
    while (num >= 0) {
        out += num + ' ';
        num--;
    }
    document.querySelector('.out-7').innerHTML = out;
}
document.querySelector('.b-7').onclick = t7;


//  Task 8
// Есть input i-81 и i-82 куда пользователь может ввести числа больше нуля (проверок не делаем, принимаем как факт).
// Считаем, что второе число всегда больше первого.
// По нажатию кнопки b-8  должна запускаться функция f8, которая выводит в out-8 числа от первого введенного до второго включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// Задача решается с помощью цикла  while.

function t8() {
    let out = '';
    let min = +document.querySelector('.i-81').value;
    let max = +document.querySelector('.i-82').value;
    while (min <= max) {
        out += min + ' ';
        min++;

    }
    document.querySelector('.out-8').innerHTML = out;
}
document.querySelector('.b-8').onclick = t8;


//  Task 9
// Есть input i-91 и i-92 куда пользователь может ввести числа.
// По нажатию кнопки b-9 должна запускаться функция f9, которая выводит в out-9 числа от меньшего введенного до большего включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// если ввел 8 и 6, то получим
// 6 7 8
// Задача решается с помощью цикла. Подсказка - вначале делаем проверку, а потом запускаем цикл  while.

function t9() {
    let num1 = +document.querySelector('.i-91').value;
    let num2 = +document.querySelector('.i-92').value;
    return num1 < num2 ? isLess(num1, num2) : isLess(num2, num1);
}
function isLess(num1, num2) {
    let out = '';
    while (num1 <= num2) {
        out += num1 + ' ';
        num1++;
    }
    document.querySelector('.out-9').innerHTML = out;
}
document.querySelector('.b-9').onclick = t9;


//  Task 10
// Кнопка b-10 запускает функцию t10. Функция должна выводить в out-10 четные годы от 1950 до 2000 включительно.
// Разделитель - пробел. Задача решается через цикл, а четность - через шаг (равный 2).

function t10() {
    let out = '';
    let year = 1950;
    while (year <= 2000) {
        out += year + ' ';
        year = year + 2;
    }
    document.querySelector('.out-10').innerHTML = out;
}
document.querySelector('.b-10').onclick = t10;

//  Task 11
// Кнопка b-11 запускает функцию t11.  Функция должна:
//     получить все div.div-11
// перебрать их с помощью цикла  while. Обращение к div выглядит так elem[i]
// вывести в out-11 содержимое каждого блока. Разделитель - пробел.
//     В результате должно получиться так:
//     one 3 4 two


function t11() {
    let elem = document.querySelectorAll('.div-11');
    let i = 0;
    let out = '';
    while (elem[i]) {
        out += elem[i].innerHTML + ' ';
        i++;
    }
    document.querySelector('.out-11').innerHTML = out;
}
document.querySelector('.b-11').onclick = t11;

//  Task 12
// Кнопка b-12 запускает функцию t12.  Функция должна:
//     получить все div.div-12
// перебрать их с помощью цикла  while. Обращение к div выглядит так elem[i]
// применить к каждому elem[i].style.background = ‘orange’


function t12() {
    let elem = document.querySelectorAll('.div-12');
    let out = '';
    let i = 0;
    while (elem[i]) {
        elem[i].style.background = 'orange';
        i++;
    }
}
document.querySelector('.b-12').onclick = t12;

//  Task 13
// Кнопка b-13 запускает функцию t13.  Функция должна:
//     получить все input.i-13
// перебрать их с помощью цикла  while. Обращение к элементу выглядит так elem[i]
// применить к каждому elem[i].value, причем к value первого должно равняться 1, второго - 2, третьего - 3...

function t13() {
    let elem = document.querySelectorAll('.i-13');
    let i = 0;
    while (elem[i]) {
        elem[i].value = i + 1;
        i++;
    }
}

document.querySelector('.b-13').onclick = t13;

//  Task 14
// Кнопка b-14 запускает функцию t14  Функция должна:
//     получить все input.i-14
// перебрать их с помощью цикла  while. Обращение к элементу выглядит так elem[i]
// вывести в out-14 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked.


function t14() {
    let elem = document.querySelectorAll('.i-14');
    let i = 0;
    while (elem[i]) {
        console.log(elem[i].checked);
        i++;
    }
}

document.querySelector('.b-14').onclick = t14;

//  Task 15
// Кнопка b-15 запускает функцию t15  Функция должна выводить следующую последовательность в out-15:
// 10 0 9 1 8 2 7 3 6 4 5 5 4 6 3 7 2 8 1 9 0 10
// Для вывода использовать цикл  while. Разделитель пробел.

function t15() {
    let out = '';
    let i = 0;
    let j = 10;
    while (i <= 10 && j >= 0) {
        out += `${j} ${i} `;
        i++;
        j--;
    }
    document.querySelector('.out-15').innerHTML = out;
}
document.querySelector('.b-15').onclick = t15;

//Task 16
//Создайте функцию func_1, которая возращает строку от нуля до 100 в формате 0 1 2.. 100(после 100 тоже есть пробел) задание сделать с помощью while

function t16() {
    let count = 0;
    let out = '';
    while (count <= 100) {
        out += count + ' ';
        count++;
    }
    document.querySelector('.out-16').innerHTML = out;
}

document.querySelector('.b-16').onclick = t16;

// Task 17
// Создайте функцию func_2, которая принимает от пользователя 2 параметра числа и возращает строку от первого числа до второго с шагом 1. Разделитель пробел.Пример: пользователь ввел 5 и 7 5 6 7 считаем что второе число всегда больше первого.Решаем с помощью while

function t17() {
    let val1 = +document.querySelector('input[placeholder="Введите число 1"]').value;
    let val2 = +document.querySelector('input[placeholder="Введите число 2"]').value;
    let out = '';
    while (val1 <= val2) {
        out += `${val1} `;
        val1++;
    }
    document.querySelector('.out-17').innerHTML = out;
}

document.querySelector('.b-17').onclick = t17;

// Task 18
// Создайте функцию func_3, которая принимает от пользователя 2 параметра числа и возращает строку от большего числа меньшего с шагом 1. Разделитель пробел.Пример: пользователь ввел 5 и 7 7 6 5 Решаем с помощью while

function t18() {
    let out = '';
    let val1 = +document.querySelector('input[placeholder="Введите число 2.1"]').value;
    let val2 = +document.querySelector('input[placeholder="Введите число 2.2"]').value;
    while (val2 >= val1) {
        out += `${val2} `;
        val2--;
    }
    document.querySelector('.out-18').innerHTML = out;
}

document.querySelector('.b-18').onclick = t18;

