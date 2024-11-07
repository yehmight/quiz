var score = 0;
var question = 8;
// correct options
var answers = ['b', 'a', 'd', 'b', 'd', 'b', 'd', 'b'];

function submitResult() {
    var form = document.forms['quizForm'];

    // Array of answers for each question
    var userAnswers = [
        form.elements['q1'].value,
        form.elements['q2'].value,
        form.elements['q3'].value,
        form.elements['q4'].value,
        form.elements['q5'].value,
        form.elements['q6'].value,
        form.elements['q7'].value,
        form.elements['q8'].value
    ];

    // Check if all questions have been answered
    for (var i = 0; i < userAnswers.length; i++) {
        if (userAnswers[i] == null || userAnswers[i] == '') {
            alert('Please answer question ' + (i + 1));
            return false;
        }
    }

    // Check answers and calculate the score
    score = 0;
    for (var i = 0; i < userAnswers.length; i++) {
        if (userAnswers[i] === answers[i]) {
            score++;
        }
    }

    // Display the result (for example)
    alert('Your score: ' + score + ' out of ' + question);
    return false;  // Prevent form submission
}
