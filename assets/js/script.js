// Establish variables 
var timerEl = document.querySelector('#timer');
var startButton = document.querySelector('.start-button');
var questionDisplay = document.querySelector('.question');
var answersDisplay = document.querySelector('.answers');

// Hold each question in an array 
var quiz = [{
    ques: 'Commonly used data types DO NOT include', 
    choices: ['string', 'boolean', 'alerts', 'numbers'],
    correctAnswer: 'alerts'
},
{
    ques:'The condition in an if/else statement is enclosed with ___.',
    choices: ['parentheses', 'quotes', 'curly brackets', 'square brackets'],
    correctAnswer: 'parentheses'
}, 
{ 
    ques:'Arrays in Javascript can be used to store ___.',
    choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
    correctAnswer: 'all of the above'
},
{
    ques:'String values must be enclosed within __ when being assigned to variables', 
    choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
    correctAnswer: ''
},
{
    ques: 'A very useful tool during development and debugging used to print content to the debugger:', 
    choices: ['Javascript', 'terminal/bash', 'for loops', 'console.log'],
    correctAnswer: 'console.log'
}]

// Init function is called when start button is clicked
startButton.addEventListener('click', function(){
    displayNextQuestion();
    timer();
});

// Display Questions and Answeres 
var questionIndex = 0;
    // Display each question on the screen with their respective answer choices
    function displayNextQuestion(){
        answersDisplay.innerHTML = ""
        // Display question 
        questionDisplay.textContent = quiz[questionIndex].ques;
        // Display all four answer choices 
        for (let i = 0; i < 5; i++) {
            answersDisplay.innerHTML += `<button class="answer-buttons">${quiz[questionIndex].choices[i]}</button>`
        }
        // When answer button is clicked, log choice to the console
        var answerButtons = document.querySelectorAll(".answer-buttons");
        for (let i = 0; i < 4; i++) {
            answerButtons[i].addEventListener('click',function(event){
                console.log(event.target.textContent);
                if (quiz[questionIndex].correctAnswer === event.target.textContent) {
                    console.log('Correct');
                } else {
                    console.log('Incorrect');
                }
                 // Once question is answered, display next question 
                questionIndex++;
                displayNextQuestion();
            });
        }
    };

// Start timer and update count on page 
function timer(event) {
    // Prevent default action 
    event.preventDefault();
    var timeLeft = 60;
    
    var timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
          // Set the `textContent` of `timerEl` to show the remaining seconds
          timerEl.textContent = timeLeft;
          // Decrement `timeLeft` by 1
          timeLeft--;
        } else {
          // Once `timeLeft` gets to 0, set `timerEl` to an empty string
          timerEl.textContent = '';
          // Use `clearInterval()` to stop the timer
          clearInterval(timeInterval);
        }
      }, 1000);
};

// When question is answered incorrectly, time is subtracted from clock 
function incorrectAnswer(){
    if (answers[i] !== answers[0]) {
        timeLeft--;
    }
};

// When all questions are answered, or timer reaches 0, game is over 
function gameOver(){
    // if ()
}

// Save initials and score 
function saveScore(){
}


function init(){};