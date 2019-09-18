//Set Global Variables

var clockRunning = false;
var intervalId;

//Create objects for questions

var gameData = {
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    timer: 10
}

var myTrivia = [
    {
        question: "A river which flows into another river is called a",
        answers: ["Confluence", "Tributary", "Watershed", "Drainage basin"],
        correct: "Tributary"
    },
    {
        question: "How many whitewater classification categories are there?",
        answers: ["Four", "Six", "Two", "Nine"],
        correct: "Six"
    },
    {
        question: "The place where a river begins is called its:",
        answers: ["Spring", "Confluence", "Source", "Watershed"],
        correct: "Source"
    },
    {
        question: "What year did john wesley powell run the grand canyon?",
        answers: ["1845", "1869", "1922", "1908"],
        correct: "1869"
    }
];

// Display Trivia Intro Game

$('#trivia').html('<button>Start Game</button>');
//Start Game
$('#trivia').on('click', function () { 
    displayQ();
});

function displayQ() { // load up and display question

    $('#trivia').html(myTrivia[0].question);
    createBtns();  // load up possible anwsers
    countDown();
}

//Creates button for all possible answers to a question

function createBtns() { 

    for (var i = 0; i < myTrivia.length; i++) {

        var myAnswers = $('<button>');
        myAnswers.attr('data-name', myTrivia[i].answers[i]);
        myAnswers.text(myTrivia[i].answers[i]);
        $('#trivia-answers').append(myAnswers);


    }
}

function nextQuestion() {
    //need to move from current question to 
}

// If statement - If on click is true, then 
// run win function

// else if loss function


// Once game is complete, display

//correct anwsers, incorrect anwsers, unanswered


// may not need ???? // Function to Run game
            function startGame() {

                if (myTrivia[0]) {

                }


                if (!clockRunning) {
                    intervalId = setInterval(countDown, 1000);
                    clockRunning = true;
                }
            }


// Timer Functions 

function countDown() {
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    gameData.timer--;
    $('#countdown').text("Time Remaining: " + gameData.timer);

    if (gameData.timer === 0) {
        stop();
        nextQuestion(); //if timer runs out move to next question
        gameData.unanswered++;
    }

}

function stop() {
    clearInterval(intervalId);
}



// Game Reset

function reset() {
    gameData.timer = 10;
    $('#countdown').text("Time Remaining: 10 Seconds");
}