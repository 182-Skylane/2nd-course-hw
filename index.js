let randomNum = 1 + Math.floor(Math.random() * 100);
console.log(randomNum);


function guessTheNumber() {
    let userX = +prompt('Привет! Попробуй угадать число от 1 до 100');

    if (userX > randomNum) {
        alert('Загаданное число меньше. Попробуй ещё раз');
        return guessTheNumber();
    }
    else if (userX < randomNum) {
        alert('Загаданное число больше. Попробуй ещё раз');
        return guessTheNumber();
    }
    else if (userX == randomNum) {
        alert('Угадал!');
    }
    else {
        alert('Нужно ввести число');
    }
}
