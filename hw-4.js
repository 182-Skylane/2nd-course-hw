// Задание 1

for (let i = 0; i < 2; i++) {
    console.log('Привет');
}

//Задание 2

for (let a = 1; a <= 5; a++) {
    console.log(a);
}

//Задание 3

for (let b = 7; b <= 22; b++) {
    console.log(b);
}

//Задание 4

const obj = {
    Коля: '200',
    Вася: '300',
    Петя: '400'
}

for (const key in obj) {
    console.log(`${key} - ${obj[key]} $`);
}

//Задание 5

let n = 1000;
let num = 0;

while (n >= 50) {
    n /= 2;
    console.log(n);
    num++;
}
console.log(`Циклов ${num}`);

//Задание 6

let friday = 4;

let fullMonth = 31;

for (let d = friday; d < fullMonth; d += 7) {
    console.log(`Сегодня пятница, ${d}-е число. Необходимо подготовить отчет.`);
}

//Доп. задание 1

