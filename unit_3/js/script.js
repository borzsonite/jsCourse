// Task 1
let a = +4;
if (a == 4) {
    console.log('a=4');
}


// Task 2
let b = +8;
let c = +10;
if (b > c) {
    console.log('b > c');
}
else if (b < c) {
    console.log('b < с');
}


// Task 3
b = +18;
c = +10;
if (b > c) {
    console.log('b > c');
}
else if (b < c) {
    console.log('b < с');
}
else {
    console.log('b = c');
}

// Task 4
let btn1 = document.getElementById('btn-1');
btn1.onclick = () => {
    let val_1 = +document.querySelector('.input-1').value;
    let val_2 = +document.querySelector('.input-2').value;
    let output = document.querySelector('.output-1');
    if (val_1 > val_2) {
        output.innerHTML = val_1;
    }
    else if (val_1 < val_2) {
        output.innerHTML = val_2
    }
    else {
        output.innerHTML = 'равны';
    }

}

// Task 5
let bnt2 = document.getElementById('btn-2');
bnt2.onclick = () => {
    let year = +document.querySelector('.input-3').value;
    let output = document.querySelector('.output-2');
    if (year < 2000) {
        let age = 2019 - year;
        output.innerHTML = 'Возраст ' + age;
    }
    else if (year >= 2000) {
        output.innerHTML = '';
        console.log(2019 - year);
    }
}

// Task 6
let btn3 = document.getElementById('btn-3');
btn3.onclick = () => {
    let num = +document.querySelector('.input-4').value;
    let output = document.querySelector('.output-3');
    if (num >= 1 && num <= 32) {
        output.innerHTML = 'Такая квартира существует';
    }
    else {
        output.innerHTML = 'Нет такой квартиры';
    }
}

// Task 7
let btn4 = document.getElementById('btn-4');
btn4.onclick = () => {
    let num = +document.querySelector('.input-5').value;
    let output = document.querySelector('.output-4');
    if (num < 0) {
        output.innerHTML = 'Меньше нуля';
    }
    else if (num > 0) {
        output.innerHTML = 'Больше нуля';
    }
    else {
        output.innerHTML = 'Равно нулю';
    }
}


// Task 8
let btn5 = document.getElementById('btn-5');
btn5.onclick = () => {
    let num = +document.querySelector('.input-6').value;
    let output = document.querySelector('.output-5');
    if (num % 2 == 0) {
        output.innerHTML = 'Четное!';
    }
    else {
        output.innerHTML = 'Нечетное!';
    }
}


// Task 9
let btn6 = document.getElementById('btn-6');
btn6.onclick = () => {
    let num_1 = +document.querySelector('.input-7').value;
    let num_2 = +document.querySelector('.input-8').value;
    let output = document.querySelector('.output-6');
    if (num_1 != '' && num_2 != '') {
        let result = num_1 ** num_2;
        output.innerHTML = num_1 + ' ^ ' + num_2 + ' = ' + result;
    }
    else {
        output.innerHTML = 'Заполните оба поля!';
    }
    console.log(111);
}

// Task 10
let btn7 = document.getElementById('btn-7');
btn7.onclick = () => {
    let input = document.querySelector('.input-9');
    if (input.value == '' || input.value == ' ') {
        alert('Заполните поле...');
        input.value = '';

    }
    else {
        alert('Hello, ' + input.value + '!');
        input.value = '';

    }
}

// Task 11
let btn8 = document.getElementById('btn-8');
btn8.onclick = () => {
    let input = document.querySelector('.input-10');
    if (input.value.trim() == '') {
        alert('Заполните поле...');
        input.value = '';

    }
    else {
        alert('Hello, ' + input.value + '!');
        input.value = '';

    }
}

// Task 12
let btn9 = document.getElementById('btn-9');
btn9.onclick = () => {
    let num = +document.querySelector('.input-11').value;
    switch (num) {
        case 1:
            console.log('один');
            break;
        case 2:
            console.log('два');
            break;
        case 3:
            console.log('три');
            break;
        default:
            console.log('что-то еще...');
    }
}

// Task 13
let btn10 = document.getElementById('btn-10');
btn10.onclick = () => {
    let num = +document.querySelector('.input-12').value;
    let output = document.querySelector('.output-7');
    if (num >= 1 && num <= 5) {
        output.innerHTML = 'улица 1';
    }
    else if (num >= 6 && num <= 11) {
        output.innerHTML = 'улица 2';
    }
    else if (num >= 11 && num <= 20) {
        output.innerHTML = 'улица 3';
    }
    else {
        output.innerHTML = 'нет такой улицы..';
    }
}

// Task 14
let btn11 = document.getElementById('btn-11');
btn11.onclick = () => {
    let num = +document.querySelector('.input-13').value;
    let output = document.querySelector('.output-8');
    if (num >= 0 && num <= 25) {
        output.innerHTML = 'не обнаруживается';
    }
    else if (num > 25 && num <= 50) {
        output.innerHTML = 'снижение числа лимфоцитов';
    }
    else if (num > 50 && num <= 100) {
        output.innerHTML = 'вялость, рвота';
    }
    else if (num > 100 && num <= 150) {
        output.innerHTML = 'смертность 5%';
    }
    else if (num > 150 && num <= 350) {
        output.innerHTML = 'смертность 50% за 30 суток';
    }
    else if (num > 350 && num <= 600) {
        output.innerHTML = 'смертность 90% за две недели';
    }
    else if (num > 600) {
        output.innerHTML = 'смертность 100%';
    }
}

// Task 15
let x = +1;
let y = +0;
console.log(x && y);
console.log(x || y);

// Task 16
document.querySelector('.input-14').onchange = () => {
    let output = document.querySelector('.output-9');
    let elem = document.querySelector('.input-14');
    let volume = +elem.options[elem.selectedIndex].value;
    let tax;
    switch (volume) {
        case 500:
            tax = 2525;
            break;
        case 1200:
            tax = 5050;
            break;
        case 1600:
            tax = 8275;
            break;
        case 1900:
            tax = 9675;
            break;
        case 2000:
            tax = 11075;
            break;
        case 3000:
            tax = 15000;
    }
    output.innerHTML = tax + ' теньге';
}

// Task 17
document.querySelector('.input-15').oninput = () => {
    let ammount = +document.querySelector('.input-15').value;
    let elem = document.querySelector('.currency');
    let coeff_output = document.querySelector('.output-10');
    let res_output = document.querySelector('.output-11');
    let currency = elem.options[elem.selectedIndex].value;
    let coeff;
    if (currency == 'usd') {
        coeff = 1;
    }
    else if (currency == 'rub') {
        coeff = 64.66;
    }
    else {
        coeff = 24.09;
    }
    coeff_output.innerHTML = coeff;
    res_output.innerHTML = (ammount * coeff).toFixed(2);
}

document.querySelector('.currency').onchange = () => {
    let ammount = +document.querySelector('.input-15').value;
    let elem = document.querySelector('.currency');
    let coeff_output = document.querySelector('.output-10');
    let res_output = document.querySelector('.output-11');
    let currency = elem.options[elem.selectedIndex].value;
    let coeff;
    if (currency == 'usd') {
        coeff = 1;
    }
    else if (currency == 'rub') {
        coeff = 64.66;
    }
    else {
        coeff = 24.09;
    }
    coeff_output.innerHTML = coeff;
    res_output.innerHTML = (ammount * coeff).toFixed(2);
}

// Task 18
document.querySelector('.input-16').oninput = () => {
    let ammount = +document.querySelector('.input-16').value;
    let elem = document.querySelector('.currency_2');
    let coeff_output = document.querySelector('.output-12');
    let res_output = document.querySelector('.output-13');
    let currency = elem.options[elem.selectedIndex].value;
    let coeff;
    switch (currency) {
        case 'usd':
            coeff = 1;
            break;
        case 'rub':
            coeff = 64.66;
            break;
        case 'uah':
            coeff = 24.09;
    }
    coeff_output.innerHTML = coeff;
    res_output.innerHTML = (ammount * coeff).toFixed(2);
}

document.querySelector('.currency_2').onchange = () => {
    let ammount = +document.querySelector('.input-16').value;
    let elem = document.querySelector('.currency_2');
    let coeff_output = document.querySelector('.output-12');
    let res_output = document.querySelector('.output-13');
    let currency = elem.options[elem.selectedIndex].value;
    let coeff;
    switch (currency) {
        case 'usd':
            coeff = 1;
            break;
        case 'rub':
            coeff = 64.66;
            break;
        case 'uah':
            coeff = 24.09;
    }
    coeff_output.innerHTML = coeff;
    res_output.innerHTML = (ammount * coeff).toFixed(2);
}

// Task 19
let btn12 = document.getElementById('btn-12');
btn12.onclick = () => {
    let num_1 = +document.querySelector('.input-17').value;
    let num_2 = +document.querySelector('.input-18').value;
    let elem = document.querySelector('[name = "operation_1"]');
    let operand = elem.options[elem.selectedIndex].value;
    let output = document.querySelector('.output-14');
    let result = 0;
    if (operand == '-') {
        result = num_1 - num_2;
    }
    else if (operand == '+') {
        result = num_1 + num_2;
    }
    else if (operand == '*') {
        result = num_1 * num_2;
    }
    else {
        result = num_1 / num_2;
    }
    output.innerHTML = result;
}

// Task 20
let btn13 = document.getElementById('btn-13');
btn13.onclick = () => {
    let num_1 = +document.querySelector('.input-19').value;
    let num_2 = +document.querySelector('.input-20').value;
    let elem = document.querySelector('[name = "operation_2"]');
    let operand = elem.options[elem.selectedIndex].value;
    let output = document.querySelector('.output-15');
    let result = 0;
    switch (operand) {
        case '-':
            result = num_1 - num_2;
            break;
        case '+':
            result = num_1 + num_2;
            break;
        case '*':
            result = num_1 * num_2;
            break;
        default:
            result = num_1 / num_2;
    }
    output.innerHTML = result;
}
