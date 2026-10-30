import { useState } from "react";
import "./WinnersSection.css";

const batches = {
  2: [
    {
      name: "Kimmaya",
      className: "Class 8",
      label: "WINNER - CLASS 8",
      videoUrl:
        "https://www.youtube.com/watch?v=fuosW7R-F4I",
      thumbnail: "/images/thumbnails/kimmaya-thumbnail.png",
    },
    {
      name: "Shazain",
      className: "Class 9",
      label: "WINNER - CLASS 9",
      videoUrl: "https://www.youtube.com/watch?v=hnpz4xJX9gM",
      thumbnail: "/images/thumbnails/shazain-thumbnail.png",
    },
    {
      name: "Kaustabh",
      className: "Class 10",
      label: "WINNER - CLASS 10",
      // Replace with Rohan's own video URL.
      videoUrl: "https://www.youtube.com/watch?v=awkfDBOJaOE",
      thumbnail: "/images/thumbnails/kaustabh-thumbnail.png",
    },
  ],
  1: [
    {
      name: "Drishti",
      className: "Class 7",
      label: "WINNER - CLASS 7",
      videoUrl: "https://www.youtube.com/watch?v=qImbQva5osU",
      thumbnail: "/images/thumbnails/drishti-thumbnail.png",
    },
    {
      name: "Anvi",
      className: "Class 10",
      label: "WINNER - CLASS 10",
      videoUrl: "https://www.youtube.com/watch?v=qoYFcDIlUSA",
      thumbnail: "/images/thumbnails/anvi-thumbnail.png",
    }
    //  ,{
    //   name: "Srikar",
    //   className: "Class 11",
    //   label: "WINNER - CLASS 11",
    //   videoUrl: "https://www.youtube.com/watch?v=9bZkp7q19f0",
    //   thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/hqdefault.jpg",
    // },
  ],
};

// Convert YouTube and Google Drive links into embeddable player URLs.
function getVideoEmbedUrl(videoUrl) {
  try {
    const url = new URL(videoUrl);

    // Google Drive video
    if (
      url.hostname === "drive.google.com" ||
      url.hostname === "www.drive.google.com"
    ) {
      const fileId = url.pathname.match(/\/file\/d\/([^/]+)/)?.[1];

      if (fileId) {
        return `https://drive.google.com/file/d/${fileId}/preview`;
      }

      return videoUrl;
    }

    // YouTube video
    if (
      url.hostname === "www.youtube.com" ||
      url.hostname === "youtube.com" ||
      url.hostname === "m.youtube.com"
    ) {
      const videoId =
        url.searchParams.get("v") ||
        url.pathname.match(/\/(?:embed|shorts)\/([^/]+)/)?.[1];

      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    }

    // Short YouTube links
    if (url.hostname === "youtu.be") {
      const videoId = url.pathname.split("/").filter(Boolean)[0];

      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    }

    return videoUrl;
  } catch {
    return videoUrl;
  }
}

function WinnerCard({ winner }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const embedUrl = getVideoEmbedUrl(winner.videoUrl);

  return (
    <article className="winner-card">
      {/* <div className="winner-card__badge">{winner.label}</div> */}

      <div className="winner-card__video">
        {/*  */}{isPlaying ? (   
          <iframe
            className="winner-card__player"
            src={embedUrl}
            title={`${winner.name} winner video`}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
          ) : ( 
           <button
            type="button"
            className="winner-card__video-trigger"
            onClick={() => setIsPlaying(true)}
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
          </button>  )} {/* */}
       
      </div>

      <div className="winner-card__details">
        <h3>{winner.name}</h3>
        {/* <p>{winner.className}</p> */}
      </div>
    </article>
  );
}

export default function WinnersSection() {
  const [activeBatch, setActiveBatch] = useState(2);

  return (
    <section className="winners-section">
      <div className="winners-section__container">
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

        <div className="winners-section__grid" key={activeBatch}>
          {batches[activeBatch].map((winner) => (
            <WinnerCard key={winner.name} winner={winner} />
          ))}
        </div>

        <nav
          className="winners-section__pagination"
          aria-label="Select batch"
        >
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