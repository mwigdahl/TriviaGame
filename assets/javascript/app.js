//Set Global Variables
var intervalId;
var gameData = {
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    qcounter: 0,
    endGame: false,
    timer: 10
}
var myTrivia = [
    {
        question: "A river which flows into another river is called a",
        choices: ["Tributary", "Confluence", "Watershed", "Drainage basin"],
        correct: "Tributary"
    },
    {
        question: "How many whitewater classification categories are there?",
        choices: ["Four", "Six", "Two", "Nine"],
        correct: "Six"
    },
    {
        question: "The place where a river begins is called its:",
        choices: ["Spring", "Confluence", "Source", "Watershed"],
        correct: "Source"
    },
    {
        question: "What year did john wesley powell run the grand canyon?",
        choices: ["1845", "1869", "1922", "1908"],
        correct: "1869"
    }
];

// Display Trivia Intro Game
$('#trivia').html('<button>Start Game</button>');

//Start Game
$('#trivia').on('click', function () {
    displayQ();
});


// load up and display question
function displayQ() {
    if (gameData.qcounter < 4 && !gameData.endGame) {
        $('#trivia').html(myTrivia[gameData.qcounter].question);
        $('#answer').empty();
        $('#next-question').empty();
        createBtns();  // load up possible choices
        countDown();  // start interval countdown

    } else if (gameData.qcounter === 4 && !gameData.endGame) {
        $('#trivia').empty();
        $('#answer').empty();
        $('#next-question').empty();
        endGame = true;
        finalScore();
    }
    $('.anwsers').on('click', function () {

        let selectedAnwser = $(this).attr("data-name");

        if (gameData.timer > 0 && selectedAnwser === myTrivia[gameData.qcounter].correct) {
            gameData.correct++;
            $('#trivia-choices').empty();
            $('#answer').html('<h2>CORRECT!!!</h2>');
            $('#wins').html('Your Wins: ' + gameData.correct);
            $('#losses').html('Your Losses: ' + gameData.incorrect);
            $('#unanswered').html('Unanswered: ' + gameData.unanswered);
            stop();
            nextQuestion();

        } else if (gameData.timer > 0 && selectedAnwser !== myTrivia[gameData.qcounter].correct) {
            gameData.incorrect++;
            $('#trivia-choices').empty();
            $('#answer').html('<h2>WRONG!!!</h2><p>The correct answer is ' + myTrivia[gameData.qcounter].correct + "</p>");
            $('#wins').html('Your Wins: ' + gameData.correct);
            $('#losses').html('Your Losses: ' + gameData.incorrect);
            $('#unanswered').html('Unanswered: ' + gameData.unanswered);
            stop();
            nextQuestion();
        } else if (gameData.timer === 0) {  // Not working properly-- need help.
            gameData.unanswered++;
            $('#trivia-choices').empty();
            $('#trivia').html('<h2>OOPS!!!</h2>');
            $('#wins').html('Your Wins: ' + gameData.correct);
            $('#losses').html('Your Losses: ' + gameData.incorrect);
            $('#unanswered').html('Unanswered: ' + gameData.unanswered);
            stop();
            nextQuestion();
        }
    });
}

//Creates button for all possible choices to a question

function createBtns() {
    $('#trivia-choices').empty();
    for (var i = 0; i < myTrivia[gameData.qcounter].choices.length; i++) {

        var myChoices = $('<button>');
        myChoices.attr('data-name', myTrivia[gameData.qcounter].choices[i]);
        myChoices.addClass('anwsers');
        myChoices.text(myTrivia[gameData.qcounter].choices[i]);
        $('#trivia-choices').append(myChoices);
    }
}

function finalScore() {
    $('#trivia').html('<h2>Game Over!</h2>');
    $('#wins').html('Your Wins: ' + gameData.correct);
    $('#losses').html('Your Losses: ' + gameData.incorrect);
    $('#unanswered').html('Unanswered: ' + gameData.unanswered);
}

function nextQuestion() {
    gameData.qcounter++;
    $('#trivia').empty();
    $('#next-question').html('<button>Next Question</button>');
    $('#next-question').on('click', function () {
        displayQ();
    });
    if (gameData.endGame) {
        finalScore();
    }
}

// Timer Functions 

function countDown() {
    $('#countdown').text("Time Remaining: 10");
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    gameData.timer--;
    $('#countdown').text("Time Remaining: " + gameData.timer);
}

function stop() {
    clearInterval(intervalId);
    $('#countdown').empty();
}