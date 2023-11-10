
//JS timing events
function displayTime() {
    document.getElementById('demo').innerHTML = Date();
}


//JS Error Handling
document.addEventListener("DOMContentLoaded", function () {
    const numeratorInput = document.getElementById("numerator");
    const denominatorInput = document.getElementById("denominator");
    const calculateButton = document.getElementById("calculate");
    const resultElement = document.getElementById("result");

    calculateButton.addEventListener("click", function () {
        const numerator = parseFloat(numeratorInput.value);
        const denominator = parseFloat(denominatorInput.value);

        try {
            if (isNaN(numerator) || isNaN(denominator)) {
                throw new Error("Please enter valid numbers.");
            }

            if (denominator === 0) {
                throw new Error("Division by zero is not allowed.");
            }

            const result = numerator / denominator;
            resultElement.innerHTML = `Result: ${result}`;
        } catch (error) {
            resultElement.innerHTML = `Error: ${error.message}`;
        }
    });
});


// This script is for the PenTesting page. It allows the user to click on the grid items to reveal the hidden text.
var uprightGridItems = document.querySelectorAll(".upright-grid-item");

uprightGridItems.forEach(function(item) {
  item.addEventListener("click", function() {
    var hiddenText = item.querySelector(".hidden-text");
    hiddenText.style.display = (hiddenText.style.display === "block") ? "none" : "block";
  });
});



// Quiz game

let questions = [
    { question: 'What is 2 + 2?', correctAnswer: '4' },
    { question: 'What is 3 + 3?', correctAnswer: '6' },
    { question: 'What is 4 + 4?', correctAnswer: '8' },
    { question: 'What is 5 + 5?', correctAnswer: '10' },
    { question: 'What is 6 + 6?', correctAnswer: '12' },
    // ... add as many questions as you'd like
];
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    document.getElementById('question').textContent = questions[currentQuestion].question;
    let options = document.querySelectorAll('.option');
  
    options.forEach((option, index) => {
      option.textContent = questions[currentQuestion].correctAnswer - index;
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    showQuestion();
  
    document.querySelectorAll('.option').forEach(option => {
      option.addEventListener('click', function(e) {
        if (e.target.textContent === questions[currentQuestion].correctAnswer) {
          score++;
        }
  
        currentQuestion++;
        
        if (currentQuestion < questions.length) {
            showQuestion();
          } else {
            document.getElementById('resultQuiz').textContent = `Your score is ${score}`;
            document.getElementById('resultQuiz').style.display = 'block'; // Show the resultQuiz div
            document.getElementById('quiz-container').style.display = 'none'; // Hide the quiz-container div
          }
          
      });
    });
  });


  // Loop demo

  let text = "";

  for (let i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
  }
  
  document.getElementById("demo").innerHTML = text;



  //Hovering picture
  document.addEventListener('DOMContentLoaded', function() {
    var img = document.getElementById('myImage');
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById('modalImage');
    
    img.addEventListener('click', function() {
      modal.style.display = "block";
      modalImg.src = this.src;
    });
  
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });