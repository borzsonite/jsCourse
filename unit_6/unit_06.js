//  Task 1
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// ***_***_***_
// </pre>
// <p>где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.</p>

function t1() {
    let out = document.querySelector('.out-1');
    for (let i = 0; i < 3; i++) {
        for (let k = 0; k < 3; k++) {
            out.innerHTML += '*';
        }
        out.innerHTML += '_';
    }
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифры и перенос строки br, , второй звездочки, знак подчеркивания и знак переноса.</p>
function t2() {
    let out = document.querySelector('.out-2');
    for (let i = 1; i < 4; i++) {
        out.innerHTML += `${i}<br>`
        for (let k = 0; k < 3; k++) {
            out.innerHTML += '*_';
        }
        out.innerHTML += '<br>'
    }
}
document.querySelector('.b-2').onclick = t2;


//  Task 3
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит перенос строки br,  внутренний -  звездочки, знак подчеркивания.</p>
function t3() {
    console.log(5);
    let out = document.querySelector('.out-3');
    for (let i = 0; i < 3; i++) {
        for (let k = 0; k < 3; k++) {
            out.innerHTML += '*_';
        }
        out.innerHTML += '<br>'
    }
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 0_10_1_9_2_8_3_7_4_6_5_5_6_4_7_3_8_2_9_1_10_0_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит числа на четных позициях (от 0 до 10) внутренний цикл  - числа на нечетных позициях  (от 10 до 0).</p>
function t4() {
    let out = document.querySelector('.out-4');
    let count = 10
    for (let i = 0; i <= 10; i++) {
        out.innerHTML += `${i}_`
        for (let k = 10; k >= 0; k--) {
            out.innerHTML += `${count}_`;
            count--;
            break;
        }
    }
}
document.querySelector('.b-4').onclick = t4;


//  Task 5
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 101010
// 101010
// 101010
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1.</p>
function t5() {
    let out = document.querySelector('.out-5');
    for (let i = 0; i < 3; i++) {
        for (let k = 0; k < 6; k++) {
            if (k % 2 == 0) {
                out.innerHTML += '1';
            }
            else out.innerHTML += '0';
        }
        out.innerHTML += '<br>';
    }
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 10x01x
// 10x01x
// 10x01x
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1 либо х.</p>
function t6() {
    let out = document.querySelector('.out-6');
    for (let i = 0; i < 3; i++) {
        for (let k = 1; k <= 6; k++) {
            if (k % 3 == 0) {
                out.innerHTML += 'x';
            }
            else if (k % 2 == 0) {
                out.innerHTML += '0';
            }
            else out.innerHTML += '1';
        }
        out.innerHTML += '<br>';
    }
}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *
// **
// ***
// ****
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл запускается от нуля до i и рисует звездочку.</p>
function t7() {
    let out = document.querySelector('.out-7');
    for (let i = 0; i < 4; i++) {
        for (let k = 0; k <= i; k++) {
            out.innerHTML += '*';
        }
        out.innerHTML += '<br>';
    }
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *****
// ****
// ***
// **
// *
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует звездочки. </p>
function t8() {
    let out = document.querySelector('.out-8');
    for (let i = 4; i >= 0; i--) {
        for (let k = 0; k <= i; k++) {
            out.innerHTML += '*';
        }
        out.innerHTML += '<br>';
    }
}
document.querySelector('.b-8').onclick = t8;


//  Task 9
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует цифры</p>
function t9() {
    let out = document.querySelector('.out-9');
    for (let i = 0; i < 7; i++) {
        for (let k = 1; k < i; k++) {
            out.innerHTML += ` ${k} `;
        }
        out.innerHTML += '<br>';
    }
}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 01 02 03 04 05 06 07 08 09 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50
// </pre>
// <p>Внешний цикл выводит перенос строки br и запускается от 0 до 6.</p>
// <p>Вложенный цикл рисует цифры от 0 до 9. Обратите внимание, что первый ряд - есть ведущий нуль. Здесь все просто - проверили, если число меньше 10 - то конкатенируем нуль.</p>
function t10() {
    let out = document.querySelector('.out-10');
    for (let i = 0; i < 5; i++) {
        for (let k = 1; k <= 10; k++) {
            out.innerHTML += `${i}${k} `;
            if (k == 9) {
                out.innerHTML += `${i + 1}0`;
                break;
            }
        }
        out.innerHTML += '<br>';
    }
}
document.querySelector('.b-10').onclick = t10;


////////////// Задачи на прокачку //////////////

function t11() {
    let out = document.querySelector('.out-11');
    for (let i = 0; i < 3; i++) {
        for (let k = 0; k < 4; k++) {
            out.innerHTML += '*';
        }
        out.innerHTML += '<br>';
    }
}
document.querySelector('.b-11').onclick = t11;


function t12() {
    let out = document.querySelector('.out-12');
    for (let i = 0; i < 3; i++) {
        for (let k = 0; k < 6; k++) {
            if (k % 2 == 0) {
                out.innerHTML += '1';
            }
            else out.innerHTML += '0';
        }
        out.innerHTML += '<br>';
    }
}
document.querySelector('.b-12').onclick = t12;

function t13() {
    let out = document.querySelector('.out-13');
    for (let i = 0; i < 3; i++) {
        for (let k = 1; k <= 6; k++) {
            if (k % 3 == 0) {
                out.innerHTML += 'x';
            }
            else if (k % 2 == 0) {
                out.innerHTML += '0';
            }
            else out.innerHTML += '1';
        }
        out.innerHTML += '<br>';
    }
}
document.querySelector('.b-13').onclick = t13;


function t14() {
    let out = document.querySelector('.out-14');
    for (let i = 0; i < 3; i++) {
        for (let k = 0; k <= i; k++) {
            out.innerHTML += '*';
        }
        out.innerHTML += '<br>';
    }
}
document.querySelector('.b-14').onclick = t14;

function t15() {
    let out = document.querySelector('.out-15');
    for (let i = 4; i >= 0; i--) {
        for (let k = 0; k <= i; k++) {
            out.innerHTML += '*';
        }
        out.innerHTML += '<br>';
    }
}
document.querySelector('.b-15').onclick = t15;

function t16() {
    let out = document.querySelector('.out-16');
    out.style.fontSize = '21px';
    for (let i = 3; i > 0; i--) {
        for (let k = 0; k < i; k++) {
            out.innerHTML += "\u00A0\u00A0";
        }
        out.innerHTML += '*****<br>';
    }
}
document.querySelector('.b-16').onclick = t16;

function t17() {
    let out = document.querySelector('.out-17');
    let count = 0;
    for (let i = 0; i < 7; i++) {
        if (i < 3) {
            count++;
        }
        else if (i >= 3) {
            count--;
        }
        for (let k = 0; k < count; k++) {
            out.innerHTML += '*';
        }
        out.innerHTML += '<br>';
    }
}
document.querySelector('.b-17').onclick = t17;

function t18() {
    let out = document.querySelector('.out-18');
    for (let i = 0; i < 5; i++) {
        for (let k = 0; k < 6; k++) {
            if (i == 0 || i == 4 || k == 0 || k == 5) {
                out.innerHTML += ' * '
            }

            else out.innerHTML += '\u00A0\u00A0';

        }
        out.innerHTML += '<br>'
    }
}
document.querySelector('.b-18').onclick = t18;

function t19() {
    let out = document.querySelector('.out-19');
    out.innerHTML = '';
    let input = document.querySelector('.in-19');
    for (let i = 0; i < 5; i++) {
        for (let k = 0; k < 6; k++) {
            if (i == 0 || i == 4 || k == 0 || k == 5) {
                out.innerHTML += input.value;
            }

            else out.innerHTML += '\u00A0\u00A0';

        }
        out.innerHTML += '<br>'
    }
}
document.querySelector('.b-19').onclick = t19;
t19();

function t20() {
    let out = document.querySelector('.out-20');
    for (let i = 6; i <= 7; i++) {
        for (let k = 1; k <= 10; k++) {
            out.innerHTML += i * k + '\u00A0\u00A0';
        }
        out.innerHTML += '<br>';
    }
}
document.querySelector('.b-20').onclick = t20;

function t21() {
    let out = document.querySelector('.out-21');
    for (let i = 0; i < 7; i++) {
        for (let k = 1; k < i; k++) {
            out.innerHTML += `${k}\u00A0\u00A0`;
        }
        out.innerHTML += '<br>';
    }
}
document.querySelector('.b-21').onclick = t21;

function t22() {
    let out = document.querySelector('.out-22');
    for (let i = 0; i < 5; i++) {
        for (let k = 1; k <= 10; k++) {
            out.innerHTML += `${i}${k} `;
            if (k == 9) {
                out.innerHTML += `${i + 1}0`;
                break;
            }
        }
        out.innerHTML += '<br>';
    }
}
document.querySelector('.b-22').onclick = t22;


function t23() {
    let out = document.querySelector('.out-23');
    for (let i = 5; i > 0; i--) {
        for (let k = i; k > 0; k--) {
            out.innerHTML += `${k}\u00A0\u00A0`;
        }
        out.innerHTML += '<br>';
    }
}
document.querySelector('.b-23').onclick = t23;

function t24() {
    let out = document.querySelector('.out-24');
    let count = 0;
    for (let i = 0; i < 5; i++) {
        count = i + 1;
        for (let k = 0; k <= i; k++) {
            out.innerHTML += `${count}\u00A0\u00A0`;
            count--;
        }
        out.innerHTML += '<br>';
    }
}
document.querySelector('.b-24').onclick = t24;

function t25() {
    let out = document.querySelector('.out-25');
    let count = 0;
    for (let i = 0; i < 5; i++) {
        for (let k = 5; k > 0; k--) {
            if (k - i > 1) {
                out.innerHTML += '\u00A0x\u00A0';
            }
            else {
                out.innerHTML += `${k}\u00A0\u00A0`;
            }
        }
        out.innerHTML += '<br>';
    }
}
document.querySelector('.b-25').onclick = t25;

function t26() {
    let out = document.querySelector('.out-26');
    for (let i = 0; i <= 5; i++) {
        for (let k = 1; k <= i; k++) {
            out.innerHTML += `${i}\u00A0\u00A0`;
        }
        out.innerHTML += '<br>';
    }
}
document.querySelector('.b-26').onclick = t26;

function t27() {
    let out = document.querySelector('.out-27');
    for (let i = 0; i < 5; i++) {
        for (let k = 0; k <= i; k++) {
            out.innerHTML += `${5 - i}\u00A0\u00A0`;
        }
        out.innerHTML += '<br>';
    }
}
document.querySelector('.b-27').onclick = t27;

function t28() {
    let out = document.querySelector('.out-28');
    for (let i = 0; i < 5; i++) {
        for (let k = 0; k <= i; k++) {
            if (i % 2 == 0) {
                out.innerHTML += `${5 - i}\u00A0\u00A0`;
            }
            else {
                out.innerHTML += ' x ';
            }

        }
        out.innerHTML += '<br>';
    }
}
document.querySelector('.b-28').onclick = t28;

function t29() {
    out = document.querySelector('.out-29');
    for (let i = 5; i <= 10; i += 2) {
        for (let k = 0; k < i; k++) {
            if (i == 5 && k == 0) {
                out.innerHTML += '\u00A0\u00A0*';
            }
            else if (i == 7 && k == 0) {
                out.innerHTML += '\u00A0*';
            }
            else {
                out.innerHTML += '*';
            }
        }
        out.innerHTML += '<br>';
    }
}
document.querySelector('.b-29').onclick = t29;

function t30() {
    let out = document.querySelector('.out-30');
    let count = 0;
    for (let i = 0; i < 7; i++) {
        if (i < 3) {
            count++;
        }
        else if (i >= 3) {
            count--;
        }
        for (let k = 0; k < count; k++) {
            if (i == 0 || i == 4) {
                out.innerHTML += '\u00A0\u00A0**';
            }

            else if (i == 1 && k == 0 || i == 3 && k == 0) {
                out.innerHTML += '\u00A0**';
            }
            else {
                out.innerHTML += '**';
            }
        }
        out.innerHTML += '<br>';
    }
}
document.querySelector('.b-30').onclick = t30;
