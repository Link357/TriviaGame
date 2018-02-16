var questionOne = "Which company or person originally owned pixar?";
var questionOneAnswers = ['Pixar', 'Lucasfilm', 'Disney', 'Steve Jobs'];
var questionOneRight = 'Lucasfilm';
var questionTwo = "How much did Steve Jobs pay George Lucas for Computer Graphics Division(later renamed pixar)?";
var questionTwoAnswers = ['$5 million, $50 million', '$500 million', '$5 billion'];
var questionTwoRight = '$5 million';
var questionThree = 'How much did Disney pay Steve Jobs for pixar?';
var questionThreeAnswers = ['$740 million', '$1.4 billion', '7.4 billion', '$10.4 billion'];
var questionThreeRight = '7.4 billion';
var questionFour = 'Which pixar film is the best-selling DVD of all time?';
var questionFourAnswers = ['Finding Nemo', 'Up', 'Wally', 'Toy Story 2'];
var questionFourRight = 'Finding Nemo';
var questionFive = ["Which film is pixar's most profitable film?"];
var questionFiveAnswers = ['Toy Story', 'Finding Nemo', 'Up', 'Cars'];
var questionFiveRight = 'Cars';
var count = 30;
var right = 0;
var wrong = 0;
var input;

$("#begin").click(firstQuestion);
console.log(questionOneAnswers[1])
function firstQuestion() {
    $("#begin").empty();
    $('#question').html(questionOne)

    for (var i = 0; i < questionOneAnswers.length; i++) {
        var a = $("<button>");
        a.addClass("choices");
        a.attr("data-name-one", questionOneAnswers[i]);
        a.text(questionOneAnswers[i]);
        $("#answers").append(a);
    }

}
$(".choices").on('click', function () {
    input = $(this).attr("data-name-one");
    if (questionOneAnswers[1] === input) {
        right++;
        $('#question').html('<h1> CORRECT! <h1>');
        secondQuestion()
    }
    else {
        wrong++;
        $('#question').html('<h1> WRONG/OUT OF TIME! ' + questionOneAnswers[1] + ' is the right answer.<h1>')
        secondQuestion()
    }
});



function secondQuestion() {
    $("#begin").empty();
    $('#question').html(questionTwo)

    for (var i = 0; i < questionTwoAnswers.length; i++) {
        var b = $("<button>");
        b.addClass("choices");
        b.attr("data-name-two", questionTwoAnswers[i]);
        b.text(questionTwoAnswers[i]);
        $("#answers").append(b);
    }
}
input = $(this).attr("data-name-two");

if (questionTwoAnswers[0] === input) {
    right++
    $('#question').html('<h1> CORRECT! <h1>');
    threeQuestion()
}
else {
    wrong++;
    $('#question').html('<h1> WRONG/OUT OF TIME! ' + questionTwoAnswers[0] + ' is the right answer.<h1>')
    threeQuestion()
}



function threeQuestion() {
    $("#begin").empty();
    $('#question').html(questionThree)

    for (var i = 0; i < questionThreeAnswers.length; i++) {
        var c = $("<button>");
        c.addClass("choices");
        c.attr("data-name-three", questionThreeAnswers[i]);
        c.text(questionThreeAnswers[i]);
        $("#answers").append(c);
    }
}
input = $(this).attr("data-name-three");

if (questionThreeAnswers[2] === input) {
    right++;
    $('#question').html('<h1> CORRECT! <h1>')
    fourQuestion()
}
else {
    wrong++;
    $('#question').html('<h1> WRONG/OUT OF TIME! ' + questionThreeAnswers[2] + ' is the right answer.<h1>')
    fourQuestion()
}



function fourQuestion() {
    $("#begin").empty();
    $('#question').html(questionFour)

    for (var i = 0; i < questionFourAnswers.length; i++) {
        var d = $("<button>");
        d.addClass("choices");
        d.attr("data-name-four", questionFourAnswers[i]);
        d.text(questionFourAnswers[i]);
        $("#answers").append(d);
    }
}
input = $(this).attr("data-name-four");

if (questionFourAnswers[0] === input) {
    right++;
    $('#question').html('<h1> CORRECT! <h1>')
    fiveQuestion()
}
else {
    wrong++;
    $('#question').html('<h1> WRONG/OUT OF TIME! ' + questionFourAnswers[0] + ' is the right answer.<h1>')
    fiveQuestion()
}



function fiveQuestion() {
    $("#begin").empty();
    $('#question').html(questionFive)

    for (var i = 0; i < questionFiveAnswers.length; i++) {
        var e = $("<button>");
        e.addClass("choices");
        e.attr("data-name-five", questionFiveAnswers[i]);
        e.text(questionFiveAnswers[i]);
        $("#answers").append(e);
    }
}
input = $(this).attr("data-name-five");

if (questionFiveAnswers[3] === input) {
    right++;
    $('#question').html('<h1> CORRECT! <h1>')
    displayScore()
}
else {
    wrong++;
    $('#question').html('<h1> WRONG/OUT OF TIME! ' + questionFiveAnswers[3] + ' is the right answer.<h1>')
    displayScore()
}



function displayScore() {
    document.write('<p>Correct Answers: ' + right + '</P>', '<p>Wrong Answers: ' + wrong + '</p>')

}




