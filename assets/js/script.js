let username='',
    questionId=0,
    correctAnswer=0,
    incorrectAnswer=0,
    usernameCtrl=document.getElementById('username');

    let questions = [
            { question: "How many books does the bible have?", 
            choices: [45, 66, 10, 105], 
            correct: 66 },
            { question: "The old testament has how many books?", 
            choices: [39, 6, 13, 27], 
            correct: 27 },
            { question: "How many main divisions do we have in the bible?", 
            choices: [10, 2, 8, 4], 
            correct: 2 },
            { question: "The new testament has how many books?", 
            choices: [14, 27, 39, 29], 
            correct: 39 },
            { question: "The books of the Law is written by who?", 
            choices: ['Elijah', 'Moses', 'Isaiah', 'Ezekiel'], 
            correct: 'Moses'},  
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

        //  Show the question container
        document.getElementById('question-container').classList.remove('hide'); 
        
        // Set the state of choices button
        choicesState(false);
        }

        function nextQuestion() {
            // btn

            // Display the next question
            displayQuestion();
        }

        /** Display the current question */
        function displayQuestion() {
            // Check to make sure we do not display the same question multiple times.

        // Returns a random integer from 0 to length of questions array
         questionId = Math.floor(Math.random() * (questions.length - 1));
        let counter = 0,
        currentQuestion = questions[questionId];

        // Write out the currently selected question
        document.getElementById('question').innerHTML = currentQuestion.question;

        // Loop through and display the answers
        currentQuestion.choices.forEach(choice => {
        document.getElementById(`answer${++counter}`).innerHTML = choice;
        });

        // Set the state of the choices button
        choicesState(true);

        }

        function validateAnswer(Ctrl) {
        // Calculate and display the score
        if (parseInt(Ctrl.innerHTML) === parseInt(questions[questionID].correct)) {
            correctAnswer++;
            Ctrl.classList.add('success');
        } else {
            incorrectAnswer++;
            Ctrl.classList.add('error');
            }

        document.getElementById('score').innerHTML = correctAnswer;
        document.getElementById('incorrect').innerHTML = incorrectAnswer;
        }

        function choicesState(state) {
         for (let index = 1; index <= 4; index++) {
        const element = document.getElementById(`answer${index}`);
        element.classList.remove('success', 'error');
        element.disabled = state;
    }
}






