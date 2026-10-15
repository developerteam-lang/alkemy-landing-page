
import { useState } from "react";
import "./WinnersSection.css";

const batches = {
  2: [
    {
      name: "Hrittik",
      className: "Class 8",
      label: "WINNER - CLASS 8",
      videoUrl: "https://www.youtube.com/watch?v=jfKfPfyJRdk",
      thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/hqdefault.jpg",
    },
    {
      name: "Ananya Patel",
      className: "Class 9",
      label: "WINNER - CLASS 9",
      videoUrl: "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
      thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/hqdefault.jpg",
    },
    {
      name: "Rohan Kumar",
      className: "Class 10",
      label: "WINNER - CLASS 10",
      videoUrl: "https://www.youtube.com/watch?v=9bZkp7q19f0",
      thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/hqdefault.jpg",
    },
  ],
  1: [
    {
      name: "Nafeesa",
      className: "Class 7",
      label: "WINNER - CLASS 7",
      videoUrl: "https://www.youtube.com/watch?v=jfKfPfyJRdk",
      thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/hqdefault.jpg",
    },
    {
      name: "Karthik",
      className: "Class 10",
      label: "WINNER - CLASS 10",
      videoUrl: "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
      thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/hqdefault.jpg",
    },
    {
      name: "Srikar",
      className: "Class 11",
      label: "WINNER - CLASS 11",
      videoUrl: "https://www.youtube.com/watch?v=9bZkp7q19f0",
      thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/hqdefault.jpg",
    },
  ],
};

function WinnerCard({ winner }) {
  return (
    <article className="winner-card">
      <div className="winner-card__badge">{winner.label}</div>

      <a
        className="winner-card__video"
        href={winner.videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Play winner video for ${winner.name}`}
      >
        <img
          className="winner-card__thumbnail"
          src={winner.thumbnail}
          alt={`${winner.name} winner video thumbnail`}
          loading="lazy"
        />

        <span className="winner-card__play" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5.8c0-.8.9-1.3 1.6-.8l9.1 6.2a1 1 0 0 1 0 1.6l-9.1 6.2c-.7.5-1.6 0-1.6-.8V5.8Z" />
          </svg>
        </span>
      </a>

      <div className="winner-card__details">
        <h3>{winner.name}</h3>
        <p>{winner.className}</p>
      </div>
    </article>
  );
}

export default function WinnersSection() {
  const [activeBatch, setActiveBatch] = useState(2);

  return (
    <section className="winners-section">
      <div className="winners-section__container">
        {/* SECTION HEADING */}
        <header className="winners-section__header">
          <p className="winners-section__eyebrow">
            2 BATCHES. 10 WINNERS.
          </p>

          <h2 className="winners-section__title">
            Meet The Winners Across Our Batches
          </h2>

          <p className="winners-section__subtitle">
            See how students grew through the program, built with purpose
            and earned recognition for work that stood out.
          </p>
        </header>

        {/* WINNER VIDEO GRID */}
        <div className="winners-section__grid" key={activeBatch}>
          {batches[activeBatch].map((winner) => (
            <WinnerCard key={winner.name} winner={winner} />
          ))}
        </div>

        {/* BATCH SELECTOR */}
        <nav className="winners-section__pagination" aria-label="Select batch">
          <span className="winners-section__pagination-label">
            BATCH
          </span>

          {[2, 1].map((batch) => (
            <button
              key={batch}
              type="button"
              className={`winners-section__page ${
                activeBatch === batch
                  ? "winners-section__page--active"
                  : ""
              }`}
              onClick={() => setActiveBatch(batch)}
              aria-pressed={activeBatch === batch}
              aria-label={`Show batch ${batch} winners`}
            >
              {batch}
            </button>
          ))}
        </nav>
      </div>
    </section>
  );
}
