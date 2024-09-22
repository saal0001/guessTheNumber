console.log("jeg er i guess number")

const lblMessage = document.querySelector(".message");
console.log(lblMessage);
console.log(lblMessage.textContent)

const lblNumber = document.querySelector(".number");
console.log(lblNumber);

const lblScore = document.querySelector(".score")
console.log(lblScore)

const lblHighScore = document.querySelector(".highscore")

const inpGuess = document.querySelector(".guess")
console.log(inpGuess)

const pbGuess = document.querySelector(".check")

const again = document.querySelector(".again")

let secretNumber = 5;

function numberGenerator() {
    secretNumber = Math.trunc(Math.random() * 20 + 1)
}

function checkAnswer() {
    let userInput = Number(inpGuess.value)

    if (userInput < secretNumber) {
        lblMessage.textContent = "number too low"
        document.body.style.backgroundColor = "#990F02"

    } else if (userInput > secretNumber) {
        lblMessage.textContent = "number too high"
        document.body.style.backgroundColor = "#990F02"

    } else {
        document.body.style.backgroundColor = "#255"
        lblMessage.textContent = "you win click try again if you wanna play another game"
        lblNumber.textContent = secretNumber;

    }
    return userInput
}

function score(){
    let guessedAnswer = checkAnswer()
    let currentScore = Number(lblScore.textContent)

    if (guessedAnswer < secretNumber){
        currentScore--
        lblScore.textContent = currentScore
    }
    else if (guessedAnswer > secretNumber){
        currentScore--
        lblScore.textContent = currentScore
    }
    else {
        if (currentScore>lblHighScore.textContent){
            lblHighScore.textContent = currentScore
        }
    }
}


function resetGame() {
    numberGenerator()
    lblMessage.textContent = "Start guessing"
    lblScore.textContent = 20;
    lblNumber.textContent = "?"
    inpGuess.value = ""
    document.body.style.backgroundColor = "#222"
}


again.addEventListener("click", resetGame);
pbGuess.addEventListener("click", checkAnswer)
pbGuess.addEventListener("click",score)