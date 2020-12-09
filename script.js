$(document).ready(function () {
    //hidden questions to begin the quiz
    $("div#jumbo2,#jumbo3,#jumbo4,#jumbo5,#jumbo6,#jumbo7,#jumbo8,#rightWrong,#rightWrong1,#rightWrong2,#rightWrong3,#rightWrong4").hide();

    //variables referred to back whenever
    var highScore = 0;
    var timerCount = 60;
    var newTimerCount;

    //Alert for user to select start button to begin timer
    alert("Please click 'Begin Quiz' button to start timer before answering question and best of luck!")

    //Code for Question One
    $("#c").on("click", function () {
        highScore = highScore + 7;
        $("#highScoreTally").html(highScore);
        $()
        $("#jumbo1").hide();
        $("#jumbo2").show();
        $("")
    })

    $("#b,#a").on("click", function () {
        highScore = highScore - 5;
        newTimerCount = timerCount - 3;
        $("#highScoreTally").html(highScore);
        $("#jumbo1").hide();
        $("#jumbo2").show();
    })

    $("#d").on("click", function () {
        highScore = highScore + 0;
        newTimerCount = timerCount - 3;
        $("#highScoreTally").html(highScore);
        $("#jumbo1").hide();
        $("#jumbo2").show();
        alert("Touché!");
    })

    //Code for Question two
    $("#a1").on("click", function () {
        highScore = highScore + 7;
        $("#highScoreTally").html(highScore);
        $("#jumbo2").hide();
        $("#jumbo3").show();
    })

    $("#b1,#c1").on("click", function () {
        highScore = highScore - 5;
        newTimerCount = timerCount - 3;
        $("#highScoreTally").html(highScore);
        $("#jumbo2").hide();
        $("#jumbo3").show();
    })

    $("#d1").on("click", function () {
        highScore = highScore + 0;
        newTimerCount = timerCount - 3;
        $("#highScoreTally").html(highScore);
        $("#jumbo2").hide();
        $("#jumbo3").show();
    })

    //Code for Question three
    $("#b2").on("click", function () {
        highScore = highScore + 7;
        $("#highScoreTally").html(highScore);
        $("#jumbo3").hide();
        $("#jumbo4").show();
    })

    $("#a2,#c2").on("click", function () {
        highScore = highScore - 5;
        newTimerCount = timerCount - 3;
        $("#highScoreTally").html(highScore);
        $("#jumbo3").hide();
        $("#jumbo4").show();
    })

    $("#d2").on("click", function () {
        highScore = highScore + 0;
        newTimerCount = timerCount - 3;
        $("#highScoreTally").html(highScore);
        $("#jumbo3").hide();
        $("#jumbo4").show();
    })

    //Code for Question four
    $("#d3").on("click", function () {
        highScore = highScore + 7;
        $("#highScoreTally").html(highScore);
        $("#jumbo4").hide();
        $("#jumbo5").show();
        alert("Beast Mode Activated!");
    })

    $("#a3,#c3,#b3").on("click", function () {
        highScore = highScore - 5;
        newTimerCount = timerCount - 3;
        $("#highScoreTally").html(highScore);
        $("#jumbo4").hide();
        $("#jumbo5").show();
    })

    //Code for Question five
    $("#b4").on("click", function () {
        highScore = highScore + 7;
        $("#highScoreTally").html(highScore);
        $("#jumbo5").hide();
        endQuiz();
    })

    $("#a4,#c4").on("click", function () {
        highScore = highScore - 5;
        newTimerCount = timerCount - 3;
        $("#highScoreTally").html(highScore);
        $("#jumbo5").hide();
        endQuiz();
    })

    $("#d4").on("click", function () {
        highScore = highScore + 0;
        newTimerCount = timerCount - 3;
        $("#highScoreTally").html(highScore);
        $("#jumbo5").hide();
        endQuiz();
    })
    
    //Code for high score
    $("#finalScore").on("click", function () {
        highScore = localStorage.getItem("High-Score")
        $("#highScoreTally").html(highScore)
    })
    
    //code to end quiz and timer
    function endQuiz() {
        $("#jumbo7").show();
        clearInterval(newTimerCount);
        localStorage.setItem(".high-score", highScore)
        $(".high-score").html(highScore)
    }
    
    //code for timer countdown
    function timerCounter () {
        timerCount--;
        $("#timerTally").html("Time Left: " + timerCount);
        if (timerCount <=0) {
            timerCount = 0;
            endQuiz();
        }
    }

    //code for timer to begin
    function beginQuiz() {
        newTimerCount = setInterval(timerCounter, 1000);
        $(".start").fadeOut();
    }

    //code for start button
    $(".start").on("click", function () {
        $(".start").fadeOut();
        beginQuiz();
    })

    //code for submit button
    $("#finalScore").on("click", function() {
        $('#initialsInput[type="submit"]').each(function(){
            var finalScore = $(this).attribute("#finalScore");
            var value = $(this).value();
            localStorage.setItem(finalScore, value);
        })
        ("#jumbo7").hide();
        ("#jumbo8").show();
    })

    $("#finalScore").on("click", function() {
        $('#initialsInput[type="submit"]').each(function(){
            var finalScore = $(this).attribute("#finalScore");
            var value = localStorage.getItem(finalScore);
            $(this).val(value);
        }); 
        ("#jumbo7").hide();
        ("#jumbo8").show();
    });

    
});