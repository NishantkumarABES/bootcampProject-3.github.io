const question = [
    {
        "Ques" : "Which is the following is a markup language?",
        "a": "HTML",
        "b": "CSS",
        "c": "JavaScript",
        "d": "Php",
        "correct": "a"
    },
    {
        "Ques" : "Who invented the first computer?",
        "a": "Alan Turing",
        "b": "Charles Babbage",
        "c": "Nishant Kumar",
        "d": "Utkarsh Goel",
        "correct": "b"
    },
    {
        "Ques" : "When was Python developed?",
        "a": "1990",
        "b": "1993",
        "c": "1991",
        "d": "2000",
        "correct": "c"
    },
]
let index = 0;
let total = question.length;
let right = 0 , wrong = 0; 
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () =>{
    if(index==total){
        return endQuiz();
    }
    reset();
    const data = question[index];
    quesBox.innerText = `${index+1}) ${data.Ques}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}
const submitQuiz = () =>{
    const data = question[index];
    const ans = getAnswer();
    if(ans == data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer = () =>{
    let answer;
    optionInputs.forEach(
        (input) => {
            if(input.checked){
                answer = input.value;
            }
        }
    )
    return answer;
}
const reset = () =>{
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}
const endQuiz= () =>{
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
        <h3> Thank you for playing the Quiz</h3>
        <h2>${right}/${total} are correct </h2>
    </div>
    `
}
loadQuestion();