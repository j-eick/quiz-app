console.clear();

export default function Card() {
  const card = document.querySelector("[data-js='card']");

  console.log(card);

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

  /**
   * CARD Reneration
   */
  cards.forEach((card) => {
    const quizCards = document.create("article");
    quizCards.classList.add("card");
  });
}
