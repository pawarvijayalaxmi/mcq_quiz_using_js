const questions = [
    {
        question: "1. What is the capital of India?",
        choices: ["Mumbai", "Kolkata", "Delhi", "Chennai"],
        correct: "2"
    },
    {
        question: "2. How many months are there in a year?",
        choices: ["11", "13", "12", "10"],
        correct: "2"
    },
    {
        question: "3. The largest country in the world (Area-wise)?",
        choices: ["Russia", "Canada", "India", "Brazil"],
        correct: "0"
    }
];

let currentQuestionIndex = 0;
let correctAnswersCount = 0;

function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("que-text").textContent = question.question;

    const choicesContainer = document.querySelector(".choices");
    choicesContainer.innerHTML = ''; // Clear previous choices
    question.choices.forEach((choice, index) => {
        choicesContainer.innerHTML += `
            <label>
                <input type="radio" name="choice" value="${index}"> ${choice}
            </label>
        `;
    });

    document.getElementById("result").textContent = "";
}

function submitQuiz(event) {
    event.preventDefault();
    const selected = document.querySelector('input[name="choice"]:checked');
    if (!selected) {
        alert("Please select an answer!");
        return false;
    }

    const selectedValue = selected.value;
    checkAnswer(selectedValue);
    return false;
}

function checkAnswer(selected) {
    const result = document.getElementById("result");
    if (selected === questions[currentQuestionIndex].correct) {
        result.textContent = "It is Correct!";
        correctAnswersCount++;
    } else {
        result.textContent = "It is Incorrect!";
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            document.querySelector(".quiz_container").innerHTML = `
                <p>You got ${correctAnswersCount} out of ${questions.length} questions.</p>
            `;
        }
    }, 2000);
}

showQuestion();