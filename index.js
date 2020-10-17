// url to the api
const url = 'https://jservice.io/api/random';

// some global variables
let questionObject = {};

// query selector for
const questionHTML = document.getElementById('question');
const categoryHTML = document.getElementById('category');
const answerHTML = document.getElementById('answer');

const showButton = document.getElementById('showButton');
showButton.addEventListener('click', showAnswer);

const restartButton = document.getElementById('restartButton');
restartButton.addEventListener('click', restartQuestion)

function getQuestion(){
    let question;
    let answer;
    let category;
    let points;
    answerHTML.innerText = '';
    fetch(url)
        .then(response => response.json())
        .then(data => {
            questionObject.question = data[0].question;
            questionObject.answer = data[0].answer;
            questionObject.category = data[0]['category'].title;
            questionObject.points = data[0].value;

            categoryHTML.innerText = `${questionObject.category} - $${questionObject.points}`;
            questionHTML.innerText = `${questionObject.question}`;


        })
}

function showAnswer(){
    answerHTML.innerText = `${questionObject.answer}`
}

function restartQuestion(){
    getQuestion()
}

getQuestion();