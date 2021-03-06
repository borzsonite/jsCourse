// Task 1.
// Выведите массив a1 на страницу.
let a1 = {
    3: 'hello',
    'one': 'hi'
};
document.querySelector('.b-1').onclick = () => {
    let out = '';
    for (key in a1) {
        out += `${key}: ${a1[key]}<br>`;
    };
    showResult('out-1', out);
}

// Task 2.
// Выведите на страницу элементы из масиива a2 у которых символов больше 4.
let a2 = {
    3: 'hello',
    'one': 'hi',
    'testt': 'vodoley',
    'ivan': 'ivanov'
}

document.querySelector('.b-2').onclick = () => {
    let out = '';
    for (let key in a2) {
        if (a2[key].length > 4) out += `${a2[key]}<br>`
    }
    showResult('out-2', out);
}

// Task 3.
// Выведите на страницу элементы из масиива a3 у которых ключ содержит больше 4 символов.
let a3 = {
    3: 'hello',
    'one': 'hi',
    'testt': 'vodoley',
    'ivan': 'ivanov'
}
document.querySelector('.b-3').onclick = () => {
    let out = '';
    for (let key in a3) {
        if (key.length > 4) out += `${a3[key]}<br>`;
    }
    showResult('out-3', out);
}

// Task 4.
// Выведите на страницу элементы из масиива a4 у которых значение - число.
let a4 = {
    3: 'hello',
    'one': 4,
    'testt': 'vodoley',
    'ivan': 6
}
document.querySelector('.b-4').onclick = () => {
    let out = '';
    for (let key in a4) {
        if (!isNaN(a4[key])) out += `${a4[key]} `;
    }
    showResult('out-4', out);
}

// Task 5.
// Дан ассоциативный массив a5.Найдите сумму элементов находящихся в нем.
let a5 = {
    a: 7,
    z: 4,
    45: 12,
    f: 6
};
document.querySelector('.b-5').onclick = () => {
    let sum = 0;
    for (let key in a5) {
        sum += a5[key];
    }
    showResult('out-5', sum);
}

// Task 6.
// Создайте ассоциативный массив a6, который содержит ключи name, age, sex, height и значения любого персонажа.Выведите массив на страницу
let a6 = {
    name: "chack",
    age: 34,
    sex: "male",
    height: 180
}
document.querySelector('.b-6').onclick = () => {
    let out = '';
    for (let key in a6) {
        out += `${key}: ${a6[key]}<br>`;
    }
    showResult('out-6', out);
}

// Task 7.
// Создайте ассоциативный массив a7, два input(u7 - key__input, u7 - value__input) и кнопку.При нажатии кнопки добавляйте в массив новое значение с соответствующим ключем.Выводите массив на страницу.
let a7 = {};
document.querySelector('.b-7').onclick = () => {
    let out = '';
    let userKey = document.querySelector('.u7-key__input').value;
    let userVal = document.querySelector('.u7-value__input').value;
    a7[userKey] = userVal;
    for (let key in a7) {
        out += `${key}: ${a7[key]}<br>`;
    }
    showResult('out-7', out);
}


// Task 8.
// Добавьте к предыдущей задачи input.u8 - key__input и кнопку.При нажатии кнопки - удаляйте значение с соответствующим ключем.Выводите массив на страницу.

let a8 = {};
document.querySelector('.b-8').onclick = () => {
    let out = '';
    let userKey = document.querySelector('.u7_1-key__input').value;
    let userVal = document.querySelector('.u7_1-value__input').value;
    a8[userKey] = userVal;
    for (let key in a8) {
        out += `${key}: ${a8[key]}<br>`;
    }
    showResult('out-8', out);
}

document.querySelector('.b-8_1').onclick = () => {
    let out = '';
    let keyToDel = document.querySelector('.u8-key__input').value;
    delete a8[keyToDel];
    for (let key in a8) {
        out += `${key}: ${a8[key]}<br>`;
    }
    showResult('out-8', out);
}








////////////////////////showResult()////////////////////////
function showResult(out, arr) {
    output = '';
    for (let key in arr) {
        output += `${key}: ${arr[key]}<br>`
    }
    document.querySelector(`.${out}`).innerHTML = arr;
}