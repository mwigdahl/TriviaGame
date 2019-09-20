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
        answers: ["Tributary", "Confluence", "Watershed", "Drainage basin"],
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


// load up and display question
function displayQ() {

    $('#trivia').html(myTrivia[gameData.qcounter].question);
    createBtns();  // load up possible anwsers
    selectBtn();
    countDown();
    

    
    

    if (gameData.qcounter < 5 ) {
        // make game switch

    }

    if (gameData.qcounter !== 5 ) {
        //gameData.qcounter++;
    } else if (gameData.qcounter === 5 && !gameData.endGame) {
        stop();
        endGame = true;
    }
}

//Creates button for all possible answers to a question

function createBtns() {
    for (var i = 0; i < myTrivia.length; i++) {

        var myAnswers = $('<button>');
        myAnswers.attr('data-name', myTrivia[gameData.qcounter].answers[i]);
        myAnswers.addClass('anwsers');
        myAnswers.text(myTrivia[gameData.qcounter].answers[i]);
        $('#trivia-answers').append(myAnswers);

    }

}

function selectBtn() {
    $('.anwsers').on('click', function () {

        var selectedAnwser = $(this).attr("data-name");
        console.log("data-name ", selectedAnwser);
        console.log(myTrivia[gameData.qcounter].correct);   
        
        if (selectedAnwser === myTrivia[gameData.qcounter].correct) {
            gameData.qcounter++;
            $('#trivia-answers').empty();
            $('#trivia').html('<h2>CORRECT!!!</h2>');
            questionResult();
            stop();
        } else if (selectedAnwser !== myTrivia[gameData.qcounter].correct) {
            gameData.incorrect++;
            $('#trivia-answers').empty();
            $('#trivia').html('<h2>WRONG!!!</h2>');
            questionResult();
            stop();
        }
    });

}

function nextQuestion() {
    //need to move from current question to 

}

function questionResult() {
    //$('#trivia').empty();
    $('#trivia-answers').empty();
    // $('#trivia').html('<h2>Show something.</h2>');
    $('#wins').html('Your Wins: ', gameData.correct);
    $('#losses').html('Your Losses: ', gameData.incorrect);
}
// If statement - If on click is true, then 
// run win function

// else if loss function


// Once game is complete, display

//correct anwsers, incorrect anwsers, unanswered


// if (end)


    // Timer Functions 

    function countDown() {
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
}



// Game Reset

function reset() {
    gameData.timer = 10;
    $('#countdown').text("Time Remaining: 10 Seconds");
}