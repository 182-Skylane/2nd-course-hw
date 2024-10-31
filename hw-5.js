//Задание 1

function minNumber(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(minNumber(8, 4));
console.log(minNumber(6, 6));

//Задание 2

function isEven(n) {
    if (n % 2 === 0) {
        return 'число чётное';
    } else {
        return 'число нечётное';
    }
}

console.log(isEven(2));
console.log(isEven(3));

//Задание 3

function square(c) {
    console.log(c ** 2);
}

square(5);

const up = (d) => d ** 2;
console.log(up(5));

//Задание 4

function age() {
    let age = prompt('Сколько Вам лет?');

    if (age >= 0 && age <= 12) {
        alert('Привет, друг!');
    } else if (age > 12) {
        alert('Добро пожаловать!');
    }
    else {
        alert('Вы ввели неправильное значение');
    }
}

age();

//Задание 5

function mult(f, g) {
    if (isNaN(f) || isNaN(g)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return f * g;
    }
}
console.log(mult(6, 3));

//Задание 6

function userNumber() {
    let number = prompt('Введите число');
    if (isNaN(number)) {
        return 'Переданный параметр не является числом';
    } else {
        return `${number} в кубе равняется ${number ** 3}`;
    }
}
console.log(userNumber());

//Задание 7

const circle1 = {
    radius: 10,
    methodGetArea: getArea,
    methodGetPerimeter: getPerimeter,
}
const circle2 = {
    radius: 20,
    methodGetArea: getArea,
    methodGetPerimeter: getPerimeter,
}

function getArea() {
    return Math.PI * this.radius ** 2;
}
function getPerimeter() {
    return 2 * Math.PI * this.radius;
}

console.log(circle1.methodGetArea());
console.log(circle2.methodGetArea());