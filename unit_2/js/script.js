// Task 1
let a = 7;
let b = 9;
console.log(a * b);

// Task 2
let c = 7;
let d = 9;
document.querySelector('.out-2').innerHTML = d / c;
console.log(d / c);

// Task 3
let e = 3;
let f = 5;
document.querySelector('.out-3').innerHTML = e + f;

// Task 4
let e1 = 3;
let f1 = '5';
document.querySelector('.out-4').innerHTML = e1 + f1;

// Task 5
let e2 = 3;
let f2 = 0;
document.querySelector('.out-5').innerHTML = e2 / f2;

// Task 6
let e3 = 3;
let f3 = 'Hello';
document.querySelector('.out-6').innerHTML = e3 + f3;

// Task 7
let e4 = 3;
let f4 = 'Hello';
document.querySelector('.out-7').innerHTML = e4 * f4;

// Task 8
let btn1 = document.getElementById('btn-1');
btn1.onclick = function () {
    let inPut = document.querySelector('.in-8').value;
    console.log(inPut);
}

// Task 9
let btn2 = document.getElementById('btn-2');
btn2.onclick = function () {
    document.querySelector('.out-9').innerHTML = "out: ";
    document.querySelector('.out-9').innerHTML += document.querySelector('.in-9').value;
    document.querySelector('.in-9').value = '';
}

// Task 10
let btn3 = document.getElementById('btn-3');
btn3.onclick = function () {
    let inputVal_10 = document.querySelector('.in-10').value;
    document.querySelector('.out-10').innerHTML = inputVal_10 + ' * 10 = ' + inputVal_10 * 10;
}

// Task 11
let btn4 = document.getElementById('btn-4');
btn4.onclick = function () {
    let input_11 = document.querySelector('.in-11');
    let inputVal_11 = +input_11.value;
    let result = inputVal_11 + 10;
    document.querySelector('.out-11').innerHTML = inputVal_11 + ' + 10 = ' + result;
}

// Task 12
let btn5 = document.getElementById('btn-5');
btn5.onclick = function () {
    let name = document.querySelector('.name').value;
    let surname = document.querySelector('.surname').value;
    console.log('Hello, ' + name + ' ' + surname + '!');
}

// Task 13
let btn6 = document.getElementById('btn-6');
btn6.onclick = function () {
    let num_1 = +document.querySelector('.in-12').value;
    let num_2 = +document.querySelector('.in-13').value
    let result = num_1 + num_2;
    document.querySelector('.out-12').innerHTML = num_1 + ' + ' + num_2 + ' = ' + result;
}

// Task 14
document.querySelector('.in-14').value = 'Hello';

// Task 15
let y = document.querySelector('.in-15');
y.style.border = '2px solid red';



// Task 16
document.querySelector('.in-16').oninput = function () {
    let val_1 = +document.querySelector('.in-16').value;
    let val_2 = +document.querySelector('.in-17').value;
    let summ = val_1 + val_2;
    document.querySelector('.out-13').innerHTML = val_1 + ' + ' + val_2 + ' = ' + summ;
}

document.querySelector('.in-17').oninput = function () {
    let val_1 = +document.querySelector('.in-16').value;
    let val_2 = +document.querySelector('.in-17').value;
    let summ = val_1 + val_2;
    document.querySelector('.out-13').innerHTML = val_1 + ' + ' + val_2 + ' = ' + summ;
}

// Task 17
let btn7 = document.getElementById('btn-7');
btn7.onclick = () => {
    let t = document.querySelector('.in-18').value;
    console.log(parseInt(t));
}

// Task 18
let btn8 = document.getElementById('btn-8');
btn8.onclick = () => {
    let t = document.querySelector('.in-19').value;
    console.log(parseFloat(t));
}

// Task 19
document.querySelector('.in-20').oninput = function () {
    let val_1 = +document.querySelector('.in-20').value;
    let val_2 = +document.querySelector('.in-21').value;
    let summ = val_1 + val_2;
    document.querySelector('.out-14').innerHTML = val_1 + ' + ' + val_2 + ' = ' + summ;
}

document.querySelector('.in-21').oninput = function () {
    let val_1 = document.querySelector('.in-20').value;
    let val_2 = document.querySelector('.in-21').value;
    let summ = parseInt(val_1) + parseInt(val_2);
    document.querySelector('.out-14').innerHTML = val_1 + ' + ' + val_2 + ' = ' + summ;
}

// Task 20
let btn9 = document.getElementById('btn-9');
btn9.onclick = () => {
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let age = document.getElementById('age').value;
    let occupy = document.getElementById('occupy').value;
    document.querySelector('.out-15').innerHTML = 'Уважаемый ' + name + ' ' + surname + ' ваш возраст ' + age + ' года ' + 'по профессии вы ' + occupy;
}
