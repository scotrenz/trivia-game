var amountCorrect = 0;
var amountWrong = 0;
var unanswered = 0;
var number = 0;
var questions = [];
var time = 5;

questions[0] = {
    question: "Where?",
    answers: ["1", "2", "3", "4"],
    correctIndex: 1,
};

questions[1] = {
    question: "How?",
    answers: ["1", "2", "3", "4"],
    correctIndex: 3,
};

questions[2] = {
    question: "What?",
    answers: ["1", "2", "3", "4"],
    correctIndex: 2,
};

questions[3] = {
    question: "Why?",
    answers: ["1", "2", "3", "4"],
    correctIndex: 0,
};

$(document).ready(function() {

    startScreen();

    function startScreen() {
        number = 0;
        amountCorrect = 0
        amountWrong = 0
        unanswered = 0
        $("#display").html("<div class='row' id='start-screen'><div class='btn btn-danger btn-lg col-md-offset-4 col-md-4' id='start'>Start</div></div>");
        $("#start").on("click", function() {
            questionsScreen();

        });
    };

    function correctScreen() {
        $("#display").html("<div class='panel panel-success col-md-offset-3 col-md-6'><div class= 'panel-heading'>You're Right!</div></div>");
        transition();
    };

    function incorrectScreen() {
        $("#display").html("<div class='panel panel-danger col-md-offset-3 col-md-6'><div class= 'panel-heading'>Wrong!</div><div>The Correct Answer was: <span id='actual-answer'></span></div></div>");
        transition();
        $("#actual-answer").html(actualAnswer)
    };

    function outOfTime() {
        $("#display").html("<div class='panel panel-warning col-md-offset-3 col-md-6'><div class= 'panel-heading'>Out of Time!</div><div>The Correct Answer was: <span id='actual-answer'></span></div></div>");
        transition();
        $("#actual-answer").html(actualAnswer)
    };

    function questionsScreen() {
        timer()
        $("#display").html("<div class='panel panel-heading'><div>Time remaining: <span id='time'>5</span></div><div id='question'></div><div id='container'></div></div>");
        generateQuestion(); 
    };

    function finalScreen() {
        $("#display").html("<div class='panel panel-primary panel-heading'><div class='panel-heading'>All done, here's how you did!</div><div>Correct Answers: <span id='correct'></span></div><div>Incorrect Answers: <span id='incorrect'></span></div><div>Unanswered: <span id='unanswered'></span></div><div class='btn btn-danger btn-lg' id='reset'>Start Over</div></div>");
        $("#correct").html(amountCorrect);
        $("#incorrect").html(amountWrong);
        $("#unanswered").html(unanswered);
        $("#reset").on("click", function() {
            startScreen();
        });
    };

    var clear;

    function timer() {
        var questionTime = setInterval(function() {
            clear = questionTime;
            time--;
            $("#time").html(time);
            if (time === 0) {
                unanswered++;
                number++;
                outOfTime();
                clearInterval(questionTime);
                time = 5;
            };
        }, 1000);
    };

    function transition() {
        var transitionTime = setTimeout(function() {
            if (number === 4) {
                finalScreen();
            } else {
                questionsScreen();
            };

        }, 2000);
    };

    var actualAnswer;

    function generateQuestion() {
        
        var correctLocation = questions[number].correctIndex;
        actualAnswer = questions[number].answers[correctLocation];
        $("#question").html(questions[number].question);
        for (var i = 0; i < questions[number].answers.length; i++) {
            $("#container").append("<div class='selection btn btn-lg btn-primary' data-answer-index=" + i + ">" + questions[number].answers[i] + "</div>");
        }

        $("#container").on("click", ".selection", function() {
            clearInterval(clear);
            var answerIndex = ($(this).data("answerIndex"));
            number++;

            if (answerIndex === correctLocation) {
                amountCorrect++;
                correctScreen();
                time = 5;


            } else {
                amountWrong++;
                incorrectScreen();
                time = 5;

            };

        });
    }

})