import React, { useState } from "react";
import "./ProgramInTwoMinutes.css";

const ProgramInTwoMinutes = ({
  youtubeUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Extract the YouTube video ID from different YouTube URL formats.
  const getYouTubeVideoId = (url) => {
    try {
      const parsedUrl = new URL(url);

      if (parsedUrl.hostname.includes("youtu.be")) {
        return parsedUrl.pathname.slice(1).split("/")[0];
      }

      if (parsedUrl.pathname.startsWith("/shorts/")) {
        return parsedUrl.pathname.split("/")[2];
      }

      if (parsedUrl.pathname.startsWith("/embed/")) {
        return parsedUrl.pathname.split("/")[2];
      }

      return parsedUrl.searchParams.get("v");
    } catch {
      return "";
    }
  };

  const videoId = getYouTubeVideoId(youtubeUrl);

  if (!videoId) {
    return null;
  }

  const thumbnail="../images/thumbnail_image.png";
  return (
    <section className="program-preview">
      <div className="program-preview__heading">
        <p className="program-preview__eyebrow">
          A QUICK LOOK INSIDE
        </p>

        <h2 className="program-preview__title">
          See The Program In 2 Minutes
        </h2>
      </div>

      <div className="program-preview__video-wrapper">
        {/* Decorative wave behind the video */}
        <svg
          className="program-preview__wave"
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M-40 145 C100 245, 180 0, 330 75 S530 200, 690 130 S900 85, 1040 145 S1250 45, 1480 65"
            fill="none"
            stroke="#FFF2D1"
            strokeWidth="22"
            strokeLinecap="round"
          />
        </svg>

        <div className="program-preview__video">
          {isPlaying ? (
            <iframe
              className="program-preview__iframe"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title="See the program in 2 minutes"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              className="program-preview__thumbnail"
              onClick={() => setIsPlaying(true)}
              aria-label="Play program introduction video"
            >
              <img
                src={thumbnail}
                alt="Program introduction video thumbnail"
                className="program-preview__image"
              />

              <span className="program-preview__play-button">
                <svg
                  viewBox="0 0 24 24"
                  width="25"
                  height="25"
                  aria-hidden="true"
                >
                  <path
                    d="M8 5.5L19 12L8 18.5V5.5Z"
                    fill="#D71920"
                  />
                </svg>
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProgramInTwoMinutes;