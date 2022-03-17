// Wait for the DOM to finish loading before running the Quiz
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function() {
            if (this.getAttribute('data-type') === "correct") {
                alert("You got the right answer!");
            } else {
                let quizType = this.getAttribute('data-type');
                alert(`You clicked ${quizType}`);
            }
        })
    }

})


let questions = [
    "How many books does the bible have?",
    "The old testament has how many books?",
    "How many main divisions do we have in the bible?",
    "The new testament has how many books?",
    "The books of the Law is written by who?"
];
displayQuestion.apply(this, questions);

function displayQuestion() {
    for(let i=0; i<questions.length; i++) {
        console.log(questions[i]);
    }
    document.getElementById('question').innerHTML = questions[1];
}

function nextQuestion() {
    
}



// displayQuestions = displayQuestions[-1];
//  document.getElementById('question').innerHTML = displayQuestions[displayQuestions.length-1];
    




function checkChoiceAnswer() {

}

function incrementScore() {

}

function incrementWrongAnwer() {

}









