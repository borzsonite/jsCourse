// Task 1
// Создайте массив содержащий строки, числа, булевы значения. Выведите его в консоль.
let arr1 = ['Task 1', 'С новым годом!', 2020, true, false];
console.log(arr1);


// Task 2
// Создайте массив содержащий строки, числа, булевы значения. Выведите его в div. Совет. Попробуйте синтаксиc elem.innerHTML = ваш_массив.
let arr2 = ['Task 2', 2020, true];
document.querySelector('.out-2').innerHTML = arr2;


// Task 3
// Создайте массив, который содержит ваше имя, знак зодиака, день рождения и месяц рождения. Выведите массив на страницу в div.
let arr3 = ['Сергей', 'Овен', 25, 'март'];
document.querySelector('.out-3').innerHTML = arr3;


// Task 4
// Создайте массив, который содержит 10 значений. Выведите 3-й и 7-й элемент. Выведите весь массив в консоль.
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr4[2]);
console.log(arr4[6]);
console.log(arr4);


// Task 5
// Создайте массив содержащий только 1-й, 5-й и 10 элемент. Выведите его в консоль. Выведите его в div. Выведите длину данного массива.
let arr5 = []
arr5[0] = 1;
arr5[4] = 5;
arr5[9] = 10;
console.log(arr5);
document.querySelector('.out-5').innerHTML = arr5 + '<br>' + 'длинна массива: ' + arr5.length;


// Task 6
// Создайте массив с, напишите функцию которая по клику на кнопке меняет первый и третий элемент местами. Под сменой мест понимается, что данные элементы поменяют значения - первый станет равный третьему, а третий - первому.
// const c = [77, 88, 99, 66];
const c = [77, 88, 99, 66];
document.querySelector('.task-6').onclick = function () {
    [c[0], c[2]] = [c[2], c[0]];
    console.log(c);
}


// Task 7
// Напишите функцию, которая получает в качестве аргумента массив, и меняет нулевой и последний элемент массива местами. После чего выводит массив в консоль. Длина переданного массива может меняться. Небольшая подсказка - нам не нужно знать длину массива, поскольку мы можем ее посчитать через length.

function getArray(userArray) {
    [userArray[0], userArray[userArray.length - 1]] = [userArray[userArray.length - 1], userArray[0]];
    console.log(userArray);
}
getArray([1, 2, 3, 4, 5])

// Task 8
// Используя цикл выведите на страницу элементы массива d, которые больше нуля. Разделитель - пробел.

// d = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78]

let d = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78]
let out8 = '';
for (let i = 0; i < d.length; i++) {
    if (d[i] > 0) {
        out8 += d[i] + ' ';
    }
}
document.querySelector('.out-8').innerHTML = out8;


// Task 9
// Выполните перебор массива d из предыдущей задачи. Четные элементы добавьте в массив a1, нечетные в a2. Выведите полученные массивы a1 и a2 на страницу.
let a1 = [];
let a2 = [];
for (let i = 0; i < d.length; i++) {
    d[i] % 2 == 0 ? a1.push(d[i]) : a2.push(d[i])
}

document.querySelector('.out-9-1').innerHTML = 'четные: ' + a1;
document.querySelector('.out-9-2').innerHTML = 'нечетные: ' + a2;



// Task 10
// Создайте массив e. Используя цикл и переменную счетчик - выведите количество элементов массива равных нулю.

// let e = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
let e = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0]
let out10 = 0;
for (let i = 0; i < e.length; i++) {
    if (e[i] == 0) out10++;
}
document.querySelector('.out-10').innerHTML = 'Количество нулей: ' + out10;

// Task 11
// Используя предыдущий массив e и цикл - выведите максимальное значение из массива.
let max = 0;
for (let i = 0; i < e.length; i++) {
    if (e[i] > e[i + 1] && e[i] > max) max = e[i];
}
document.querySelector('.out-11').innerHTML = 'max is: ' + max;



// Task 12
// Создайте массив f. С помощью цикла найдите индекс элемента с максимальным значением.

let f = [-3, 0, 45, 22, 123, -485, 98, 34];
let max2 = 0;
let index = 0;
for (let i = 0; i < f.length; i++) {
    if (f[i] > f[i + 1] && f[i] > max2) {
        max2 = f[i];
        index = i;
    }
}
document.querySelector('.out-12').innerHTML = 'index of max is: ' + index;


// Task 13
// Используйте массив f. Используя цикл, посчитайте сумму элементов массива.

let sum = 0;
for (let i = 0; i < f.length; i++) {
    sum += f[i];
}
document.querySelector('.out-13').innerHTML = 'sum is: ' + sum;