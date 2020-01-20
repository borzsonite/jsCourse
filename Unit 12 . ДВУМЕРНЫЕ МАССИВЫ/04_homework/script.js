// Task 1. 
// Создайте массив a.Выведите его на страницу.Элементы внутри вложенных массивов разделяйте пробелом, между вложенными массиваями - перенос строки!

const a = [
    [1, 2, 3],
    ['a', 'b', 'c'],
    [4, 5, 6],
    ['d', 'e', 'f'],
    [7, 8, 9],
];

document.querySelector('.b-1').onclick = f1;

function f1() {
    let out = '';
    for (let i = 0; i < a.length; i++) {
        for (let k = 0; k < a[i].length; k++) {
            out += a[i][k] + ' ';
        }
        out += '<br>';
    }
    showResult('out-1', out)
}

// Task 2. 
// Выведите на страницу символ e из массива a.
document.querySelector('.b-2').onclick = () => {
    showResult('out-2', a[3][1]);
}

// Task 3. 
// Выведите на страницу содержимое третьего вложенного массива в массиве a.

document.querySelector('.b-3').onclick = () => {
    showResult('out-3', a[2]);
}

// Task 4. 
// Выведите на страницу только первые элементы вложенных массивов массива a.
document.querySelector('.b-4').onclick = () => {
    out = '';
    for (let i = 0; i < a.length; i++) {
        out += a[i][0] + ' ';
    }
    showResult('out-4', out);
}


// Task 5. 
// Выведите на страницу только четные вложенные массивы массива a.
document.querySelector('.b-5').onclick = () => {
    let out = '';
    for (let i = 0; i < a.length; i++) {
        for (let k = 0; k < a[i].length; k++) {
            if (a[i][k] % 2 == 0) out += a[i][k] + ' ';
            showResult('out-5', out);
        }
    }
}

// Task 6.
// Выведите на страницу только числа из массива a.
document.querySelector('.b-6').onclick = () => {
    let out = '';
    for (let i = 0; i < a.length; i++) {
        for (let k = 0; k < a[i].length; k++) {
            if (!isNaN(a[i][k])) {
                out += a[i][k] + ' ';
            }
        }
    }
    showResult('out-6', out)
}

// Task 7.
// Выведите на страницу длины вложенных массивов в массив a.
document.querySelector('.b-7').onclick = () => {
    let out = '';
    for (let i = 0; i < a.length; i++) {
        out += a[i].length + ' ';
    }
    showResult('out-7', out);
}

// Task 8.
// Выведите на страницу элементы массива a в обратном порядке, т.е.
document.querySelector('.b-8').onclick = () => {
    let out = '';
    for (let i = a.length - 1; i >= 0; i--) {
        for (let k = a[i].length - 1; k >= 0; k--) {
            out += a[i][k] + ' ';
        }
    }
    showResult('out-8', out);
}

// Task 9.
// Выведите на страницу элементы массива a, причем вложенные массивы должны выводиться в обратном порядке:
document.querySelector('.b-9').onclick = () => {
    let out = '';
    for (let i = 0; i < a.length; i++) {
        for (let k = a[i].length - 1; k >= 0; k--) {
            out += a[i][k] + ' ';
        }
        out += '<br>';
    }
    showResult('out-9', out);
}

// Task 10.
// Создайте массив шахматную доску.Белые - 0, черные - 1. Выведите на страницу.
document.querySelector('.b-10').onclick = () => {
    let board = [];
    for (let i = 0; i < 8; i++) {
        board[i] = []
        for (let k = 0; k < 8; k++) {
            if ((i + k) % 2 == 0) {
                board[i][k] = '0';
            }
            else if ((i + k) % 2 != 0) {
                board[i][k] = '1';
            }
        }
    }
    let out = '';
    for (let i = 0; i < 8; i++) {
        for (let k = 0; k < 8; k++) {
            out += board[k][i] + ' ';
        }
        out += '<br>'
    }
    document.querySelector('.out-10').innerHTML = out;
}

// Task 11. 
// Создайте массив шахматную доску.Белые - 0, черные - 1. Напишите функцию,которая выводит данный массив в виде шахматной доски - блоки div в нужном порядке, закрашенные цветом.
document.querySelector('.b-11').onclick = () => {
    let board = [];
    for (let i = 0; i < 8; i++) {
        board[i] = []
        for (let k = 0; k < 8; k++) {
            if ((i + k) % 2 == 0) {
                board[i][k] = '0';
            }
            else if ((i + k) % 2 != 0) {
                board[i][k] = '1';
            }
        }
    }

    for (let i = 0; i < 8; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        document.querySelector('.out-11').appendChild(row);
        for (let k = 0; k < 8; k++) {
            let cell = document.createElement('div');
            document.querySelectorAll('.row')[i].appendChild(cell)
            if (board[i][k] == 0) {
                cell.classList.add('black');
            }
            else if (board[i][k] == 1) {
                cell.classList.add('white');
            }
        }
    }
}

// Task 12
// Создайте массив, который подходит под следующие условия:
// b[0][1] == 4;
// b[3][2] == 5
let b = [];
b[0] = [, 4];
b[3] = [, , 5];
console.log('-----Task 12-----');
console.log(b[0][1]);
console.log(b[3][2])

// Task 13
// Создайте массив, который подходит под следующие условия:
// c[0][1] == 4;
// c[2] == 5
let c = [];
c[0] = [, 4]
c[2] = 5;
console.log('-----Task 13-----');
console.log(c[0][1]);
console.log(c[2]);

// Task 14
// Создайте массив, который подходит под следующие условия:
// d[0][1] == 4;
// d[2][3] == 5
// d[6] = [4, 5]
let d = [];
d[0] = [, 4];
d[2] = [, , , 5];
d[6] = [4, 5];
console.log('-----Task 14-----');
console.log(d[0][1]);
console.log(d[2][3]);
console.log(d[6]);


// Task 15
// Создайте массив, который подходит под следующие условия:
// e[0][1] == 4;
// e[2][3] == 5
// e[6][0][1] = 6;
let e = [];
e[0] = [, 4];
e[2] = [, , , 5];
e[6] = [[, 6]];

console.log('-----Task 15-----');
console.log(e[0][1]);
console.log(e[2][3]);
console.log(e[6][0][1]);

// Task 16
// Создайте массив, который подходит под следующие условия:
// f[0][1][3] = 4;
// f[2][1][1] = 5
// f[6][0][1] = 6;
let f = []
f[0] = []; // двумерный;
f[2] = []
f[6] = [];
f[0][1] = []; // трехмерный;
f[2][1] = [];
f[6][0] = [];
f[0][1] = [, , , 4];
f[2][1][1] = 5;
f[6][0][1] = 6
console.log('-----Task 16-----');
console.log(f[0][1][3]);
console.log(f[2][1][1]);
console.log(f[6][0][1]);


// Task 17
// Создайте массив, который подходит под следующие условия:
// g[0][1][3] == 4;
// g[2][1][3] == 5
// g[6][0][1] = 6;
// g[3] == g[5];
let g = [];
g[0] = [];
g[2] = [];
g[6] = [];
g[3] = [];
g[5] = [];
g[0][1] = [];
g[2][1] = [];
g[6][0] = [];
g[0][1][3] = 4;
g[2][1][3] = 5;
g[6][0][1] = 6;
console.log('-----Task 17-----');
console.log(g[0][1][3]);
console.log(g[2][1][3]);
console.log(g[6][0][1]);
console.log(g[3]);

// Task 18.
// Выведите на страницу сумму элементов массива a(только чисел).
let sum = 0;
for (let i = 0; i < a.length; i++) {
    for (let k = 0; k < a[i].length; k++) {
        if (!isNaN(a[i][k])) {
            sum += a[i][k];
        }
    }
}
showResult('out-18', sum);

// Task 19.
// Создайте массив, который эмулирует доску для крестиков - ноликов, напишите все возможные выиграшные комбинации, т.е.a[0][0], a[0][1], a[0][2] - занята первая

let a1 = [];
a1[0] = [];
a1[1] = [];
a1[2] = [];
//горизонтал
// a1[0][0], a1[0][1], a1[0][2]
// a1[1][0], a1[1][1], a1[1][2]
// a1[2][0], a1[2][1], a1[2][2]
// вертикали
// a1[0][0], a1[1][0], a1[2][0]
// a1[0][1], a1[1][1], a1[1][2]
// a1[2][0], a1[2][1], a1[2][2]
//диагонали
// a1[0][0], a1[1][1], a1[2][2]
// a1[2][0], a1[1][1], a1[0][2]





////////////////////////showResult()////////////////////////
function showResult(out, arr) {
    document.querySelector(`.${out}`).innerHTML = arr;
}

// Цель Т и Траумель С