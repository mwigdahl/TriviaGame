//Set Global Variables
var correctAnswer = 0;
var incorrectAnswer = 0;
var unanswered = 0;
var time = 30;
var clockRunning = false;
var intervalId;
//Create objects for questions

var question1 = {
    question: "A river which flows into another river is called a",
    answers: ["Confluence", "Tributary", "Watershed", "Drainage basin"],
    correct: "Tributary"
};

var question2 = {
    question: "How many whitewater classification categories are there?",
    answers: ["Four", "Six", "Two", "Nine"],
    correct: "Six"
};

var question3 = {
    question: "The place where a river begins is called its:",
    answers: ["Spring", "Confluence", "Source", "Watershed"],
    correct: "Source"
};

var question4 = {
    question: "What year did john wesley powell run the grand canyon?",
    answers: ["1845", "1869", "1922", "1908"],
    correct: "Source"
};


// Display a Start Button

// function triviaGame {

// }

//Initialize the game

// Function to Run game
function startGame() {



    if (!clockRunning) {
        intervalId = setInterval(countDown, 1000);
        clockRunning = true;
    }
}
    // load up and display question
    
    // load up possible anwsers
    
    // on click function to 
    
    // start timer and display 

    function countDown() {
        time--;
        $('#countdown').text("Time Remaining: " + time);
        console.log(time);
    }
        //if timer runs out move to next question


// If statement - If on click is true, then 
    // run win function
    
    // else if loss function


// Once game is complete, display

    //correct anwsers, incorrect anwsers, unanswered


// Game Reset

function reset() {
    time = 30;
    $('#countdown').text("Time Remaining: 30 Seconds");
}
