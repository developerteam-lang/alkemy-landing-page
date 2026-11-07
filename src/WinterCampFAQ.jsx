
import { useState } from "react";
import "./WinterCampFAQ.css";

const faqItems = [
  {
    question: "Does my child need coding experience?",
    answer:
      "No coding is required. Children use no-code tools and prompt engineering, the same approach used by professional product teams. The program is designed for complete beginners.",
  },
  {
    question: "What grade levels is this for?",
    answer:
      "AI Explorers is designed for students in Grades 8 to 12. The curriculum adapts to different levels, so whether your child is in 8th grade or 12th, they will find it engaging and appropriately challenging. Younger children with a genuine interest in AI are also welcome. Reach out and we will help you decide if it is the right fit.",
  },
  {
    question: "What will my child have at the end of the program?",
    answer:
      "Six outcomes: a working AI-powered product with a live URL, a product concept document, a personal prompt library, a Demo Day recording, an AI Literacy Certificate, and real presentation experience in front of a live audience.",
  },
  {
    question: "How does this help with college applications?",
    answer:
      "Your child finishes with a live product URL, a documented concept, and a demo recording. These are concrete artifacts they can present in SOPs, interviews and portfolios, assets most applicants simply do not have.",
  },
   {
    question: "What is Demo Day?",
    answer:"On the Saturday of week 2, your child presents their product live to parents, peers and evaluators in a 2-hour virtual session. Audience members scan QR codes to try each product on their own phones. There are peer awards for Best Innovation, Best Design, Best Social Impact and Best Presentation."
   },
   {
    question: "How are sessions conducted?",
    answer:"A 2-week program: 10 live online sessions, Monday to Friday, 1.5 hours per session (15 hours total), 7:00 to 8:30 pm IST (5:30 to 7:00 pm UAE). Every session is live and trainer-led with direct interaction, and your child can message trainers between sessions via WhatsApp."
   },
   {
     question:"How much work is there between sessions?",
     answer:"Light, structured tasks between sessions keep the build moving. Three artifacts are produced outside live hours (the Prompt Library, the Product Concept Document and the Demo Day slides) so that 15 live hours can carry six outcomes."
   },
   {
    question:"Will I receive updates during the program?",
    answer:"Yes. You receive progress updates throughout the 2 weeks, your child's nightly build log is shared with you at Demo Day, and post-program deliverables include the demo recording, product URL, documentation and certificate."
   },
   {
    question:"What is the AI Trust Check?",
    answer:"A 3-step framework your child learns: 1) Verify the facts, 2) Question the logic, 3) Add your own judgment. Introduced in Session 2, applied during research in Session 3, and habitual in every build session. It teaches children to use AI with intelligence and critical thinking, not dependence."
   }

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
