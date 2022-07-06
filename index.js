console.clear();

/**
 * VARIABLE DECLARATION
 */
const submitButton = document.querySelector('[data-js="card__submitButton"]');
const cardAnswer = document.querySelector("[data-js='card__answer']");
const bookmarkBtn = document.querySelector('[data-js="bookmark--active"]');

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
  bookmarkBtn.classList.toggle(".button_bookmark--show");
});

// SHOW ANSWER
submitButton.addEventListener("click", function showAnswer() {
  cardAnswer.classList.toggle(".card__answer--hidden");

  // TODO - add line that changes buttontext to
  //        "hide answer"
});
