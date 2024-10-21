// Задание 1
let password = 'гром'

let pswrd = prompt('Введите пароль');

if (password === pswrd) {
    alert('Пароль введен верно');
}
else {
    alert('Пароль введен неправильно');
}

// Задание 2

let c = 2;
if (c > 0 && c < 10) {
    console.log('Верно');

} else {
    console.log('Неверно');
}

// Задание 3

let d = 9;
let e = 679;

if (d > 100 || e > 100) {
    console.log('Верно');

} else {
    console.log('Неверно');
}

// Задание 4

let a = '2';
let b = '3';

alert(Number(a) + Number(b));

// Задание 5

let monthNumber = 10;

switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        console.log('Зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Осень');
        break;
    default:
        console.log('Неверный номер месяца');
        break;
}

// Доп. задание 1

let userNumber = prompt('Пожалуйста, введите любое число');

if (+userNumber !== +userNumber) {
    console.log('не число');
} else {
    alert(userNumber % 2 == 0 ? 'Число чётное' : 'Число нечётное');
}

// Доп. задание 2 и 3

let clientOS = 1;
let clientDeviceYear = Number(prompt('Введите года выпуска Вашего устройства'));


// Доп. задание 3

if (clientDeviceYear < 2015 && clientOS === 0) {
    alert('Установите облегченную версию приложения для iOS по ссылке');
} else if (clientDeviceYear < 2015 && clientOS === 1) {
    alert('Установите облегченную версию приложения для Android по ссылке');
}
else {
    alert(clientOS === 0 ? 'Установите версию приложения для iOS по ссылке' : 'Установите версию приложения для Android по ссылке')
}


