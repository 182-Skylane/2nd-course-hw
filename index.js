//Угадай число
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
    else if (userX === randomNum) {
        alert('Угадал!');
        return randomNum = 1 + Math.floor(Math.random() * 100);
    }
    else {
        alert('Нужно ввести число');
    }
}

//Простая арфметика
function generateQuestion() {
    const operators = ['+', '-', '*', '/'];
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 10) + 1; // избежание деления на ноль
    const operator = operators[Math.floor(Math.random() * operators.length)];

    return { num1, num2, operator };
}

function calculateAnswer(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
    }
}

function askQuestion() {
    const { num1, num2, operator } = generateQuestion();
    const userAnswer = parseFloat(prompt(`Каков ответ на: ${num1} ${operator} ${num2}?`));
    const correctAnswer = calculateAnswer(num1, num2, operator);

    if (userAnswer === correctAnswer) {
        alert("Верно!");
    } else {
        alert(`Неверно! Правильный ответ: ${correctAnswer}`);
    }
}

//Переверни текст
function reverseText() {
    let textRev = prompt('Введите слово');
    textRev = textRev.split('');
    textRev.reverse();
    textRev = textRev.join('');
    alert(textRev);
}
