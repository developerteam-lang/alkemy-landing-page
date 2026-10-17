import React, { useState } from "react";
import "./AILab.css";

// Change this YouTube video ID whenever you want to use another video.
const AI_LAB_YOUTUBE_VIDEO_ID = "gI-Fke5ZQIA";

const resources = [
  {
    id: 1,
    icon: "🤖",
    title: "Product-first, not tool-first",
    meta: ["15 Resources", "2 Assignments"],
    items: [
      "Prompt Bank",
      "Slash Command Bank",
      "Prompting Frameworks",
      "AI Cheat Sheets",
    ],
    note: "Practical AI resources students can use again and again throughout the year.",
  },
  {
    id: 2,
    icon: "🎨",
    title: "No coding required",
    meta: ["10 Skill-based PDFs", "Included"],
    items: [
      "Beginner-friendly reading materials",
      "AI learning guides",
      "Skill-building reference PDFs",
    ],
  },
  {
    id: 3,
    icon: "💡",
    title: "College portfolio outcome",
    meta: ["20 AI Tools", "Use Cases", "Features", "Free vs Paid"],
    items: [
      "AI writing and research tools",
      "Image and video generation tools",
      "Productivity and automation tools",
      "Free and paid plan comparisons",
    ],
  },
  {
    id: 4,
    icon: "📈",
    title: "Structured build process",
    meta: ["10 Assignments", "Practice after live sessions"],
    items: [
      "Daily hands-on activities",
      "AI-powered mini projects",
      "Practice tasks after live classes",
    ],
  },
  {
    id: 5,
    icon: "🎥",
    title: "Verify the Facts",
    meta: ["Video track"],
    items: [
      "Academic skills video lessons",
      "Learning and revision resources",
      "Additional educational videos",
    ],
  },
  {
    id: 6,
    icon: "📚",
    title: "Question the Logic",
    meta: ["3 Workbooks", "Included with enrolment"],
    items: [
      "AI study workbook",
      "Practical exercises and activities",
      "Guided learning resources",
    ],
  },
  {
    id: 7,
    icon: "🗓️",
    title: "Add Their Judgment",
    meta: ["12-Month Exclusive Access to the AI Lab", "Included"],
    items: [
      "Access learning resources throughout the year",
      "Revisit recordings and study materials",
      "Practise and reinforce your learning",
    ],
  },
];

const AILab = () => {
  const [expandedId, setExpandedId] = useState(1);

  const toggleResource = (id) => {
    setExpandedId((currentId) => (currentId === id ? null : id));
  };

  return (
    <section className="ai-lab">
      <div className="ai-lab__header">
        <p className="ai-lab__eyebrow">
          LEARNING BEYOND THE LIVE CLASS
        </p>

        <h2 className="ai-lab__title">The AI Lab</h2>

        <p className="ai-lab__subtitle">
          A year-long learning space with pre-recorded videos, resources,
          assignments and practice material to help students revisit,
          reinforce and keep learning.
        </p>
      </div>

      <div className="ai-lab__layout">
        {/* Left: Expandable resource list */}
        <div className="ai-lab__accordion">
          {resources.map((resource) => {
            const isExpanded = expandedId === resource.id;

            return (
              <article
                className={`ai-lab__resource ${
                  isExpanded ? "ai-lab__resource--expanded" : ""
                }`}
                key={resource.id}
              >
                <button
                  type="button"
                  className="ai-lab__resource-trigger"
                  onClick={() => toggleResource(resource.id)}
                  aria-expanded={isExpanded}
                  aria-controls={`ai-lab-resource-${resource.id}`}
                >
                  <span className="ai-lab__resource-icon" aria-hidden="true">
                    {resource.icon}
                  </span>

                  <span className="ai-lab__resource-info">
                    <span className="ai-lab__resource-title">
                      {resource.title}
                    </span>

                    <span className="ai-lab__resource-meta">
                      {resource.meta.map((item, index) => (
                        <span
                          className="ai-lab__meta-item"
                          key={`${resource.id}-${item}`}
                        >
                          <span
                            className="ai-lab__meta-symbol"
                            aria-hidden="true"
                          >
                            {resource.id === 1
                              ? index === 0
                                ? "▤"
                                : "▧"
                              : resource.id === 2
                                ? index === 0
                                  ? "▤"
                                  : "⊙"
                                : resource.id === 3
                                  ? ["▤", "⌕", "⚙", "♧"][index]
                                  : resource.id === 4
                                    ? index === 0
                                      ? "▤"
                                      : "↗"
                                    : resource.id === 5
                                      ? "▣"
                                      : resource.id === 6
                                        ? index === 0
                                          ? "▤"
                                          : "⊙"
                                        : index === 0
                                          ? "▢"
                                          : "⊙"}
                          </span>
                          {item}
                        </span>
                      ))}
                    </span>
                  </span>

                  <span
                    className={`ai-lab__toggle ${
                      isExpanded ? "ai-lab__toggle--expanded" : ""
                    }`}
                    aria-hidden="true"
                  >
                    {isExpanded ? "−" : "+"}
                  </span>
                </button>

                {isExpanded && (
                  <div
                    className="ai-lab__resource-content"
                    id={`ai-lab-resource-${resource.id}`}
                  >
                    <ul className="ai-lab__resource-list">
                      {resource.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>

                    {resource.note && (
                      <p className="ai-lab__resource-note">
                        {resource.note}
                      </p>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Right: Autoplay YouTube AI Lab video */}
        <aside className="ai-lab__video-card">
          <div className="ai-lab__video-frame">
            <iframe
              className="ai-lab__video"
              src={`https://www.youtube-nocookie.com/embed/${AI_LAB_YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${AI_LAB_YOUTUBE_VIDEO_ID}&playsinline=1&rel=0`}
              title="Take a Tour of The AI Lab"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <div className="ai-lab__video-content">
            <h3 className="ai-lab__video-title">
              Take a Tour of The AI Lab
            </h3>

            <p className="ai-lab__video-description">
              See how students access class recordings, learning videos,
              resources and assignments, all in one place, throughout the year.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default AILab;