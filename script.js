
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')


let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
console.log('Started');
startButton.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
setNextQuestion()
}


function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
function  showQuestion(question) {
    questionElement.innerText =  question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}
function resetState(){
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')

    }else {
        startButton.innerText =  'Restart'
        startButton.classList.remove('hide')
    }
}
function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [

   {
     question: 'The social media app that only lets you view your pictures and messages for a while is?',
        answers: [
            {text: 'Facebook', correct: false},
            { text: 'Instagram', correct: false },
            { text: 'Snapchat', correct: true },
            { text: 'Twitter', correct: false }
        ]
   },
   {
        question: 'From 2017 onwards, how many characters long could tweets be? ',
        answers: [
            { text: '280 characters', correct: true },
            { text: '200 characters', correct: false },
            { text: '250 characters', correct: false },
            { text: '270 characters', correct: false }
        ]
    },
    {
        question: 'What year did the first apple iphone launch',
        answers: [
            { text: '2008', correct: false },
            { text: '2007', correct: true },
            { text: '2006', correct: false },
            { text: '2009', correct: false }
        ]
    },
    {
        question: 'What is the designated section of computer memory used for storing data called ',
        answers: [
            { text: 'Memory card', correct: false },
            { text: 'Memory Slot', correct: false },
            { text: 'Memory bank', correct: true },
            { text: 'Memory Drive', correct: false }
        ]
    },
   {
        question: 'Digital images can be divided into Vector and?',
        answers: [
            { text: 'Lossy', correct: false },
            { text: 'Dithered', correct: false },
            { text: 'Raw', correct: false },
            { text: 'Raster', correct: true }
        ]
    }



]
 