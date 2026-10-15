import React, { useState } from "react";
import "./LiveClasses.css";

const weeks = [
  { label: "WEEK 1", subtitle: "GETTING STARTED" },
  { label: "WEEK 2", subtitle: "AI CREATIVE STUDIO" },
  { label: "WEEK 3", subtitle: "AI INNOVATION LAB" },
  { label: "WEEK 4", subtitle: "BE FUTURE-READY" },
  { label: "WEEK 5", subtitle: "AI SHOWCASE" },
];

const weekContent = [
  // WEEK 1
  {
    heading: "Your First Steps To Becoming AI-Smart",
    sessions: [
      {
        title: "Your Child’s First AI-Powered Tutor",
        description:
          "Learn to give AI the right instructions and build a personal tutor that explains difficult concepts and answers questions.",
        day: "Saturday",
        tools: ["Gemini", "Claude"],
        image: "/images/live-classes/ai-tutor.png",
        imageAlt: "AI tutor robot using a laptop",
      },
      {
        title: "From Tough Chapters To Smart Study Kits",
        description:
          "Turn complex topics and school chapters into easy notes, mind maps, flashcards and practice quizzes.",
        day: "Sunday",
        tools: ["Gemini", "NotebookLM"],
        image: "/images/live-classes/smart-study-kits.png",
        imageAlt: "Illustration of educational study materials",
      },
    ],
  },

  // WEEK 2 — DIFFERENT CONTENT
  {
    heading: "Unleash Your Child’s AI Creativity",
    sessions: [
      {
        title: "Create Amazing Stories With AI",
        description:
          "Turn your child's ideas into exciting stories, creative characters and imaginative adventures using AI tools.",
        day: "Saturday",
        tools: ["ChatGPT", "Gemini"],
        image: "/images/live-classes/ai-tutor.png",
        imageAlt: "AI tutor robot using a laptop",
      },
      {
        title: "Design Posters And Visual Masterpieces",
        description:
          "Explore AI-powered design to create colourful posters, digital artwork and presentations from simple ideas.",
        day: "Sunday",
        tools: ["Canva AI", "Gemini"],
        image: "/images/live-classes/smart-study-kits.png",
        imageAlt: "Illustration of educational study materials",
      },
    ],
  },

  // WEEK 3 — DUMMY CONTENT, EDIT LATER
  {
    heading: "Explore Ideas And Build With AI",
    sessions: [
      {
        title: "Discover How AI Solves Problems",
        description:
          "Explore everyday challenges and learn how AI can help generate ideas, compare solutions and think creatively.",
        day: "Saturday",
        tools: ["ChatGPT", "Claude"],
        image: "/images/live-classes/ai-tutor.png",
        imageAlt: "AI tutor robot using a laptop",
      },
      {
        title: "Build Your First AI-Powered Project",
        description:
          "Turn a simple idea into a mini project and learn how to plan, improve and present your creation.",
        day: "Sunday",
        tools: ["Gemini", "Canva AI"],
        image: "/images/live-classes/smart-study-kits.png",
        imageAlt: "Illustration of educational study materials",
      },
    ],
  },

  // WEEK 4 — DUMMY CONTENT, EDIT LATER
  {
    heading: "Get Ready For The Future With AI",
    sessions: [
      {
        title: "Learn Smart Research Skills",
        description:
          "Learn to ask better questions, explore reliable information and organise research with the help of AI.",
        day: "Saturday",
        tools: ["Gemini", "NotebookLM"],
        image: "/images/live-classes/ai-tutor.png",
        imageAlt: "AI tutor robot using a laptop",
      },
      {
        title: "Present Your Ideas With Confidence",
        description:
          "Use AI to organise your thoughts and create clear, engaging presentations for school projects.",
        day: "Sunday",
        tools: ["Canva AI", "ChatGPT"],
        image: "/images/live-classes/smart-study-kits.png",
        imageAlt: "Illustration of educational study materials",
      },
    ],
  },

  // WEEK 5 — DUMMY CONTENT, EDIT LATER
  {
    heading: "Showcase Your AI Skills",
    sessions: [
      {
        title: "Prepare Your Final AI Creation",
        description:
          "Bring together the skills you've learned to polish your project and prepare it for the final showcase.",
        day: "Saturday",
        tools: ["Gemini", "Canva AI"],
        image: "/images/live-classes/ai-tutor.png",
        imageAlt: "AI tutor robot using a laptop",
      },
      {
        title: "Present Your Project To The World",
        description:
          "Share your creation, explain how you built it and celebrate your progress as a confident AI learner.",
        day: "Sunday",
        tools: ["ChatGPT", "NotebookLM"],
        image: "/images/live-classes/smart-study-kits.png",
        imageAlt: "Illustration of educational study materials",
      },
    ],
  },
];

function SessionCard({ session }) {
  return (
    <article className="live-classes__session">
      <img
        className="live-classes__image"
        src={session.image}
        alt={session.imageAlt}
      />

      <div className="live-classes__session-content">
        <div className="live-classes__session-topline">
          <h4 className="live-classes__session-title">
            {session.title}
          </h4>

          <span className="live-classes__day">
            {session.day}
          </span>
        </div>

        <p className="live-classes__description">
          {session.description}
        </p>

        <div className="live-classes__tools">
          <span className="live-classes__tools-label">
            TOOLS:
          </span>

          {session.tools.map((tool, index) => (
            <React.Fragment key={tool}>
              {index > 0 && (
                <span className="live-classes__tool-divider" />
              )}

              <span className="live-classes__tool">
                {tool}
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function LiveClasses() {
  const [activeWeek, setActiveWeek] = useState(0);

  const selectedWeek = weekContent[activeWeek];

  return (
    <section className="live-classes">
      <div className="live-classes__decor live-classes__decor--top" />
      <div className="live-classes__decor live-classes__decor--bottom" />

      <header className="live-classes__header">
        <p className="live-classes__eyebrow">
          INSIDE THE LIVE CLASSES
        </p>

        <h2 className="live-classes__main-title">
          5 Weeks Of Experiential AI Learning
        </h2>

        <p className="live-classes__subtitle">
          Help your child become a confident learner, creator &amp;
          problem-solver through purposeful use of AI.
        </p>
      </header>

      <div className="live-classes__panel">
        <div
          className="live-classes__tabs"
          role="tablist"
          aria-label="Learning weeks"
        >
          {weeks.map((week, index) => (
            <button
              key={week.label}
              id={`live-classes-tab-${index}`}
              className={`live-classes__tab ${
                activeWeek === index
                  ? "live-classes__tab--active"
                  : ""
              }`}
              type="button"
              role="tab"
              aria-selected={activeWeek === index}
              aria-controls="live-classes-content"
              onClick={() => setActiveWeek(index)}
            >
              <span className="live-classes__tab-week">
                {week.label}
              </span>

              <span className="live-classes__tab-subtitle">
                {week.subtitle}
              </span>
            </button>
          ))}
        </div>

        <div
          className="live-classes__content"
          id="live-classes-content"
          role="tabpanel"
          aria-labelledby={`live-classes-tab-${activeWeek}`}
        >
          <h3 className="live-classes__section-title">
            {selectedWeek.heading}
          </h3>

          <div className="live-classes__sessions">
            {selectedWeek.sessions.map((session, index) => (
              <SessionCard
                key={`${activeWeek}-${index}`}
                session={session}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
