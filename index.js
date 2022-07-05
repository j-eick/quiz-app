let submitButton = document.querySelector('[data-js="card_submitButton"]');
console.log(submitButton);
let cardAnswer = document.querySelector('[data-js="card__answer--hidden"]');
console.log(cardAnswer);

submitButton.addEventListener("click", clickyDiClick);

function clickyDiClick() {
  cardAnswer.classList.toggle("card__answer--hidden");
  <></>;
}
