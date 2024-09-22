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
    let currentScore = Number(lblScore.textContent)
    let userInput = Number(inpGuess.value)

    if (userInput < secretNumber) {
        lblMessage.textContent = "number too low"
        document.body.style.backgroundColor = "#990F02"
        currentScore--
        lblScore.textContent = currentScore

    } else if (userInput > secretNumber) {
        lblMessage.textContent = "number too high"
        document.body.style.backgroundColor = "#990F02"
        currentScore--
        lblScore.textContent = currentScore

    } else {
        document.body.style.backgroundColor = "#255"
        lblMessage.textContent = "you win click try again if you wanna play another game"
        lblNumber.textContent = secretNumber;
        if (currentScore > lblHighScore.textContent) {
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