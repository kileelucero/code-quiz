$(document).ready(function () {
    //hidden questions to begin the quiz
    $("div#jumbo2,#jumbo3,#jumbo4,#jumbo5,#jumbo6,#jumbo7").hide();

    //variables referred to back whenever
    var highScore = 0;
    var newHighScore = "";
    var timerCount = 60;

    //Alert for user to select start button to begin timer
    alert("Please click 'Begin Quiz' button to start timer before answering question and best of luck!")

    //Code for Question One
    $("#c").on("click", function () {
        highScore = highScore + 7;
        // highScore = newHighScore;
        $("#highScoreTally").html(highScore);
        $("#jumbo1").hide();
        $("#jumbo2").show();
    })

    $("#b,#a").on("click", function () {
        highScore = highScore - 5;
        // highScore = newHighScore;
        $("#highScoreTally").html(highScore);
        $("#jumbo1").hide();
        $("#jumbo2").show();
    })

    $("#d").on("click", function () {
        highScore = highScore + 0;
        // highScore = newHighScore;
        $("#highScoreTally").html(highScore);
        $("#jumbo1").hide();
        $("#jumbo2").show();
        alert("Touché!");
    })

    //Code for Question two
    $("#a1").on("click", function () {
        highScore = highScore + 7;
        // highScore = newHighScore;
        $("#highScoreTally").html(highScore);
        $("#jumbo2").hide();
        $("#jumbo3").show();
    })

    $("#b1,#c1").on("click", function () {
        highScore = highScore - 5;
        // highScore = newHighScore;
        $("#highScoreTally").html(highScore);
        $("#jumbo2").hide();
        $("#jumbo3").show();
    })

    $("#d1").on("click", function () {
        highScore = highScore + 0;
        // highScore = newHighScore;
        $("#highScoreTally").html(highScore);
        $("#jumbo2").hide();
        $("#jumbo3").show();
    })

    //Code for Question three
    $("#b2").on("click", function () {
        highScore = highScore + 7;
        // highScore = newHighScore;
        $("#highScoreTally").html(highScore);
        $("#jumbo3").hide();
        $("#jumbo4").show();
    })

    $("#a2,#c2").on("click", function () {
        highScore = highScore - 5;
        // highScore = newHighScore;
        $("#highScoreTally").html(highScore);
        $("#jumbo3").hide();
        $("#jumbo4").show();
    })

    $("#d2").on("click", function () {
        highScore = highScore + 0;
        // highScore = newHighScore;
        $("#highScoreTally").html(highScore);
        $("#jumbo3").hide();
        $("#jumbo4").show();
    })

    //Code for Question four
    $("#d3").on("click", function () {
        highScore = highScore + 7;
        // highScore = newHighScore;
        $("#highScoreTally").html(highScore);
        $("#jumbo4").hide();
        $("#jumbo5").show();
        alert("Beast Mode Activated!");
    })

    $("#a3,#c3,#b3").on("click", function () {
        highScore = highScore - 5;
        // highScore = newHighScore;
        $("#highScoreTally").html(highScore);
        $("#jumbo4").hide();
        $("#jumbo5").show();
    })

    //Code for Question five
    $("#b4").on("click", function () {
        var timerInterval = setInterval(function () {
            clearInterval(timerInterval);
        })
        highScore = highScore + 7;
        // highScore = newHighScore;
        $("#highScoreTally").html(highScore);
        $("#jumbo5").hide();
        $("#jumbo7").show();
        clearInterval(timerInterval);
    })

    $("#a4,#c4").on("click", function () {
        var timerInterval = setInterval(function () {
            clearInterval(timerInterval);
        })
        highScore = highScore - 5;
        // highScore = newHighScore;
        $("#highScoreTally").html(highScore);
        $("#jumbo5").hide();
        $("#jumbo7").show();
        clearInterval(timerInterval);
    })

    $("#d4").on("click", function () {
        var timerInterval = setInterval(function () {
            clearInterval(timerInterval);
        })
        highScore = highScore + 0;
        // highScore = newHighScore;
        $("#highScoreTally").html(highScore);
        $("#jumbo5").hide();
        $("#jumbo7").show();
    })

    //Code for high score
    $("#finalScore").on("click", function () {
        get(localStorage)
    })

    //code for timer
    $(".start").on("click", function () {
        var timerInterval = setInterval(function () {
            timerCount--;
            $("#timerTally").html("Time Left: " + timerCount);

            if (timerCount === 0) {
                clearInterval(timerInterval);
            }

        }, 1000)
        $(".start").fadeOut();
    })

});