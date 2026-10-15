
import { useEffect, useState } from "react";
import "./AIWinterCampHero.css";

const slides = [
  {
    label: "Creative Skills",
    heading: "Academic Skills",
    description:
      "Using AI on their actual syllabus — step-by-step Maths, chapters turned into smart notes, flashcards, mind maps and a working exam-revision system.",
  },
  {
    label: "Academic Skills",
    heading: "Creative Skills",
    description:
      "Design comic strips, posters, original music, cinematic videos and AI avatars. Students turn their ideas into polished creative projects using AI.",
  },
];

export default function AIWinterCampHero() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Initial countdown: 02d:11h:59m:04s
  const [remainingSeconds, setRemainingSeconds] = useState(
    2 * 24 * 60 * 60 + 11 * 60 * 60 + 59 * 60 + 4
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRemainingSeconds((previous) => Math.max(0, previous - 1));
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const formatTime = (totalSeconds) => {
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${String(days).padStart(2, "0")}d:${String(hours).padStart(
      2,
      "0"
    )}h:${String(minutes).padStart(2, "0")}m:${String(seconds).padStart(
      2,
      "0"
    )}s`;
  };

  const moveCarousel = (direction) => {
    setActiveIndex((current) =>
      direction === "up"
        ? (current - 1 + slides.length) % slides.length
        : (current + 1) % slides.length
    );
  };

  return (
    <section className="winter-hero">
      <div className="winter-hero__inner">
        {/* LEFT SIDE */}
        <div className="winter-hero__left">
          <h1 className="winter-hero__title">
            AI Winter Camp
            <br />
            For Students
          </h1>

          {/* Information pills */}
          <div className="winter-hero__pills">
            <div className="winter-pill winter-pill--blue">
              <span className="winter-pill__icon" aria-hidden="true" />
              <span>For Grades 8-12</span>
            </div>

            <div className="winter-pill winter-pill--blue">
              <span className="winter-pill__icon" aria-hidden="true" />
              <span>Starts 26 December</span>
            </div>

            <div className="winter-pill winter-pill--blue">
              <span className="winter-pill__icon" aria-hidden="true" />
              <span>Live Online Program</span>
            </div>

            <div className="winter-pill winter-pill--red">
              <span>Limited Seats · Registrations Open</span>
            </div>
          </div>

          {/* Benefits */}
          <div className="winter-hero__benefits">
            <div className="winter-benefit">
              <div className="winter-benefit__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 4.5h8l3 3v12H6v-15h1Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 10h6M9 13h6M9 16h3"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <p>
                <strong>Certified by The Alkemy Edtech</strong> – Digital +
                physical certificate on successful completion
              </p>
            </div>

            <div className="winter-benefit">
              <div className="winter-benefit__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="8"
                    r="3.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M5.5 20c.4-4 2.7-6 6.5-6s6.1 2 6.5 6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <p>
                <strong>Student Profile on The Alkemy Edtech Spotlight</strong> –
                Showcase projects, skills and accomplishments under your
                child's name
              </p>
            </div>

            <div className="winter-benefit">
              <div className="winter-benefit__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <rect
                    x="4"
                    y="5"
                    width="16"
                    height="12"
                    rx="1.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M2.5 20h19M9 17v3m6-3v3"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <p>
                <strong>National Project Showcase &amp; Recognition</strong> –
                Top projects get recognised with Apple laptops
              </p>
            </div>
          </div>

          {/* Enrollment button */}
          <a href="https://www.alkemyedtech.com/enroll" className="winter-hero__cta">
            <span>Enrol Your Child</span>
            <span className="winter-hero__cta-arrow" aria-hidden="true">
              ↗
            </span>
          </a>

          {/* Early bird timer */}
          <div className="winter-hero__countdown">
            <span className="winter-hero__countdown-label">
              Early Bird Ends
            </span>

            <span className="winter-hero__countdown-time">
              {formatTime(remainingSeconds)}
            </span>
          </div>
        </div>

        {/* RIGHT SIDE: VERTICAL CAROUSEL */}
        <div className="winter-hero__right">
          <div className="winter-carousel">
            {/* ACTIVE CAROUSEL CARD */}
            <div className="winter-carousel__card" aria-live="polite">
              <div
                className="winter-carousel__card-content"
                key={activeIndex}
              >
                <h2>{slides[activeIndex].heading}</h2>
                <p>{slides[activeIndex].description}</p>
              </div>
            </div>

            <div className="winter-carousel__controls">
              {/* UP ARROW */}
              <button
                type="button"
                className="winter-carousel__arrow"
                aria-label="Previous skill"
                onClick={() => moveCarousel("up")}
              >
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="m7 14 5-5 5 5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* VERTICAL CAROUSEL ITEMS */}
              <div
                className="winter-carousel__nav"
                role="group"
                aria-label="Choose a skill"
              >
                {slides.map((slide, index) => (
                  <button
                    type="button"
                    key={slide.label}
                    className={`winter-carousel__nav-item ${
                      activeIndex === index
                        ? "winter-carousel__nav-item--active"
                        : ""
                    }`}
                    onClick={() => setActiveIndex(index)}
                    aria-pressed={activeIndex === index}
                  >
                    <span className="winter-carousel__dot" />
                    <span>{slide.label}</span>
                  </button>
                ))}
              </div>

              {/* DOWN ARROW */}
              <button
                type="button"
                className="winter-carousel__arrow"
                aria-label="Next skill"
                onClick={() => moveCarousel("down")}
              >
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="m7 10 5 5 5-5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            
          </div>
        </div>

      </div>
    </section>
  );
}
