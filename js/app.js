//random variable for index
var index = Math.floor(Math.random() * 10);

//generate random question
document.querySelector('#question').innerHTML = quizData[index].question;

const checkAnswerButton = document.querySelector('#checkAnswer');

checkAnswerButton.addEventListener('click', function () {
    var userAnswer = document.querySelector('input').value;
    if (userAnswer == quizData[index].answer) {
        alert('Correct Answer!!');
        location.reload();
    } else {
        alert('Wrong Answer!!');
        location.reload();
    }
});

//30 secs coundown timer 
var timeleft = 30;
var countDownTimer = setInterval(function () {
    timeleft--;
    document.getElementById("countdowntimer").textContent = timeleft;
    if (timeleft <= 0) {
        alert('Sorry, Time up!!');
        clearInterval(countDownTimer);
        location.reload();
    }
}, 1000);