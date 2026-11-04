import React, { useState } from "react";
import "./ProjectsToBuild.css";

const categories = [
  "Creative Skills",
  "Academic Skills",
  "No-Code Skills",
  "Communication",
  "Career Paths",
];

const communicationVideoUrls = [
  "https://www.youtube-nocookie.com/embed/fuosW7R-F4I",
  "https://www.youtube-nocookie.com/embed/hnpz4xJX9gM",
  "https://www.youtube-nocookie.com/embed/awkfDBOJaOE",
  "https://www.youtube-nocookie.com/embed/qImbQva5osU",
  "https://www.youtube-nocookie.com/embed/qoYFcDIlUSA",
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
        description: "A creative assistant that generates scripts, captions, social media ideas, or content plans.",
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
        description: "A tool that finds, summarizes, and structures information into usable formats.",
        image:
          "/images/projects-to-build/ai-research-assistant.png",
        // playable: true,
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
        title: "AI Study Assistant App",
        description: "A personal academic tool for notes generation, revision planning, and exam prep.",
        image:
          "/images/projects-to-build/bright-communication-learning-scene.png",
      },
      {
        title: "AI Career Explorer Tool",
        description: "A tool that suggests careers, skill paths, or learning resources based on interests and strengths.",
        image:
          "/images/projects-to-build/ai-career-explorer-tool.png",
      },
      {
        title: "AI Content Creator Tool",
        description: "A creative assistant that generates scripts, captions, social media ideas, or content plans.",
        image:
          "/images/projects-to-build/ai-content-creator-tool.png",
      },
      {
        title: "AI Research Assistant",
        description: "A tool that finds, summarizes, and structures information into usable formats.",
        image:
          "/images/projects-to-build/ai-research-assistance-app.png",
      },
      // {
      //   title: "AI for Social Impact",
      //   description: "A product that addresses a real community or social challenge.",
      //   image:
      //     "/images/projects-to-build/ai-for-social.png",
      // },
    ],
  },

  "Communication": {
    heading: "Express Ideas With Confidence",
    description:
      "Develop storytelling, presentation and communication skills through creative projects, videos and engaging presentations.",
    tools: ["ChatGPT", "Canva", "HeyGen", "Google Slides"],
    projects: [
      {
        title: "No-Code Ideas in Action",
        description: "Create your own website with AI",
        // image:"/images/projects-to-build/no-code-ideas-in-action.png",
        videoUrl:communicationVideoUrls[0],
        thumbnail:"/images/thumbnails/kimmaya-thumbnail-two.png"
      },
      {
        title: "App Prototype",
        description: "Design a simple app idea",
        // image:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=500&q=85",
        videoUrl:communicationVideoUrls[1],
        thumbnail:"/images/thumbnails/shazain-thumbnail-two.png"

      },
      {
        title: "Digital Portfolio",
        description: "Showcase your projects and creativity",
        // image:"https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=500&q=85",
        videoUrl:communicationVideoUrls[2],
        thumbnail:"/images/thumbnails/kaustabh-thumbnail-two.png"
      },
      {
        title: "AI Business Idea",
        description: "Turn a creative idea into a prototype",
        // image:"https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=500&q=85",
        videoUrl:communicationVideoUrls[3],
        thumbnail:"/images/thumbnails/drishti-thumbnail-two.png"
      },
      // {
      //   title: "Digital Portfolio",
      //   description: "Showcase your projects and creativity",
        // image:"https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=500&q=85",
      //   videoUrl:communicationVideoUrls[4],
      //   thumbnail:"/images/thumbnails/anvi-thumbnail.png"
      // },
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
  const [playingVideo, setPlayingVideo] = useState(null);
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
          className={`projects-build__panel projects-build__panel--${activeCategory.toLowerCase().replace(/\s+/g, "-")}`}
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
  {activeData.projects.map((project, index) => {
    const isCommunication = activeCategory === "Communication";

    // Use the first video's thumbnail for every Communication card.
    // You can replace this image with individual thumbnails later.
    // const thumbnailUrl =
    //   "https://img.youtube.com/vi/fuosW7R-F4I/hqdefault.jpg";
    
    
    // Convert the YouTube embed URL into a playable URL.
    const getPlayableVideoUrl = (url) => {
      const videoId = url.split("/embed/")[1]?.split("?")[0];

      return videoId
        ? `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`
        : url;
    };

    return (
      <article
        className="projects-build__card"
        key={`${activeCategory}-${project.title}-${index}`}
      >
        <div className="projects-build__image-wrapper">
          {isCommunication && project.videoUrl ? (
            playingVideo === project.videoUrl ? (
              <iframe
                src={getPlayableVideoUrl(project.videoUrl)}
                title={project.title}
                className="projects-build__video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                className="projects-build__thumbnail-button"
                onClick={() => setPlayingVideo(project.videoUrl)}
                aria-label={`Play video: ${project.title}`}
              >
                <img
                  src={project.thumbnail}
                  alt={`${project.title} video thumbnail`}
                  className="projects-build__image"
                  loading="lazy"
                />

                 <span className="winner-card__play" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                           <path d="M8 5.8c0-.8.9-1.3 1.6-.8l9.1 6.2a1 1 0 0 1 0 1.6l-9.1 6.2c-.7.5-1.6 0-1.6-.8V5.8Z" />
                    </svg>
                 </span>
              </button>
            )
          ) : (
            <>
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="projects-build__image"
                  loading="lazy"
                />
              )}

              {project.playable && (
                <button
                  type="button"
                  className="projects-build__play"
                  aria-label={`Preview ${project.title}`}
                  onClick={() =>
                    window.alert("Add your project video URL here.")
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
            </>
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
    );
  })}
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