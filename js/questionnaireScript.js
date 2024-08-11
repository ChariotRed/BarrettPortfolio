document.getElementById('start-questionnaire').addEventListener('click', startQuestionnaire);

const questions = [
    { question: "Do you need a new website?", options: ["Yes", "No"] },
    { question: "Are you looking to improve your social media presence?", options: ["Yes", "No"] },
    { question: "Do you require data analysis services?", options: ["Yes", "No"] },
];

let answers = [];

function startQuestionnaire() {
    document.getElementById('start-questionnaire').style.display = 'none'; // Hide start button
    renderQuestion(0); // Start with the first question
}

function renderQuestion(index) {
    if(index >= questions.length) {
        showRecommendation(); // Show the final recommendation if all questions have been answered
        return;
    }

    let questionContainer = document.getElementById('questions-container');
    questionContainer.innerHTML = `<h4>${questions[index].question}</h4>`;

    questions[index].options.forEach(option => {
        let button = document.createElement('button');
        button.textContent = option;
        button.className = 'btn btn-secondary m-2';
        button.onclick = function() {
            answers[index] = option;
            renderQuestion(index + 1); // Render the next question
        };
        questionContainer.appendChild(button);
    });
}

function showRecommendation() {
    // Logic to determine the recommended package based on answers
    // This is a simple example; you can create more complex logic based on your needs
    let recommendation = "Based on your answers, I recommend the following service package: ";
    if(answers.includes("Yes")) {
        recommendation += "<h5 class='text-primary'>Custom Website Development</h5><h5 class='text-primary'>Social Media Boost</h5>";
    } else {
        recommendation += "Consulting Sessions to better understand your needs.";
    }

    document.getElementById('questions-container').innerHTML = recommendation;
}
