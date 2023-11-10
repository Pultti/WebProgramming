
// 1. Create a variable called `correctAnswer` and set it to the string "swan"
// 2. Create a variable called `attempts` and set it to 0
// 3. Create a variable called `maxAttempts` and set it to 5
// 4. Create a variable called `gameOver` and set it to false
// 5. Create a function called `checkAnswer` that does the following:
//   - Gets the value of the input field
//   - If the value is equal to the correct answer, display a happy face
//   - If the value is not equal to the correct answer, display a sad face
//   - If the value is not equal to the correct answer and the number of attempts is less than the max attempts, display a partial face
//   - If the value is not equal to the correct answer and the number of attempts is equal to the max attempts, display a sad face and display a message that the quiz is over
// 6. Add an event listener to the form that calls the `checkAnswer` function when the form is submitted
// 7. Create a function called `buildSmiley` that takes in two parameters: `mood` and `attempts`
//   - If the mood is "happy", display all components for a happy face
//   - If the mood is "partial", display the components for a happy face based on the number of attempts
//   - If the mood is "sad", display all components for a sad face
// 8. Call the `buildSmiley` function from the `checkAnswer` function
// 9. Create a function called `showMessage` that takes in two parameters: `message` and `color`
//   - Display the message in the `message` element
//   - Set the color of the message to the color passed in
//   - Display the message element
// 10. Call the `showMessage` function from the `checkAnswer` function
// 11. Create a variable called `gameOverMessage` and set it to "Wrong answers, quiz over."
// 12. Create a variable called `correctAnswerMessage` and set it to "Congratz"
// 13. Create a variable called `tryAgainMessage` and set it to "Try again!"
// 14. Create a variable called `tryAgainColor` and set it to "Orange"
// 15. Create a variable called `correctAnswerColor` and set it to "Green"
// 16. Create a variable called `gameOverColor` and set it to "Red"
// 17. Create a variable called `border` and set it to the element with the id "border"
// 18. Create a variable called `eye1` and set it to the element with the id "eye1"
// 19. Create a variable called `eye2` and set it to the element with the id "eye2"
// 20. Create a variable called `happyMouth` and set it to the element with the id "happyMouth"
// 21. Create a variable called `sadMouth` and set it to the element with the id "sadMouth"
// 22. Create a variable called `messageElement` and set it to the element with the id "message"
// 23. Create a variable called `answer` and set it to the element with the id "answer"


let attempts = 0;
const maxAttempts = 5;
const correctAnswer = "swan";
let gameOver = false;  

function checkAnswer() {
    const answer = document.getElementById('answer').value;
    if (answer.toLowerCase() === "swan") {
        buildSmiley(true);
    } else {
        buildSmiley(false);
    }
}

function showMessage(message, color) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
    messageElement.style.color = color;
    messageElement.style.display = 'block';
}

document.getElementById('quizForm').addEventListener('submit', function(e) {
    e.preventDefault();

    if (gameOver) {
        return;  // <-- Exit the function if the game is over
    }

    attempts++;
    const userAnswer = document.getElementById('answer').value.toLowerCase();

    if (userAnswer === correctAnswer) {
        buildSmiley('happy');
        showMessage('Congratz', 'green');
        gameOver = true;
    } else {
        if (attempts < maxAttempts) {
            buildSmiley('partial', attempts);
            showMessage('Try again!', 'Orange');
        } else {
            buildSmiley('sad');
            showMessage('quiz over.', 'red');
            gameOver = true;
        }
    }
});

function buildSmiley(mood, attempts = 0) {
    if (mood === 'happy') {
        // Display all components for a happy face
        ['border', 'eye1', 'eye2', 'happyMouth'].forEach(id => {
            document.getElementById(id).style.display = 'block';
        });
    } else if (mood === 'partial') {
        // Partially build the face based on the number of attempts
        if (attempts === 1) {
            document.getElementById('border').style.display = 'block';
        } else if (attempts === 2) {
            document.getElementById('eye1').style.display = 'block';
        } else if (attempts === 3) {
            document.getElementById('eye2').style.display = 'block';
        }
    } else if (mood === 'sad') {
        // Display all components for a sad face
        ['border', 'eye1', 'eye2', 'sadMouth'].forEach(id => {
            document.getElementById(id).style.display = 'block';
        });
    }
}



