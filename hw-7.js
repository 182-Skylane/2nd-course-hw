//Задание 1
const string = "js"
console.log("js".toUpperCase());

//Задание 2

function filter(arr, str) {
    const lowerStr = str.toLowerCase();
    return arr.filter(item => item.toLowerCase().startsWith(lowerStr));
}

console.log(filter(['Java', 'JavaScript', 'Python'], 'ja'));


//Задание 3

let number = 32.58884;

console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));

//Задание 4

console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

//Задание 5

function randomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}
console.log(randomNumber());

//Задание 6

function randomNumber6(num6) {
    return Array.from({ length: Math.floor(num6 / 2) }, () => Math.floor(Math.random() * num6));
}
console.log(randomNumber6(10));

//Задание 7

function randomNumber7(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomNumber7(10, 18));

//Задание 8

console.log(new Date());

//Задание 9

const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

//Задание 10

function dateFormatCustom(date) {
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    const year = date.getFullYear();
    const day = date.getDate();
    const month = date.getMonth();
    const dayOfWeek = days[date.getDay()];
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `
    Дата : ${day} ${months[month]} ${year} - это ${dayOfWeek}
    Время : ${hours}:${minutes}:${seconds}`;
}
console.log(dateFormatCustom(new Date()));