import React, { useState } from "react";
import "./LiveClasses.css";

const weeks = [
  { label: "WEEK 1", subtitle: "GETTING STARTED" },
  { label: "WEEK 2", subtitle: "AI CREATIVE STUDIO" },
  // { label: "WEEK 1 and  Week 2", subtitle: "AI INNOVATION LAB" },
  // { label: "WEEK 2", subtitle: "BE FUTURE-READY" },
  // { label: "WEEK 2", subtitle: "AI SHOWCASE" },
];


const weekContent = [
  // WEEK 1
  {
    heading: "Your First Steps To Becoming AI-Smart",
    sessions: [
      {
        title: "Foundations and Problem Hunt",
        description:
          "What AI is, product thinking, finding problems worth solving",
        day: "Saturday",
        tools: ["Gemini", "Claude"],
        image: "/images/live-classes/robot-exploring-ideas.png",
        imageAlt: "AI tutor robot using a laptop",
      },
      {
        title: "Prompt Engineering and AI Trust Check",
        description:
          "Prompt structure, multi-step prompting, the 3-step responsible-use framework",
        day: "Sunday",
        tools: ["Gemini", "NotebookLM"],
        image: "/images/live-classes/friendly-robot-ai-trust-check.png",
        imageAlt: "Illustration of educational study materials",
      },
      {
        title: "Research And Validation",
        description:
          "Researching a problem space, validating the idea against evidence",
        day: "Saturday",
        tools: ["ChatGPT", "Gemini"],
        image: "/images/live-classes/robot-researcher-with-laptop-and-lightbulb.png",
        imageAlt: "AI tutor robot using a laptop",
      },
      {
        title: "UX User Flows And Prototyping",
        description:
          "How a user moves through the product, building the first interactive version.",
        day: "Sunday",
        tools: ["Canva AI", "Gemini"],
        image: "/images/live-classes/ux-userflows-and-prototyping.png",
        imageAlt: "Illustration of educational study materials",
      },
      {
        title: "Feature Mapping and Blueprint",
        description:
          "Prioritising features, mapping prompts to each, locking the build plan",
        day: "Saturday",
        tools: ["ChatGPT", "Claude"],
        image: "/images/live-classes/future-mapping-and-blueprint.png",
        imageAlt: "AI tutor robot using a laptop",
      },
    ],
  },

  // WEEK 1 — DIFFERENT CONTENT
  {
    heading: "Robot Researcher With Laptop and Lightbulb",
    sessions: [
        {
        title: "Core Feature Build",
        description:
          "Getting the primary AI-powered feature working end to end",
        day: "Sunday",
        tools: ["Gemini", "Canva AI"],
        image: "/images/live-classes/smart-study-kits.png",
        imageAlt: "Illustration of educational study materials",
      },
      {
        title: "Testing and Iteration",
        description:
          "Breaking the product deliberately, fixing edge cases, refining prompts",
        day: "Saturday",
        tools: ["Gemini", "NotebookLM"],
        image: "/images/live-classes/ai-tutor.png",
        imageAlt: "AI tutor robot using a laptop",
      },
      {
        title: "Polish and Publish",
        description:
          "Visual craft, product copy, deployment",
        day: "Sunday",
        tools: ["Canva AI", "ChatGPT"],
        image: "/images/live-classes/smart-study-kits.png",
        imageAlt: "Illustration of educational study materials",
      },
      {
        title: "Peer Testing and Demo Storytelling",
        description:
          "Testing each other's live products, structuring the demo narrative",
        day: "Saturday",
        tools: ["Gemini", "Canva AI"],
        image: "/images/live-classes/ai-tutor.png",
        imageAlt: "AI tutor robot using a laptop",
      },
      {
        title: "Rehearsal and Tech Check",
        description:
          "Timed run-throughs, feedback, final fixes",
        day: "Sunday",
        tools: ["ChatGPT", "NotebookLM"],
        image: "/images/live-classes/smart-study-kits.png",
        imageAlt: "Illustration of educational study materials",
      },
    ],
  },

  // WEEK 1 and Week 2 — DUMMY CONTENT, EDIT LATER
  {/*{
    heading: "Explore Ideas And Build With AI",
    sessions: [
      {
        title: "Feature Mapping and Blueprint",
        description:
          "Prioritising features, mapping prompts to each, locking the build plan",
        day: "Saturday",
        tools: ["ChatGPT", "Claude"],
        image: "/images/live-classes/future-mapping-and-blueprint.png",
        imageAlt: "AI tutor robot using a laptop",
      },
      {
        title: "Core Feature Build",
        description:
          "Getting the primary AI-powered feature working end to end",
        day: "Sunday",
        tools: ["Gemini", "Canva AI"],
        image: "/images/live-classes/smart-study-kits.png",
        imageAlt: "Illustration of educational study materials",
      },
    ],
  }
  */}

  // WEEK 4 — DUMMY CONTENT, EDIT LATER
  ,{
    heading: "Get Ready For The Future With AI",
    sessions: [
      {
        title: "Testing and Iteration",
        description:
          "Breaking the product deliberately, fixing edge cases, refining prompts",
        day: "Saturday",
        tools: ["Gemini", "NotebookLM"],
        image: "/images/live-classes/ai-tutor.png",
        imageAlt: "AI tutor robot using a laptop",
      },
      {
        title: "Polish and Publish",
        description:
          "Visual craft, product copy, deployment",
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
        title: "Peer Testing and Demo Storytelling",
        description:
          "Testing each other's live products, structuring the demo narrative",
        day: "Saturday",
        tools: ["Gemini", "Canva AI"],
        image: "/images/live-classes/ai-tutor.png",
        imageAlt: "AI tutor robot using a laptop",
      },
      {
        title: "Rehearsal and Tech Check",
        description:
          "Timed run-throughs, feedback, final fixes",
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
          // style={{border: "1px solid #004f9e"}}
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
