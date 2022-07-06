console.clear();

/**
 * VARIABLE DECLARATION
 */
let submitButton = document.querySelector('[data-js="card__submitButton"]');
let cardAnswer = document.querySelector("[data-js='card__answer']");
let bookmarkBtn = document.querySelector('[data-js="bookmark--inactive"]');

/**
 * CONSOLE TEST
 */
console.log(submitButton);
console.log(cardAnswer);
console.log(bookmarkBtn);

/**
 * BUTTONS
 */
// BOOKMARK
bookmarkBtn.addEventListener("click", function activate() {
  //
});

// SHOW ANSWER
submitButton.addEventListener("click", function showAnswer() {
  cardAnswer.classList.toggle("card__answer--hidden");
  // TODO - add line that changes buttontext to
  //        "hide answer"
});
