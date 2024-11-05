//Задание 1

const array = [1, 5, 4, 10, 0, 3];
for (let x = 0; x < array.length; x++) {
    console.log(array[x]);
    if (array[x] === 10) {
        break;
    }
}

//Задание 2

const array2 = [1, 5, 5, 10, 4, 3];
console.log(array2.indexOf(4));

//Задание 3

const array3 = [1, 3, 5, 10, 20];
console.log(array3.join(' '));

//Задание 4

const array4 = [];
for (let i = 0; i < 3; i++) {
    const arrayIn = [];
    for (let i = 0; i < 3; i++) {
        arrayIn.push(1);
    }
    array4.push(arrayIn);
}
console.log(array4);

//Задание 5

const array5 = [1, 1, 1];
array5.push(2, 2, 2);
console.log(array5);

//Задание 6

const array6 = [9, 8, 7, 'a', 6, 5];
array6.sort();
const onlyNumbers = array6.filter(
    element => typeof element === 'number');
console.log(onlyNumbers);

//Задание 7

const array7 = [9, 8, 7, 6, 5];
const userVar = +prompt('Введите число');
if (array7.includes(userVar)) {
    alert('Угадал');
}
else {
    alert('Не угадал');
}

//Задание 8

let stringRev = 'abcdef';
stringRev = stringRev.split('');
stringRev.reverse();
stringRev = stringRev.join('');
console.log(stringRev);

//Задание 9

const array9 = [[1, 2, 3], [4, 5, 6]];
const arrayLog = [];

for (let z = 0; z < array9.length; z++) {
    arrayLog.push(...array9[z]);
}
console.log(arrayLog);

//Задание 10

const array10 = [10, 2, 9, 4, 7, 3, 6, 5, 1, 8];
for (let y = 0; y < array10.length; y++) {
    if (array10[y + 1]) {
        console.log(array10[y] + array10[y + 1]);
    }
}

//Задание 11

const array11 = [2, 4, 6, 8, 10];
function square(array11) {
    return array11.map(item => item ** 2)
}
console.log(square(array11));

//Задание 12

function wordLength(array12) {
    return array12.map(item => item.length);
}
console.log(wordLength(['привет', 'мир']));

//Задание 13

function negativeNumbers(array13) {
    return array13.filter(item => item < 0);
}
console.log(negativeNumbers([2, -3, 5, -9, 66, -7]));

//Задание 14

function randomNumbers() {
    return Math.floor(Math.random() * 10);
}
const array14 = [];
const evenNumbers = [];

for (let n = 0; n < 10; n++) {
    array14.push(randomNumbers());
}
console.log(array14);

for (let n = 0; n < array14.length; n++) {
    if (array14[n] % 2 === 0) {
        evenNumbers.push(array14[n]);
    }
}
console.log(evenNumbers);

//Задание 15

function randomNumbers15() {
    return Math.floor(Math.random() * 10);
}
const array15 = [];

for (let n = 0; n < 6; n++) {
    array15.push(randomNumbers15());
}
console.log(array15);
console.log(array15.reduce((a, b) => a + b) / array15.length);
