//Set Global Variables

var clockRunning = false;
var intervalId;

//Create objects for questions

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
 if (gameData.qcounter < 4  && !gameData.endGame) {
    $('#trivia').html(myTrivia[gameData.qcounter].question);
    $('#answer').empty();
    $('#next-question').empty();
    createBtns();  // load up possible anwsers
    countDown();
    
} else if (gameData.qcounter === 4  && !gameData.endGame) {
    $('#trivia').empty();
    $('#answer').empty();
    $('#next-question').empty();
    endGame = true;
    finalScore();
} else;
   
    //console.log("timer ", gameData.timer);

    $('.anwsers').on('click', function () {
        
        let selectedAnwser = $(this).attr("data-name");
        console.log("selectedAnswer", selectedAnwser);
        console.log("Correct Answer", myTrivia[gameData.qcounter].correct);

        if ( gameData.timer > 0 && selectedAnwser === myTrivia[gameData.qcounter].correct) {
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
        } else if (gameData.timer === 0) {
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

function questionResult() {
    //gameData.qcounter++;
    $('#trivia').empty();
    $('#trivia-choices').empty();
    reset();
    //nextQuestion();


}
// If statement - If on click is true, then 
// run win function

// else if loss function


// Once game is complete, display

//correct anwsers, incorrect anwsers, unanswered


// if (end)


// Timer Functions 

function countDown() {
    $('#countdown').text("Time Remaining: 10");
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    gameData.timer--;
    $('#countdown').text("Time Remaining: " + gameData.timer);
    
    if (gameData.timer === 0) {
        stop();
        gameData.unanswered++;
        //nextQuestion(); //if timer runs out move to next question
    }
    
}

function stop() {
    clearInterval(intervalId);
    $('#countdown').empty();
    //gameData.timer = 10;
}



// Game Reset

function reset() {
    $('#countdown').empty();
    gameData.timer = 10;
    $('#countdown').text("Time Remaining: 10 Seconds");
}