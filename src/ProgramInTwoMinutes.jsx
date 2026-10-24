// import React, { useState } from "react";
import "./ProgramInTwoMinutes.css";

const ProgramInTwoMinutes = ({
  // https://drive.google.com/file/d/1LqzbEn4PSz9Y9WMg-RVyQQwqMJrFO7RX/preview?autoplay=1&mute=1
  videoUrl = "https://drive.google.com/file/d/1LqzbEn4PSz9Y9WMg-RVyQQwqMJrFO7RX/view?usp=sharing",
  youtubeUrl,
}) => {
  // const [isPlaying, setIsPlaying] = useState(false);

  // Supports both the existing youtubeUrl prop and the new videoUrl prop.
  const currentVideoUrl = youtubeUrl || videoUrl;

  // Identify the video provider and generate its embed URL.
  const getVideoEmbedUrl = (url) => {
    try {
      const parsedUrl = new URL(url);

      // Google Drive video
      if (
        parsedUrl.hostname === "drive.google.com" ||
        parsedUrl.hostname === "www.drive.google.com"
      ) {
        const match = parsedUrl.pathname.match(/\/file\/d\/([^/]+)/);

        if (!match) return "";

        const driveVideoId = match[1];

        return `https://drive.google.com/file/d/${driveVideoId}/preview`;
      }

      // YouTube video
      let videoId = "";

      if (
        parsedUrl.hostname === "youtu.be" ||
        parsedUrl.hostname === "www.youtu.be"
      ) {
        videoId = parsedUrl.pathname.slice(1).split("/")[0];
      } else if (
        parsedUrl.hostname === "youtube.com" ||
        parsedUrl.hostname === "www.youtube.com" ||
        parsedUrl.hostname === "m.youtube.com"
      ) {
        if (
          parsedUrl.pathname.startsWith("/shorts/") ||
          parsedUrl.pathname.startsWith("/embed/")
        ) {
          videoId = parsedUrl.pathname.split("/")[2] || "";
        } else {
          videoId = parsedUrl.searchParams.get("v") || "";
        }
      }

      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
      }

      return "";
    } catch {
      return "";
    }
  };

  const embedUrl = getVideoEmbedUrl(currentVideoUrl);

  if (!embedUrl) {
    return null;
  }

  // const thumbnail = "../images/thumbnail_image.png";

  return (
    <section className="program-preview">
      {/* Full-screen decorative wave */}
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

      <div className="program-preview__heading">
        <p className="program-preview__eyebrow">
          A QUICK LOOK INSIDE
        </p>

        <h2 className="program-preview__title">
          See The Program In 2 Minutes
        </h2>
      </div>

      <div className="program-preview__video-wrapper">
        <div className="program-preview__video">
          {/* {isPlaying ? ( */}
            <iframe
              key={embedUrl}
              className="program-preview__iframe"
              src={embedUrl}
              title="See the program in 2 minutes"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          {/* ) : (
            <button
              type="button"
              className="program-preview__thumbnail"
              onClick={() => setIsPlaying(true)}
              aria-label="Play program introduction video"
            > */}
              {/* <img
                src={thumb}
                alt="Program introduction video thumbnail"
                className="program-preview__image"
              /> */}

              {/* <span className="program-preview__play-button">
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
          )} */}
        </div>
      </div>
    </section>
  );
};

export default ProgramInTwoMinutes;