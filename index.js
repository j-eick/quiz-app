console.clear();

/**
 * VARIABLE DECLARATION
 */
let submitButton = document.querySelector('[data-js="card__submitButton"]');
let cardAnswer = document.querySelector("[data-js='card__answer']");

/**
 * CONSOLE TEST
 */
console.log(submitButton);
console.log(cardAnswer);

/**
 * BUTTONS
 */
submitButton.addEventListener("click", showAnswer);

/**
 * FUNCTIONS
 */
function showAnswer() {
  cardAnswer.classList.toggle("card__answer--hidden");
}
