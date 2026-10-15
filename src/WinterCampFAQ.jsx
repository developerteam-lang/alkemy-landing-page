
import { useState } from "react";
import "./WinterCampFAQ.css";

const faqItems = [
  {
    question: "What is the AI Winter Camp for Students?",
    answer:
      "The AI Winter Camp is a guided learning program where students explore artificial intelligence, learn practical AI tools, and build creative projects through hands-on activities.",
  },
  {
    question: "Who can join the AI Winter Camp?",
    answer:
      "Students from Classes 5–12 can join the AI Winter Camp. The program is designed to help students discover AI and develop useful skills through guided learning.",
  },
  {
    question: "What will students learn in the AI Winter Camp?",
    answer:
      "Students will explore AI tools, academic applications, creative projects, and practical use cases. They will also work on assignments and projects with guided support.",
  },
  {
    question: "Will students learn AI tools without coding?",
    answer:
      "Yes. Students can explore many AI tools without coding. They will learn how to use AI for creative projects, productivity, learning, and other practical applications.",
  },
];

export default function WinterCampFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <section className="winter-faq">
      <div className="winter-faq__container">
        <div className="winter-faq__heading">
          <p className="winter-faq__eyebrow">
            WHAT PARENTS WANT TO KNOW
          </p>

          <h2 className="winter-faq__title">
            Frequently Asked Questions (FAQ)
          </h2>
        </div>

        <div className="winter-faq__list">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `winter-faq-answer-${index}`;

            return (
              <div
                className={`winter-faq__item ${
                  isOpen ? "winter-faq__item--open" : ""
                }`}
                key={item.question}
              >
                <button
                  type="button"
                  className="winter-faq__question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                >
                  <span>{item.question}</span>

                  <span
                    className="winter-faq__toggle"
                    aria-hidden="true"
                  >
                    {isOpen ? (
                      <svg viewBox="0 0 20 20" fill="none">
                        <path
                          d="M5.5 10h9"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                        />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 20 20" fill="none">
                        <path
                          d="M10 5.5v9M5.5 10h9"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </span>
                </button>

                <div
                  className="winter-faq__answer-wrapper"
                  id={answerId}
                  hidden={!isOpen}
                >
                  <p className="winter-faq__answer">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
