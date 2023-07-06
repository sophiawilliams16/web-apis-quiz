// Establish variables 
var timerEl = document.querySelector('#timer');
var startButton = document.querySelector('.start-button');
var questionDisplay = document.querySelector('.question');
var answersDisplay = document.querySelector('.answers');
var highscoreBtn = document.querySelector('.highscore-button');
var timeLeft = 10;
var score = 0;

// Hold each question in an array 
var quiz = [{
    ques: 'Commonly used data types DO NOT include',
    choices: ['string', 'boolean', 'alerts', 'numbers'],
    correctAnswer: 'alerts'
},
{
    ques: 'The condition in an if/else statement is enclosed with ___.',
    choices: ['parentheses', 'quotes', 'curly brackets', 'square brackets'],
    correctAnswer: 'parentheses'
},
{
    ques: 'Arrays in Javascript can be used to store ___.',
    choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
    correctAnswer: 'all of the above'
},
{
    ques: 'String values must be enclosed within __ when being assigned to variables',
    choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
    correctAnswer: 'quotes'
},
{
    ques: 'A very useful tool during development and debugging used to print content to the debugger:',
    choices: ['Javascript', 'terminal/bash', 'for loops', 'console.log'],
    correctAnswer: 'console.log'
}]

// Init function is called when start button is clicked
startButton.addEventListener('click', function () {
    displayNextQuestion();
    timer();
});

// Display Questions and Answeres 
var questionIndex = 0;
// Display each question on the screen with their respective answer choices
function displayNextQuestion() {
    answersDisplay.innerHTML = ""
    // Display question 
    questionDisplay.textContent = quiz[questionIndex].ques;
    // Display all four answer choices 
    for (let i = 0; i < 4; i++) {
        answersDisplay.innerHTML += `<button class="answer-buttons">${quiz[questionIndex].choices[i]}</button>`
    }
    // When answer button is clicked, log choice to the console
    var answerButtons = document.querySelectorAll(".answer-buttons");
    for (let i = 0; i < 4; i++) {
        answerButtons[i].addEventListener('click', function (event) {
            console.log(event.target.textContent);
            // If answer is correct, log Correct & increase score 
            if (quiz[questionIndex].correctAnswer === event.target.textContent) {
                console.log('Correct');
                score++;
                // If answer is incorrect, subtract from timer & log Incorrect 
            } else {
                console.log('Incorrect');
                timeLeft--;
            }
            // Once question is answered, display next question 
            questionIndex++;
            displayNextQuestion();
            // Remove the event listener after user selects an answer
            answerButtons.forEach(function (button) {
                button.removeEventListener('click', displayNextQuestion);
            });
        });
    }
};

// Start timer and update count on page 
function timer(event) {
    // Prevent default action 
    //event.preventDefault();

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
        }
        // When all questions are answered, or timer reaches 0, stop the timer, display game over, and display score 
        // !! Game Over displaying when timer 0, but not when all questions answered !!
        if (questionIndex > quiz.length - 1 || timeLeft === 0) {
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);

            var gameOver = document.createElement('div');
            gameOver.textContent = "Game Over";
            document.body.appendChild(gameOver);

            var displayScore = document.createElement('div');
            displayScore.textContent = "Score: " + score;
            gameOver.appendChild(displayScore);
        }
    }, 1000);
};

// create an empty global array, add initials and scores to it 
var items = [];


// Use local storage to save initials and score 
highscoreBtn.addEventListener('click', function (event) {
    event.preventDefault();

    // Create prompt and text box for user initials 
    var initials = document.querySelector('.initials');

    // Create elements for prompt and input box 
    var promptInitials = document.createElement('label');
    var enterInitials = document.createElement('input');
    var saveInitials = document.createElement('button');

    // Put the text inside the elements 
    promptInitials.textContent = "Enter your initals: ";
    enterInitials.setAttribute("type", "text");

    // Add initials to local storage 
    saveInitials.addEventListener("click", function(){
        var userInitials = enterInitials.value;
        items.push(userInitials, score);
        console.log(items);
        // Create a loop to display the array 
        for (var i=0; i<items.length; i++){
        var displayItems = document.createElement('div');
        displayItems.textContent = items[i];
        initials.appendChild(displayItems);
        }
    })

    saveInitials.setAttribute("class", "save-initials");
    saveInitials.textContent = "Save";

    // Append them to the initials div 
    initials.appendChild(promptInitials);
    initials.appendChild(enterInitials);
    initials.appendChild(saveInitials);


    // Save initials to local storage  
    // var allScores = {...localStorage};
    // console.log(allScores);

    // Change scores from an object to string  
    // allScores.JSON.stringify();

    // Use a loop to display the array of scores 
    //for (let i = 0; i < ; i++) {
        
        //var displayAllScores = Object.entries(allScores);
        //console.log(displayAllScores);

        //where.textContent = displayAllScores[i]
    //}
}
)
function init() {};