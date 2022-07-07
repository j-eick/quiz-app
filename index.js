console.clear();

/**
 * VARIABLE DECLARATION
 */
const submitButton = document.querySelector('[data-js="card__submitButton"]');
const cardAnswer = document.querySelector("[data-js='card__answer']");
const bookmarkBtn = document.querySelector('[data-js="bookmarkButton"]');
const bookmark_show = document.querySelector('[data-js="bookmark--active"]');

/**
 * CONSOLE TEST
 */
console.log(submitButton);
console.log(cardAnswer);
console.log(bookmarkBtn);
console.log(bookmark_show);

/**
 * BUTTONS
 */
// BOOKMARK
bookmarkBtn.addEventListener("click", () => {
  console.log("bla");
  bookmark_show.classList.toggle("button__bookmark--show");
});

// SHOW ANSWER
submitButton.addEventListener("click", () => {
  cardAnswer.classList.toggle("card__answer--hidden");

  // TODO - add line that changes buttontext to
  //        "hide answer"
});
