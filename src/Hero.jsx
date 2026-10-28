import React, { useEffect, useState } from "react";

const Hero = () => {
  // Replace these three image paths whenever you are ready.
  // The same three images are reused across all five sections.
  const images = [
    "/images/hero/creative-skills.png",
    "/images/hero/academic-skills.png",
    "/images/hero/no-code-skills.png",
    "/images/hero/communication-skills.png",
    "/images/hero/career-discovery.png"
  ];

  const skills = [
    {
      title: "Creative Skills",
      image: images[0],
    },
    {
      title: "Academic Skills",
      image: images[1],
    },
    {
      title: "No-Code Skills",
      image: images[2],
    },
    {
      title: "Communication Skills",
      image: images[3],
    },
    {
      title: "Career Discovery",
      image: images[4],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((previous) => (previous + 1) % skills.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [skills.length]);

  const activeSkill = skills[activeIndex];
  
  const moveCarousel = (direction) => {
    setActiveIndex((current) =>
      direction === "up"
        ? (current - 1 + skills.length) % skills.length
        : (current + 1) % skills.length
    );
  };

  return (
    <>
      <style>{`
        .winter-hero {
          position: relative;
          width: 100%;
          overflow: hidden;
          box-sizing: border-box;
          padding: 48px 7%;
          background:
            radial-gradient(
              circle at 90% 20%,
              rgba(233, 215, 255, 0.25),
              transparent 32%
            ),
            #fffcf5;
          color: #28105f;
          font-family: Arial, Helvetica, sans-serif;
        }

        .winter-hero *,
        .winter-hero *::before,
        .winter-hero *::after {
          box-sizing: border-box;
        }

        .winter-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.28;
          background-image:
            linear-gradient(
              rgba(112, 77, 158, 0.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(112, 77, 158, 0.08) 1px,
              transparent 1px
            );
          background-size: 28px 28px;
          mask-image: linear-gradient(
            to right,
            transparent,
            black 50%,
            black
          );
        }

        .winter-hero::after {
          content: "";
          position: absolute;
          left: -12%;
          top: 42%;
          width: 45%;
          height: 100px;
          border-top: 12px solid rgba(255, 220, 145, 0.25);
          border-radius: 50%;
          transform: rotate(12deg);
          pointer-events: none;
        }

        .winter-hero-inner {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(300px, 0.95fr);
          align-items: center;
          gap: 40px;
          width: 100%;
          max-width: 1240px;
          margin: 23px auto;
        }

        .winter-hero-content {
          min-width: 0;
          animation: winterFadeIn 0.7s ease both;
        }

        .winter-hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 7px 13px;
          margin-bottom: 18px;
          border: 1px solid #01357f;
          border-radius: 30px;
          background: #f5edff;
          color: #01357f;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .winter-hero-eyebrow span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #01357f;
        }

        .winter-hero-title {
          max-width: 570px;
          margin: 0;
          color: black;
          font-size: clamp(36px, 4.2vw, 62px);
          font-weight: 800;
          line-height: 1.06;
          letter-spacing: -1.8px;
        }

        .winter-hero-title em {
          color: #01357f;
          font-style: normal;
        }

        .winter-hero-subtitle {
          max-width: 490px;
          margin: 18px 0 22px;
          color: #625772;
          font-size: 16px;
          line-height: 1.75;
        }

        .winter-hero-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin-bottom: 24px;
        }

        .winter-hero-tag {
          padding: 8px 12px;
          border: 1px solid #dfd0f6;
          border-radius: 30px;
          background: #fff;
          color: #4b277e;
          font-size: 12px;
          font-weight: 600;
        }

        .winter-hero-tag:nth-child(2) {
          border-color: #f0c4db;
          background: #fff6fb;
          color: #a02b6c;
        }

        .winter-hero-benefits {
          display: grid;
          gap: 14px;
          margin: 0 0 27px;
          padding: 0;
          list-style: none;
        }

        .winter-hero-benefit {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          color: #44365b;
          font-size: 14px;
          line-height: 1.55;
        }

        .winter-hero-check {
          display: inline-flex;
          flex: 0 0 21px;
          width: 21px;
          height: 21px;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #eee3ff;
          color: #6428a6;
          font-size: 12px;
          font-weight: 800;
        }

        .winter-hero-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 48px;
          padding: 0 25px;
          border: 0;
          border-radius: 30px;
          background: #01357f;
          box-shadow: 0 7px 18px rgba(49, 7, 111, 0.17);
          color: #fff;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          transition:
            transform 0.2s ease,
            background 0.2s ease;
        }

        .winter-hero-cta:hover {
          transform: translateY(-2px);
          background: #4c1499;
        }

        .winter-hero-visual {
          position: relative;
          display: flex;
          min-width: 0;
          min-height: 420px;
          align-items: left;
          justify-content: left;
          perspective: 1000px;
        }

        .winter-hero-glow {
          position: absolute;
          width: 78%;
          aspect-ratio: 1;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(200, 168, 255, 0.34),
            rgba(255, 237, 207, 0.2) 52%,
            transparent 72%
          );
        }

        .winter-hero-card-stack {
          position: relative;
          width: min(100%, 390px);
          height: 380px;
        }

        .winter-hero-card-back {
          position: absolute;
          inset: 8px 15px 0;
          border: 1px solid rgba(255, 255, 255, 0.45);
          border-radius: 22px;
          background: #b8a0e4;
          box-shadow: 0 14px 32px rgba(51, 15, 91, 0.12);
        }

        .winter-hero-card-back-one {
          transform: rotate(-7deg) translate(-7px, 1px);
          opacity: 0.7;
        }

        .winter-hero-card-back-two {
          transform: rotate(5deg) translate(5px, 0);
          background: #8061b8;
          opacity: 0.65;
        }

        .winter-hero-card {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: 22px;
          background: #01357f;
          box-shadow: 0 22px 45px rgba(50, 16, 97, 0.24);
          animation: winterCardEnter 0.7s ease both;
        }

        .winter-hero-image-wrap {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 72%;
          min-height: 0;
          padding: 20px 18px 8px;
          background: #f9f4ff;
        }

        .winter-hero-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 10px;
          animation: winterImageEnter 0.8s ease both;
        }

        .winter-hero-image-placeholder {
          display: flex;
          width: 100%;
          height: 100%;
          min-height: 170px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          border: 2px dashed #c7b2e8;
          border-radius: 12px;
          background: #f2e9ff;
          color: #60349a;
          text-align: center;
        }

        .winter-hero-image-placeholder span {
          font-size: 44px;
        }

        .winter-hero-image-placeholder strong {
          font-size: 15px;
        }

        .winter-hero-card-footer {
          display: flex;
          flex: 1;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 7px;
          padding: 14px 18px 18px;
          color: #fff;
          text-align: center;
        }

        .winter-hero-card-footer h3 {
          margin: 0;
          font-size: 21px;
          font-weight: 800;
          line-height: 1.25;
        }

        .winter-hero-card-footer p {
          max-width: 290px;
          margin: 0;
          color: #e5d8f8;
          font-size: 12px;
          line-height: 1.5;
        }

        .winter-hero-skill-list {
          position: absolute;
          top: 50%;
          right: -30px;
          display: grid;
          gap: 11px;
          width: 165px;
          transform: translate(100%, -50%);
        }

        .winter-hero-skill {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 11px;
          color: #786b8b;
          font-size: 13px;
          font-weight: 600;
          transition: all 0.35s ease;
        }

        .winter-hero-skill.active {
          color: #3d146f;
          transform: translateX(-5px);
        }

        .winter-hero-skill-dot {
          display: inline-flex;
          flex: 0 0 20px;
          width: 20px;
          height: 20px;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #f0e7ff;
          color: #6937a6;
          font-size: 11px;
        }

        .winter-hero-indicators {
          position: absolute;
          bottom: -28px;
          left: 50%;
          display: flex;
          gap: 7px;
          transform: translateX(-50%);
        }

        .winter-hero-indicator {
          width: 7px;
          height: 7px;
          padding: 0;
          border: 0;
          border-radius: 10px;
          background: #d3c3e9;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .winter-hero-indicator.active {
          width: 24px;
          background: #58249b;
        }

        @keyframes winterFadeIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes winterCardEnter {
          from {
            opacity: 0.5;
            transform: translateY(12px) rotateY(-5deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateY(0);
          }
        }

        @keyframes winterImageEnter {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @media (min-width: 1500px) {
          .winter-hero {
            padding-top: 60px;
            padding-bottom: 60px;
          }

          .winter-hero-inner {
            max-width: 1380px;
          }
        }

        @media (max-width: 1050px) {
          .winter-hero {
            padding: 42px 4%;
          }

          .winter-hero-inner {
            grid-template-columns: minmax(0, 1fr) minmax(280px, 0.85fr);
            gap: 28px;
          }

          .winter-hero-skill-list {
            right: -12px;
            width: 140px;
          }

          .winter-hero-skill {
            padding: 8px;
            font-size: 10px;
          }

          .winter-hero-card-stack {
            width: 290px;
            height: 340px;
          }

          .winter-hero-visual {
            min-height: 370px;
          }
        }

        @media (max-width: 760px) {
          .winter-hero {
            padding: 34px 20px 55px;
          }

          .winter-hero-inner {
            grid-template-columns: minmax(0, 1fr);
            gap: 28px;
          }

          .winter-hero-content {
            text-align: center;
          }

          .winter-hero-title {
            max-width: 520px;
            margin: 0 auto;
            font-size: clamp(35px, 9vw, 48px);
            letter-spacing: -1.2px;
          }

          .winter-hero-subtitle {
            margin: 16px auto 20px;
            font-size: 14px;
          }

          .winter-hero-tags {
            justify-content: center;
            gap: 7px;
          }

          .winter-hero-tag {
            padding: 7px 10px;
            font-size: 11px;
          }

          .winter-hero-benefits {
            max-width: 410px;
            margin: 0 auto 24px;
            text-align: left;
          }

          .winter-hero-benefit {
            font-size: 13px;
          }

          .winter-hero-cta {
            width: min(100%, 330px);
          }

          .winter-hero-visual {
            min-height: 370px;
            margin: 0 auto;
            width: 100%;
          }

          .winter-hero-card-stack {
            width: min(76%, 330px);
            height: 330px;
          }

          .winter-hero-image-wrap {
            height: 68%;
            padding: 16px 14px 6px;
          }

          .winter-hero-card-footer h3 {
            font-size: 18px;
          }

          .winter-hero-skill-list {
            right: -8px;
            width: 125px;
            gap: 8px;
          }

          .winter-hero-skill {
            gap: 5px;
            padding: 7px 6px;
            font-size: 9px;
          }

          .winter-hero-skill-dot {
            flex-basis: 17px;
            width: 17px;
            height: 17px;
          }
        }

        @media (max-width: 420px) {
          .winter-hero {
            padding-right: 15px;
            padding-left: 15px;
          }

          .winter-hero-title {
            font-size: 35px;
          }

          .winter-hero-visual {
            min-height: 340px;
          }

          .winter-hero-card-stack {
            width: 73%;
            height: 300px;
          }

          .winter-hero-skill-list {
            right: -5px;
            width: 105px;
            gap: 7px;
          }

          .winter-hero-skill {
            padding: 6px 4px;
            font-size: 8px;
          }

          .winter-hero-skill-dot {
            display: none;
          }

          .winter-hero-card-footer {
            padding: 10px;
          }

          .winter-hero-card-footer h3 {
            font-size: 16px;
          }

          .winter-hero-card-footer p {
            font-size: 10px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .winter-hero *,
          .winter-hero *::before,
          .winter-hero *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }

.winter-carousel__controls{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 312px;
  min-width: 0;
  margin-left:-48px;
}




.winter-carousel__arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 33px;
  width: 33px;
  height: 33px;
  padding: 7px;
  margin-left:500px;
  border: 1px solid var(--winter-blue);
  border-radius: 50%;
  background: #004f9e;
  color: white;
  cursor: pointer;
  transition:
    background 0.2s ease,
    color 0.2s ease;
}

.winter-carousel__arrow svg {
  display: block;
  width: 18px;
  height: 18px;
}
.winter-carousel__arrow:hover {
  background: #ffd500;
  color: black;

}

      `}</style>

      <section className="winter-hero">
        <div className="winter-hero-inner">
          {/* LEFT CONTENT */}
          <div className="winter-hero-content" key="hero-content">
            {/* */}
            <div className="winter-hero-eyebrow">
              <span />
              AI WINTER CAMP FOR STUDENTS
            </div> 

            <h1 className="winter-hero-title">
              Build Skills.
              <br />
              Discover Your
              <br />
              <em>Future with AI.</em>
            </h1>

            <p className="winter-hero-subtitle">
              Help students explore their creativity, strengthen academic
              skills, discover new possibilities, and prepare for the future
              with AI-powered learning.
            </p>

            <div className="winter-hero-tags">
              <span className="winter-hero-tag">Creative Learning</span>
              <span className="winter-hero-tag">AI-Powered Skills</span>
              <span className="winter-hero-tag">Future Ready</span>
            </div>

            <ul className="winter-hero-benefits">
              <li className="winter-hero-benefit">
                <span className="winter-hero-check">✓</span>
                <span>
                  Creativity and critical thinking through engaging activities.
                </span>
              </li>

              <li className="winter-hero-benefit">
                <span className="winter-hero-check">✓</span>
                <span>
                  Explore AI, communication, academics, and no-code tools.
                </span>
              </li>

              <li className="winter-hero-benefit">
                <span className="winter-hero-check">✓</span>
                <span>
                  Discover interests and develop practical future-ready skills.
                </span>
              </li>
            </ul>

            <a className="winter-hero-cta" href="https://www.alkemyedtech.com/enroll">
              Enroll Your Child <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* RIGHT ANIMATED SKILL CARD */}
          <div className="winter-hero-visual">
            <div className="winter-hero-glow" />

            <div className="winter-hero-card-stack">
              <div className="winter-hero-card-back winter-hero-card-back-one" />
              <div className="winter-hero-card-back winter-hero-card-back-two" />

              <div className="winter-hero-card" key={activeIndex}>
                <div className="winter-hero-image-wrap">
                  <img
                    className="winter-hero-image"
                    src={activeSkill.image}
                    alt={activeSkill.title}
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                      const placeholder =
                        event.currentTarget.nextElementSibling;
                      if (placeholder) {
                        placeholder.style.display = "flex";
                      }
                    }}
                  />

                  <div
                    className="winter-hero-image-placeholder"
                    style={{ display: "none" }}
                  >
                    <strong>{activeSkill.title}</strong>
                  </div>
                </div>

                <div className="winter-hero-card-footer">
                  <h3>{activeSkill.title}</h3>
                  <p>
                    Explore new ideas, learn by doing, and build skills for
                    tomorrow.
                  </p>
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

              {/* SECTION LABELS */}
              <div className="winter-hero-skill-list">
                {skills.map((skill, index) => (
                  <div
                    key={skill.title}
                    className={`winter-hero-skill ${
                      activeIndex === index ? "active" : ""
                    }`}
                  >
                    <span className="winter-hero-skill-dot">
                      {activeIndex === index ? "✓" : "✦"}
                    </span>
                    <span>{skill.title}</span>
                  </div>
                ))}
              </div>
              

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
    </>
  );
};

export default Hero;

