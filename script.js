var page = document.getElementById("page");
var messageDisplay = document.getElementById("message");
var button = document.getElementById("button");

var timerId = null;
var changeColorTime = null;

button.addEventListener("click", click);

function click() {
    if (timerId == null) {
        messageDisplay.innerHTML = "Click when the page is blue.";
        button.innerHTML = "Stop";
        var delay = Math.floor(Math.random() * 8000) + 2000;
        timerId = setTimeout(changeColor, delay);
    }
    else {
        if (changeColorTime == null) {
            clearTimeout(timerId);
            messageDisplay.innerHTML = "You clicked too soon.";
        }
        else {
            var reactionTime = Date.now() - changeColorTime;
            messageDisplay.innerHTML = "Reaction: " + reactionTime + " milliseconds";
        }

        page.style.backgroundColor = "";
        button.innerHTML = "Start";
        timerId = null;
        changeColorTime = null;
    }
}

function changeColor() {
    page.style.backgroundColor = "#add8e6";
    changeColorTime = Date.now();
}
