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
    // Question
    const questionText = document.createElement("p");
    questionText.classList.add("card__text");
    questionText.innerText = card.question;
    // SubmitButton
    const answerButton = document.createElement("button");
    answerButton.classList.add("card__submitButton");
    // TipButton
    const tipButton = document.createElement("button");
    tipButton.classList.add(".card__tipButton");
    // Answer
    const answerText = document.createElement("p");
    answerText.classList.add("card__answer>p");

    //APPEND
    main.append(quizCard);
    quizCard.append(questionText, answerButton, tipButton, answerText);
  });
}
