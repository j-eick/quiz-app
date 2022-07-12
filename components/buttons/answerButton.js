export default function AnswerButton() {
  const submitButton = document.querySelector('[data-js="card__submitButton"]');
  const cardAnswer = document.querySelector("[data-js='card__answer']");

  submitButton.addEventListener("click", () => {
    //console.log("asd");
    cardAnswer.classList.toggle("card__answer--hidden");
  });
}
