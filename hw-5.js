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
    if (n % 2 == 0) {
        return 'число чётное';
    } else {
        return 'число нечётное';
    }
}