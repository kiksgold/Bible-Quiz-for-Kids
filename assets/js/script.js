// set the variables for the functions.
let username = '',
    questionID = 0,
    correctAnswer = 0,
    incorrectAnswer = 0,
    usernameCtrl = document.getElementById('username');

// Save currentAnswer as a global variable 
let currentAnswer = '';

// Set the questions using an array.
let questions = [{
        question: "How many books does the bible have?",
        choices: [45, 66, 10, 105],
        correct: 66
    },
    {
        question: "The old testament has how many books?",
        choices: [39, 6, 13, 27],
        correct: 27
    },
    {
        question: "How many main divisions do we have in the bible?",
        choices: [10, 2, 8, 4],
        correct: 2
    },
    {
        question: "The new testament has how many books?",
        choices: [14, 27, 39, 29],
        correct: 39
    },
    {
        question: "The books of the Law is written by who?",
        choices: ['Elijah', 'Moses', 'Isaiah', 'Ezekiel'],
        correct: 'Moses'
    },
];

function startQuiz() {
    //  username is required and must contain valid characters
    if (usernameCtrl.value.trim().length === 0) {
        alert('Invalid Username!');
        return;
    }

    // Display a random question to the user
    displayQuestion();

    //  Hide the username container
    document.getElementById('username-container').classList.add('hide');

    // Hide the start button
    document.getElementById('start').classList.add('hide');

    //  Show the question container
    document.getElementById('question-container').classList.remove('hide');

    //  Show the next button
    document.getElementById('next').classList.remove('hide');

    // Set the state of choices button
    choicesState(false);
}

function nextQuestion() {
    // Display the next question
    displayQuestion();

    //Set the state of choices button
    choicesState(false);
}

/** Display the current question */
function displayQuestion() {
    // Returns a random integer from 0 to length of questions array
    questionID = Math.floor(Math.random() * (questions.length));
    let counter = 0,
        currentQuestion = questions[questionID];

    document.getElementById('questionid').innerHTML = currentQuestion.question;

    // Loop through and display the answers
    currentQuestion.choices.forEach(choice => {
        document.getElementById(`answer${++counter}`).innerHTML = choice;
    });

    // Set the state of the choices button
    choicesState(true);

    // Check to make sure we do not display the same question multiple times.
    currentAnswer = questions[questionID].correct.toString();
    questions.splice(questionID, 1)
}

function validateAnswer(Ctrl) {
    // Calculate and display the score

    if (Ctrl.innerHTML.toString() === currentAnswer) {
        document.getElementById('score').innerHTML = ++correctAnswer;
        Ctrl.classList.add('correct');
        alert('You got the right answer!');
    } else {
        document.getElementById('incorrect').innerHTML = ++incorrectAnswer;
        Ctrl.classList.add('wrong');
        alert('Awww... you answered wrongly')
    }

    // Set the state of choices button
    choicesState(true);
}

function choicesState(state) {
    for (let index = 1; index <= 4; index++) {
        const element = document.getElementById(`answer${index}`);
        if (state === false) {
            element.classList.remove('correct', 'wrong');
        }
        element.disabled = state;
    }
}