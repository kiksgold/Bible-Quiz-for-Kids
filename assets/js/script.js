// Wait for the DOM to finish loading before running the Quiz
// Get the button elements and add event listeners to them

// constants

const nextBtn = document.getElementById('next');
const answer1Btn = document.getElementById('choice-buttons');
const question = document.getElementById('question')

// Event Listeners
nextBtn.addEventListener('click', function (e) {
    console.log('Clicked next...')
    alert('You clicked next');
    // displayQuestion(questions[currentQuestion]);
    // currentQuestion++;
});

answer1Btn.addEventListener('click', function (e) {
   console.log('Answer One', e.target);
   alert('You made a choice');
    // if (questions[currentQuestion].correct == 1) {
    //     alert('You answered correctly.');
    // }
});


// variables

let questions = [
    { question: "How many books does the bible have?", choices: [45, 66, 10, 105], correct: 66 },
    { question: "The old testament has how many books?", choices: [39, 6, 13, 27], correct: 27 },
    { question: "How many main divisions do we have in the bible?", choices: [10, 2, 8, 4], correct: 2 },
    { question: "The new testament has how many books?", choices: [14, 27, 39, 29], correct: 39 },
    { question: "The books of the Law is written by who?", choices: ['Elijah', 'Moses', 'Isaiah', 'Ezekiel'], correct: 'Moses'},  
];
console.log('questions');


// displayQuestion(questions[0]); {
//     document.getElementById('question').innerHTML = questions[0];
// }

/**
 * Display the current question.
 * @param question the current question.
 */
// function displayQuestion(questions) {
//     document.getElementById('question').innerHTML = questions.title+questions.choices;
// }
    
// let currentQuestion = 0;









//     answer1Btn.innerHTML = questions.choices[0];
//   }

// document.addEventListener("DOMContentLoaded", function() {
//     let buttons = document.getElementsByTagName('button');

//     for (let button of buttons) {
//         button.addEventListener('click', function() {
//             if (this.getAttribute('data-type') === "correct") {
//                 alert("You got the right answer!");
//             } else {
//                 let quizType = this.getAttribute('data-type');
//                 alert(`You clicked ${quizType}`);
//             }
//             if (this.getAttribute('data-type') === "next") {
//                 alert("Next Question")
//             }
//         })
//     }

// })


// let questions = [
//     "How many books does the bible have?",
//     "The old testament has how many books?",
//     "How many main divisions do we have in the bible?",
//     "The new testament has how many books?",
//     "The books of the Law is written by who?"
// ];
// displayQuestion.apply(this, questions);

// function displayQuestion() {
//     for(let i=0; i<questions.length; i++) {
//         console.log(questions[i]);
//     }
//     document.getElementById('question').innerHTML = questions[0];
// }

// // displaying next question

// document.getElementsByClassName('next-btn').onclick=function(displayQuestion) {
// let question1 = document.getElementById('question').innerHTML = displayQuestion(questions[0]);
// let question2 = document.getElementById('question').innerHTML = displayQuestion(questions[1]);
// let question3 = document.getElementById('question').innerHTML = displayQuestion(questions[2]);
// let question4 = document.getElementById('question').innerHTML = displayQuestion(questions[3]);
// let question5 = document.getElementById('question').innerHTML = displayQuestion(questions[4]);
// }


// // displaying answers
// let answers = ['66','27','2','39','Moses'];

// displayAnswer.apply(this,answers);
// function displayAnswer() {
//     for(let i=0; i<answers.length; i++) {
//         console.log(answers[i]);
//     }

//     document.getElementsByClassName('correct').innerHTML = answers[0];
// }

// function displayChoiceAnswer () {
//     // If correct answers are checked
//     if(document.getElementsByClassName('correct').innerHTML = answers[0] === correct); 
// }




function incrementScore() {

}

function incrementWrongAnwer() {

}









