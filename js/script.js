console.log("script.js connected!");

let question = document.querySelectorAll(question-block)

let buttons = document.querySelectorAll("#answer-btn");

buttons.forEach(function(button){
    button.addEventListener("click", function() {
        console.log("button clicked!");
    })
})