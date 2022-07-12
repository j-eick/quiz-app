console.clear();

export default function Card() {
  const card = document.querySelector("[data-js='card']");

  // console.log(card);

  const cards = [
    {
      question: "What did Morpheus say?",
      Answer: "Red or blue pill?",
      Tags: ["a", "b", "c", "d"],
    },
    {
      question: "What did Niobe say?",
      Answer: "Something important!",
      Tags: ["a", "b", "c", "d"],
    },
    {
      question: "What did Cypher say?",
      Answer: "Ignorance is bliss!",
      Tags: ["a", "b", "c", "d"],
    },
    {
      question: "What did Agent Smith say?",
      Answer: "Mr. Anderson!",
      Tags: ["a", "b", "c", "d"],
    },
  ];
  console.log(cards);

  const main = document.querySelector("[data-js='main']");
  console.log(main);

  /**
   * CARD Reneration
   */
  cards.forEach((card) => {
    // Card
    const quizCard = document.createElement("article");
    quizCard.classList.add("card");

    // Bookmark
    const bookmark = document.createElement("button");
    bookmark.classList.add(
      "button",
      "button__bookmark--active",
      "button__bookmark--inactive",
      "button__bookmark--show"
    );

    // Question
    const questionText = document.createElement("p");
    questionText.classList.add("card__text");
    questionText.innerText = card.question;

    // AnswerButton
    const answerButton = document.createElement("button");
    answerButton.classList.add("card__submit", "card__submitButton");
    answerButton.innerText = "Show Answer";
    answerButton.addEventListener("click", () => {
      answerText.classList.toggle("card__answer--hidden");
    });

    // TipButton
    const tipButton = document.createElement("button");
    tipButton.classList.add("card__submit", "card__tipButton");
    tipButton.innerText = "Show tip";

    // Answer
    const answerText = document.createElement("p");
    answerText.classList.add(
      "card__answer",
      "card__answer>p",
      "answer_left",
      "answer_right"
    );

    //####  APPEND  #####
    main.append(quizCard);
    quizCard.append(
      bookmark,
      questionText,
      answerButton,
      tipButton,
      answerText
    );
  });
}
