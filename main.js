const question = {
    stem: "Who is in Grant's Tomb?",
    Option1: "George",
    Option2: "Grant",
    Option3: "Gina",
    Option4: "Gary",
    correct: 2,
    display: () => {
        document.querySelector('#stem').textContent = question.stem
        //display the question options here
        document.querySelector('#answer1').textContent = question.Option1
        document.querySelector('#answer2').textContent = question.Option2
        document.querySelector('#answer3').textContent = question.Option3
        document.querySelector('#answer4').textContent = question.Option4
    },
    check: (userChoice) => {
        if (userChoice === question.correct) {
            document.querySelector(".feedback").textContent = "You are correct!"
        } //do else statement
        else {
            document.querySelector(".feedback").textContent = "Try again"
        }
    }
}

document.querySelector('#answer1').addEventListener('click', () => question.check(1))
document.querySelector('#answer2').addEventListener('click', () => question.check(2))
document.querySelector('#answer3').addEventListener('click', () => question.check(3))
document.querySelector('#answer4').addEventListener('click', () => question.check(4))

question.display()