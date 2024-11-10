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

function startQuiz() {
    const quiz = [
        {
            question: "Какой цвет неба?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    const correctAnswers = [
        "Синий", // правильный ответ на 1-й вопрос
        ["Семь", "7"], // правильные ответы на 2-й вопрос
        ["Пять", "5"]  // правильные ответы на 3-й вопрос
    ];

    let correctCount = 0;

    for (let i = 0; i < quiz.length; i++) {
        const question = quiz[i];
        const userAnswer = prompt(question.question).trim().toLowerCase();

        // Проверка для первого вопроса
        if (i === 0) {
            if (userAnswer === correctAnswers[i].toLowerCase()) {
                correctCount++;
            }
        }
        // Проверка для второго и третьего вопросов
        else if (i === 1 || i === 2) {
            if (correctAnswers[i].includes(userAnswer)) {
                correctCount++;
            }
        }
    }

    alert("Правильных ответов: " + correctCount);
}

