console.clear();

export default function Card() {
  const card = document.querySelector("[data-js='card']");

  // console.log(card);

  const cards = [
    {
      question: "What did Morpheus say?",
      answer: "Red or blue pill?",
      tags: ["a", "b", "c", "d"],
    },
    {
      question: "What did Niobe say?",
      answer: "Something important!",
      tags: ["a", "b", "c", "d"],
    },
    {
      question: "What did Cypher say?",
      answer: "Ignorance is bliss!",
      tags: ["a", "b", "c", "d"],
    },
    {
      question: "What did Agent Smith say?",
      answer: "Mr. Anderson!",
      tags: ["a", "b", "c", "d"],
    },
  ];

  console.log(cards[0].tags);

  const main = document.querySelector("[data-js='main']");
  //console.log(main);

  /**
   * CARD GENERATION
   */
  cards.forEach((card) => {
    // Card
    const quizCard = document.createElement("article");
    quizCard.classList.add("card");

    // Bookmark--Button
    const bookmark = document.createElement("button");
    bookmark.classList.add("button");

    // Bookmark--Image--1
    const bookmark_active = document.createElement("img");
    bookmark_active.classList.add("bookmark--active");

    // Bookmark--Image--2
    const bookmark_inactive = document.createElement("img");
    bookmark_inactive.classList.add("bookmark--inactive");

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

    // loop over ul

    // create 4 li elements for every card individually

    //####  APPEND  #####
    main.append(quizCard);
    quizCard.append(
      bookmark,
      bookmark_active,
      bookmark_inactive,
      questionText,
      answerButton,
      tipButton,
      answerText
    );
  });
}
