var buttonColors = ["red", "blue", "green", "yellow"];
var randomNumber = nextSequence();

var randomChosenColour = buttonColors[randomNumber];

gamePattern = [];

gamePattern.push(randomChosenColour);

function nextSequence(){
    var num = Math.floor(Math.random()*4);
}

$("#"+ randomChosenColour).fadeOut(100).fadeIn(100);
