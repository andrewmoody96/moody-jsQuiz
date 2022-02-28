// START THE QUIZ ---
// Start quiz upon click of a "start quiz" button. --- CHECK

// As part of the quiz, also start a timer.
// When the quiz starts, remove the "start quiz" button.

// SELECTING ANSWERS ---
// When an answer button is selected, display the next question.
// If correct, display "Correct", else display "Incorrect" and subtract time from the timer.

// GAME OVER ---
// If timer === 0, display the score (equal to the amount of time left).
// Display a text input to store user's initials and score in localStorage.
// After clicking submit, display "Scores" and the last user's initials and score on the page.

function timer() {}

function theQuiz() {
  timer;
  console.log("Quiz Started");
  startBtn.style.display = "none";
  for (i = 0; i < myQuestions.length; i++) {
    console.log(`Question: ${myQuestions[i].question}`);
  }
}

// VARIABLES
var startBtn = document.getElementById("startBtn");
var submitBtn = document.getElementById("submitBtn");
var scoresBtn = document.getElementById("scoresBtn");
// object containing all questions
const myQuestions = [
  {
    question: "Inside which HTML element do we put our JavaScript?",
    answers: {
      a: "head",
      b: "p",
      c: "body",
    },
    correctAnswer: "c",
  },
  {
    question: "Which code example will display 'Hello World' in an alert?",
    answers: {
      a: 'alert("Hello World")',
      b: 'display("Hello World")',
      c: 'alert: "Hello World"',
    },
    correctAnswer: "a",
  },
  {
    question: "How do you call a function named 'myFunction'?",
    answers: {
      a: "call {myFunction()}",
      b: "myFunction()",
      c: "call function myFunction()",
    },
    correctAnswer: "b",
  },
  {
    question:
      "How do you write an IF statement to execute code when 'i' is not equal to 5?",
    answers: {
      a: "if [i !=5]",
      b: "if (i != 5)",
      c: "if i(!= 5)",
    },
    correctAnswer: "b",
  },
  {
    question: "How do you create a function in JavaScript?",
    answers: {
      a: "function myFunction()",
      b: "function = myFunction()",
      c: "function:myFunction()",
    },
    correctAnswer: "a",
  },
];

// EVENT LISTENERS:
// -------------------------------------------------------------------------------------
startBtn.addEventListener("click", theQuiz);
