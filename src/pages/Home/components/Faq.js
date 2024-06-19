import React from "react";
import { Accordion } from "./Accordion";

export const Faq = () => {
  const faqs = [
    {
      id: "1",
      question: "Question 1?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, quis sequi! Dolorum quo, tempore a rem ad delectus, qui ullam illum quibusdam nihil fugiat quae maiores quis dolore, labore nemo.",
    },
    {
      id: "2",
      question: "Question 2?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, quis sequi! Dolorum quo, tempore a rem ad delectus, qui ullam illum quibusdam nihil fugiat quae maiores quis dolore, labore nemo.",
    },
    {
      id: "3",
      question: "Question 3?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, quis sequi! Dolorum quo, tempore a rem ad delectus, qui ullam illum quibusdam nihil fugiat quae maiores quis dolore, labore nemo.",
    },
  ];
  return (
    <>
      <section id="faq">
        <h2 className="text-3xl text-center font-semibold dark:text-slate-100 mb-5 section-title">
          FAQs
        </h2>
        <div id="accordion-collapse" data-accordion="collapse">
          {faqs.map((faq) => (
            <Accordion
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </section>
    </>
  );
};
