//Smooth scroll
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

// Угадай число
let randomNum = 1 + Math.floor(Math.random() * 100);
console.log(randomNum);

function guessTheNumber() {
    let userX = prompt('Привет! Попробуй угадать число от 1 до 100', 'попробуй ввести 50');

    if (userX === null) {
        return;
    }

    userX = +userX;

    if (isNaN(userX)) {
        alert('Нужно ввести число');
        return guessTheNumber();
    }

    if (userX > randomNum) {
        alert('Загаданное число меньше. Попробуй ещё раз');
        return guessTheNumber();
    }
    else if (userX < randomNum) {
        alert('Загаданное число больше. Попробуй ещё раз');
        return guessTheNumber();
    }
    else {
        alert('Угадал!');
        randomNum = 1 + Math.floor(Math.random() * 100);
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
    alert(textRev.toLowerCase());
}

//Викторина
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

    let correctCount = 0;

    for (let i = 0; i < quiz.length; i++) {
        const question = quiz[i];
        const userAnswer = prompt(question.question + "\n" + question.options.join("\n"));

        if (parseInt(userAnswer) === question.correctAnswer) {
            correctCount++;
        }
    }

    alert("Количество правильных ответов: " + correctCount);
}

//Камень, ножницы, бумага
function stonePaper() {
    const options = ["камень", "ножницы", "бумага"];
    const userChoice = prompt("Выберите: камень, ножницы или бумага").toLowerCase();

    if (!options.includes(userChoice)) {
        alert("Нужнро набрать в поле ввода камень, ножницы или бумага.");
        return;
    }

    const computerChoice = options[Math.floor(Math.random() * options.length)];

    let result;
    if (userChoice === computerChoice) {
        result = "ничья";
    } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        result = "победа!";
    } else {
        result = "поражение";
    }
    alert(`Ваш выбор: ${userChoice}\nВыбор компьютера: ${computerChoice}\nРезультат: ${result}`);
}

//Генератор случайных цветов
const colorButton = document.getElementById('colorButton');
const body = document.querySelector('.games');

colorButton.addEventListener('click', function () {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    body.style.backgroundColor = randomColor;
});