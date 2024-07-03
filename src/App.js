import { useState } from "react";

const questionArr = [
  {
    question: "Where are these chairs assembled?",
    answer:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. At ex aliquam,tempora quod voluptasvoluptate blanditiis consectetur vitae, error nisi, eaque ipsum ratione qui quasi voluptatibus veniam? Eum, cupiditatesed!",
  },
  {
    question: "How long do i have to return my chair?",
    answer:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. At ex aliquam,tempora quod voluptasvoluptate blanditiis consectetur vitae, error nisi, eaque ipsum ratione qui quasi voluptatibus veniam? Eum, cupiditatesed!",
  },
  {
    question: "Do you ship to countries outside EU?",
    answer:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. At ex aliquam,tempora quod voluptasvoluptate blanditiis consectetur vitae, error nisi, eaque ipsum ratione qui quasi voluptatibus veniam? Eum, cupiditatesed!",
  },
];

export default function App() {
  return (
    <main className="body">
      <Body />
    </main>
  );
}

function Body() {
  const [isOpen, setIsOpen] = useState(null);
  function handleOpen(id) {
    setIsOpen(id);
  }
  return (
    <div className="inner-container">
      {questionArr.map((cur, ind, arr) => (
        <Accordion
          num={ind + 1}
          question={cur.question}
          answer={cur.answer}
          key={ind + 1}
          curOpen={isOpen}
          handleOpen={handleOpen}
        />
      ))}
    </div>
  );
}

function Accordion({ num, question, answer, curOpen, handleOpen }) {
  const isOpen = curOpen === num;

  return (
    <div className={isOpen ? "accord" : "closeAccord"}>
      <div className="question">
        <span>{`0${num}`}</span> <p>{question}</p>
        <span onClick={() => handleOpen(num)} className="min">
          {isOpen ? "-" : "+"}
        </span>
      </div>
      <div className={isOpen ? "answer" : "closeAnswer"}>{answer}</div>
    </div>
  );
}
