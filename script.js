const questions = [
    {
        question: "first potus?",
        answers : [
            { text: "ben frank", correct: false},
            { text: "georgie washed", correct: false},
            { text: "g washington", correct: true},
            { text: "abe lincoln", correct: false},
        ]
    },
    {
        question: "Current Potus?",
        answers : [
            { text: "G Bush", correct: false},
            { text: "georgie washed", correct: false},
            { text: "Kamala Harris", correct: false},
            { text: "D J Trump", correct: true},
        ]
    },
    {
        question: "Current sdfsdfdfdsfPotus?",
        answers : [
            { text: "G Bush", correct: false},
            { text: "georgie washed", correct: false},
            { text: "Kamala Harris", correct: false},
            { text: "D J Trump", correct: true},
        ]
    },
    {
        question: "Csfsdfsdfurrent Potus?",
        answers : [
            { text: "G Bush", correct: false},
            { text: "georgie washed", correct: false},
            { text: "Kamala Harris", correct: false},
            { text: "D J Trump", correct: true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }else{
        selectedBtn.classList.add("incorrect");
    }
}

startQuiz();

