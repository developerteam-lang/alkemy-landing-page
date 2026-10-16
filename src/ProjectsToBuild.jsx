import React, { useState } from "react";
import "./ProjectsToBuild.css";

const categories = [
  "Creative Skills",
  "Academic Skills",
  "No-Code Skills",
  "Communication",
  "Career Paths",
];

const projectsData = {
  "Creative Skills": {
    heading: "From Creative Ideas To Finished Projects",
    description:
      "Your child learns to turn imagination into original comics, videos, designs and music while building creativity, storytelling and digital expression.",
    tools: ["ChatGPT", "Canva", "Google Flow", "HeyGen", "Suno"],
    projects: [
      {
        title: "AI Content Creator tool",
        description: "Turn a story into an illustrated comic",
        image:
          "/images/projects-to-build/ai-study-buddy.png",
      },
      { 
        title: "AI Creator Explorer Tool",
        description: "Create original posters and artwork",
        image:
          "/images/projects-to-build/ai-creator-explorer-tool.png",
      },
      {
        title: "AI Research Assistant",
        description: "Write lyrics and compose your own music",
        image:
          "/images/projects-to-build/ai-research-assistant.png",
        playable: true,
      },
      {
        title: "Gamified Learning Quiz",
        description: "Bring your own digital character to life",
        image:
          "/images/projects-to-build/gamified-learning-quiz.png",
      },
    ],
  },

  "Academic Skills": {
    heading: "Make Learning More Interactive",
    description:
      "Turn school subjects into engaging activities, visual explanations and hands-on projects using AI-powered learning tools.",
    tools: ["ChatGPT", "Canva", "NotebookLM", "Google Flow"],
    projects: [
      {
        title: "AI Trust Check",
        description: "Explain scientific concepts with visuals",
        image:
          "/images/projects-to-build/ai-trust-check.png",
      },
      {
        title: "AI Thinks Case Studies",
        description: "Bring important historical events to life",
        image:
          "/images/projects-to-build/ai-thinks-case-studies.png",
      },
      {
        title: "All Resources",
        description: "Create summaries and revision notes",
        image:
          "/images/projects-to-build/all-resources.png",
      },
      {
        title: "AI For Social Impact",
        description: "Build fun quizzes to test your knowledge",
        image:
          "/images/projects-to-build/ai-for-social-impact.png",
      },
    ],
  },

  "No-Code Skills": {
    heading: "Build Digital Projects Without Coding",
    description:
      "Discover how to turn ideas into websites, prototypes and useful digital products with beginner-friendly no-code tools.",
    tools: ["Lovable", "Canva", "Figma", "ChatGPT"],
    projects: [
      {
        title: "Personal Website",
        description: "Create your own website with AI",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=85",
      },
      {
        title: "App Prototype",
        description: "Design a simple app idea",
        image:
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=500&q=85",
      },
      {
        title: "Digital Portfolio",
        description: "Showcase your projects and creativity",
        image:
          "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=500&q=85",
      },
      {
        title: "AI Business Idea",
        description: "Turn a creative idea into a prototype",
        image:
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=500&q=85",
      },
    ],
  },

  Communication: {
    heading: "Express Ideas With Confidence",
    description:
      "Develop storytelling, presentation and communication skills through creative projects, videos and engaging presentations.",
    tools: ["ChatGPT", "Canva", "HeyGen", "Google Slides"],
    projects: [
      {
        title: "Storytelling Video",
        description: "Turn your ideas into short videos",
        image:
          "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=500&q=85",
      },
      {
        title: "Creative Presentation",
        description: "Present ideas through engaging visuals",
        image:
          "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=500&q=85",
      },
      {
        title: "Digital Avatar",
        description: "Create a character to tell your story",
        image:
          "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=500&q=85",
      },
      {
        title: "Podcast Project",
        description: "Plan and create your own podcast",
        image:
          "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=500&q=85",
      },
    ],
  },

  "Career Paths": {
    heading: "Explore Tomorrow's Opportunities",
    description:
      "Discover emerging careers and build practical projects that introduce problem-solving, entrepreneurship and digital skills.",
    tools: ["ChatGPT", "Canva", "Figma", "Google Sheets"],
    projects: [
      {
        title: "Live Career Guidance Class",
        description: "Turn an idea into a business concept",
        image:
          "/images/projects-to-build/live-career-guidance-class.png",
      },
      {
        title: "Personalised Career Report",
        description: "Explore a question and present findings",
        image:
          "/images/projects-to-build/personalised-career-report.png",
      },
      {
        title: "Personalised Subject Choice Report",
        description: "Design a solution to a real-world problem",
        image:
          "/images/projects-to-build/personalised-subject-choice-report.png",
      },
      {
        title: "Group Career Counselling Session",
        description: "Showcase your skills and achievements",
        image:
          "/images/projects-to-build/group-career-counselling-session.png",
      },
    ],
  },
};

const ProjectsToBuild = () => {
  const [activeCategory, setActiveCategory] = useState(
    "Creative Skills"
  );

  const activeData = projectsData[activeCategory];

  return (
    <section className="projects-build">
      <div className="projects-build__header">
        <p className="projects-build__eyebrow">
          WHAT STUDENTS BUILD
        </p>

        <h2 className="projects-build__title">
          20+ Projects To Build 5 Key Skills
        </h2>

        <p className="projects-build__subtitle">
          Give your child the chance to turn ideas into work
          they’re proud of & build skills for what comes next.
        </p>
      </div>

      <div className="projects-build__container">
        <div
          className="projects-build__tabs"
          role="tablist"
          aria-label="Project skill categories"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              className={`projects-build__tab ${
                activeCategory === category
                  ? "projects-build__tab--active"
                  : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div
          className="projects-build__panel"
          role="tabpanel"
        >
          <div className="projects-build__intro">
            <h3 className="projects-build__section-title">
              {activeData.heading}
            </h3>

            <p className="projects-build__description">
              {activeData.description}
            </p>
          </div>

          <div className="projects-build__grid">
            {activeData.projects.map((project, index) => (
              <article
                className="projects-build__card"
                key={`${activeCategory}-${project.title}`}
              >
                <div className="projects-build__image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="projects-build__image"
                    loading="lazy"
                  />

                  {project.playable && (
                    <button
                      type="button"
                      className="projects-build__play"
                      aria-label={`Preview ${project.title}`}
                      onClick={() =>
                        window.alert(
                          "Add your project video URL here."
                        )
                      }
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        aria-hidden="true"
                      >
                        <path
                          d="M8 5L19 12L8 19V5Z"
                          fill="#410099"
                        />
                      </svg>
                    </button>
                  )}
                </div>

                <div className="projects-build__card-content">
                  <h4 className="projects-build__card-title">
                    {project.title}
                  </h4>

                  <p className="projects-build__card-description">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="projects-build__tools">
            <span className="projects-build__tools-label">
              TOOLS:
            </span>

            <div className="projects-build__tools-list">
              {activeData.tools.map((tool, index) => (
                <span
                  className="projects-build__tool"
                  key={tool}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsToBuild;